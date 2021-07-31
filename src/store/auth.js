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
    },
};
