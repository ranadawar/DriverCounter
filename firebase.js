// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB_kmr4rqyzxLSgAiXvZOycUsHN7MiAnis",
  authDomain: "drivercounter-d51ba.firebaseapp.com",
  projectId: "drivercounter-d51ba",
  storageBucket: "drivercounter-d51ba.appspot.com",
  messagingSenderId: "514345326311",
  appId: "1:514345326311:web:f11ee0cface63b68d8b442",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
