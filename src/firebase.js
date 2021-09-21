

import * as firebase from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyBGo3vz2DbzXNP7sSs-IgfH_zUHBRWoFW0",
  authDomain: "mystore-8131a.firebaseapp.com",
  projectId: "mystore-8131a",
  storageBucket: "mystore-8131a.appspot.com",
  messagingSenderId: "539539063354",
  appId: "1:539539063354:web:5fe91c20959e1b381bab03",
  measurementId: "G-QHHLM6M3PL"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = getFirestore(app);
const theCollect = collection(db, 'MyStore');

export {
    theCollect
}
