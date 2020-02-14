import * as firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyAoZxbcq7F6jxz4rvVMCNGpbKSLdSU_Uzg",
    authDomain: "photowall-26636.firebaseapp.com",
    databaseURL: "https://photowall-26636.firebaseio.com",
    projectId: "photowall-26636",
    storageBucket: "photowall-26636.appspot.com",
    messagingSenderId: "708575166189",
    appId: "1:708575166189:web:ec05255a03318dfa20d6e4"
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {database};