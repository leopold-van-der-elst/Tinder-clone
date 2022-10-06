import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDdIZoj-2BVd1N4ToFu6RaGRNh4gF00WXY",
    authDomain: "tinder-clone-61b72.firebaseapp.com",
    projectId: "tinder-clone-61b72",
    storageBucket: "tinder-clone-61b72.appspot.com",
    messagingSenderId: "706488407852",
    appId: "1:706488407852:web:f20cd79aa819572a4ffe89",
    measurementId: "G-W16VXS48Y0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
 export default db;