// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";  //getAuth is for email,password type authentication and GoogleAuthProvider is for google authentication
import { getFirestore } from "firebase/firestore";    // for firestore ki database use krne k liye
import { getStorage } from "firebase/storage";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgd1Kdw7zzoNVJkDgO46FkzoJCXR1mKfY",
  authDomain: "reactfirebase01-662f0.firebaseapp.com",
  projectId: "reactfirebase01-662f0",
  storageBucket: "reactfirebase01-662f0.appspot.com",
  messagingSenderId: "818164872509",
  appId: "1:818164872509:web:25028d7fa371f2e3cec154",
  measurementId: "G-TSTBC9RBEF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // for authentication with firebase we are gonna use it
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

// const analytics = getAnalytics(app);