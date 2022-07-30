import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDRVqSz7cVlue8K2ShidAVxFxUxmgb5kkU",
  authDomain: "facebook-messenger-clone-67215.firebaseapp.com",
  projectId: "facebook-messenger-clone-67215",
  storageBucket: "facebook-messenger-clone-67215.appspot.com",
  messagingSenderId: "742807111105",
  appId: "1:742807111105:web:55e5a45bf04dc1e19bdb40",
  measurementId: "G-C8HV1LG12R",
});

const db = firebaseApp.firestore();

export { db };
