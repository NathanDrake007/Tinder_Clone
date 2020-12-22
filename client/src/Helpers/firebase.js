import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAEmpEmdpRQBIa79ybQZLooz-IhzusZSao",
  authDomain: "projects-7870b.firebaseapp.com",
  databaseURL: "https://projects-7870b.firebaseio.com",
  projectId: "projects-7870b",
  storageBucket: "projects-7870b.appspot.com",
  messagingSenderId: "453435291951",
  appId: "1:453435291951:web:500f32096cd0d4c504c9da",
  measurementId: "G-XRSTF5ET4S",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
export { db, auth, storage };
