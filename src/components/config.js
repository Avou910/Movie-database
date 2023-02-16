// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfXc7CB1JT-bgqkv4eZI5bHNFPLOkpyek",
  authDomain: "mymovies-7daea.firebaseapp.com",
  databaseURL: "https://mymovies-7daea-default-rtdb.firebaseio.com",
  projectId: "mymovies-7daea",
  storageBucket: "mymovies-7daea.appspot.com",
  messagingSenderId: "358423655458",
  appId: "1:358423655458:web:ec98a0bdd7adb8f4e9467b",
  measurementId: "G-5XDG104YJ7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;