import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './auth';
import firebase from 'firebase/app';
import 'firebase/storage';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        uploadToStorage: async function (_state, { file, path }) {
            return await firebase
                .storage()
                .ref()
                .child(path + Math.random() + file.name)
                .put(file)
                .then(async function (snapshot) {
                    console.log('Uploaded', snapshot.totalBytes, 'bytes.');
                    console.log('File metadata:', snapshot.metadata);
                    return await snapshot.ref.getDownloadURL();
                })
                .catch(function (error) {
                    console.error('Upload failed:', error);
                });
        },

        removeFromStorage: async function (_state, url) {
            return await firebase
                .storage()
                .refFromURL(url)
                .delete()
                .then(() => console.log(`File ${url} deleted from storage`))
                .catch(() => console.log(`Problem to delete file`));
        },
    },
    modules: {
        Auth,
    },
});
