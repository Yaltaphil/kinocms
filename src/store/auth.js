import firebase from "firebase/app";

export default {
    actions: {
        async login() {
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword("admin@admin.admin", "123456");
                console.log("Logged to firebase...");
            } catch (e) {
                console.log(e);
            }
        },

        async register({ dispatch }, { email, password }) {
            try {
                await firebase
                    .auth()
                    .createUserWithEmailAndPassword(email, password);
                const uid = dispatch("getUid");
                await firebase.database().ref(`/users/arrayIdx/${uid}`).set({});
            } catch (e) {
                console.log(e);
            }
        },

        getUid() {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        },

        async logout() {
            try {
                await firebase.auth().signOut();
            } catch (e) {
                console.log(e);
            }
        },
    },
};
