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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;