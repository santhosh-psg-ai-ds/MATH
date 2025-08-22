// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  projectId: "math-whiz-kids-cjnir",
  appId: "1:545650615062:web:a0b7e2fc10ef856754e637",
  storageBucket: "math-whiz-kids-cjnir.firebasestorage.app",
  apiKey: "AIzaSyCgi4afkfo2Sf_G-4t3E2IHmu3JCVmUiiI",
  authDomain: "math-whiz-kids-cjnir.firebaseapp.com",
  messagingSenderId: "545650615062",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
