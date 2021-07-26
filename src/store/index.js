import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './auth';
import firebase from 'firebase/app';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
        uploadToStorage: async function (state, { file, path }) {
            const storageRef = firebase.storage().ref();
            return await storageRef
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
    },
    modules: {
        Auth,
    },
});

    // removeFromStorage: async function (_state, { url }) {
        //     return await firebase.storage().refFromURL(url).delete();
        // },