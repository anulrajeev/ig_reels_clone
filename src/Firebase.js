import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD1fsegruayqBMWG0LjiPsAGt9dd_uJtIg",
    authDomain: "ig-reels-1c950.firebaseapp.com",
    projectId: "ig-reels-1c950",
    storageBucket: "ig-reels-1c950.appspot.com",
    messagingSenderId: "745270777391",
    appId: "1:745270777391:web:ab40e3d6c8df00f232d8da"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  export default db;