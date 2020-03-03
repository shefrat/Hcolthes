import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').doc('tH9sX3NWFPrN9UC5IAFx').collection('cartItems').doc('ZIe7u8SrdR6jZeRZSPCr')
firebase.doc('/users/tH9sX3NWFPrN9UC5IAFx/cartItems/ZIe7u8SrdR6jZeRZSPCr')