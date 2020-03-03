import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBczXAXx1Ja8ofmuWVWgIGUzXpMFFDW8v4",
    authDomain: "crwn-db-3b281.firebaseapp.com",
    databaseURL: "https://crwn-db-3b281.firebaseio.com",
    projectId: "crwn-db-3b281",
    storageBucket: "crwn-db-3b281.appspot.com",
    messagingSenderId: "1013765789630",
    appId: "1:1013765789630:web:fe2fd7c4c801dda3338bef",
    measurementId: "G-TJ944CBYZE"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;