import firebase from 'firebase/app';
import 'firebase/storage';

export default {
    actions: {
        async uploadToStorage(_state, { file, path }) {
            return await firebase
                .storage()
                .ref()
                .child(path + Math.random() + file.name)
                .put(file)
                .then(async (snapshot) => {
                    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
                    console.log('File metadata:', snapshot.metadata);
                    return await snapshot.ref.getDownloadURL();
                })
                .catch((error) => {
                    console.error('Upload failed:', error);
                });
        },

        async removeFromStorage(_state, url) {
            return await firebase
                .storage()
                .refFromURL(url)
                .delete()
                .then(() => console.log(`File ${url} deleted from storage`))
                .catch(() => console.log(`Problem to delete file`));
        },
    },
};