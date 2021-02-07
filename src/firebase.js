import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUV-IB_Js7QzU2K5tfaVr-HXFtvmAsT2U",
  authDomain: "realtime-app-22dca.firebaseapp.com",
  projectId: "realtime-app-22dca",
  storageBucket: "realtime-app-22dca.appspot.com",
  messagingSenderId: "203990793843",
  appId: "1:203990793843:web:eb07e0ec834fc87185b406",
  measurementId: "G-HBXXSFP0NY",
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
