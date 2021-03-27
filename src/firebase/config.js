import firebase from 'firebase/app'
 import 'firebase/storage';
 import 'firebase/firestore';
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyB5ThI6uU_PTRz-_wOl5lsXO83PAcKAeMY",
    authDomain: "photo-gram-45781.firebaseapp.com",
    projectId: "photo-gram-45781",
    storageBucket: "photo-gram-45781.appspot.com",
    messagingSenderId: "1086642257786",
    appId: "1:1086642257786:web:3d37bbc429d4c2e5a2e0c3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {projectStorage, projectFirestore, timestamp};