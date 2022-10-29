let firebaseConfig = {
  apiKey: "AIzaSyA6brblPmbXrKeNDxLPf002C4-Q9dVM73c",
  authDomain: "gea-blog-30f4e.firebaseapp.com",
  projectId: "gea-blog-30f4e",
  storageBucket: "gea-blog-30f4e.appspot.com",
  messagingSenderId: "1052858675492",
  appId: "1:1052858675492:web:a01c68969908d89999c3b1"
};

firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();