import firebase from 'firebase/app';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDUe2UDqCmCUbdsfAamXVF4vpxS3x4SH2k",
    authDomain: "crud-react-805c1.firebaseapp.com",
    projectId: "crud-react-805c1",
    storageBucket: "crud-react-805c1.appspot.com",
    messagingSenderId: "452040422285",
    appId: "1:452040422285:web:76290714a31a3dbd5383c4"
};

const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore();


