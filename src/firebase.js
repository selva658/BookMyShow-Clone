import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9-gmOsKHRoK8i5t8-y1cpdYcfOSyuaNQ",
  authDomain: "dummyclone-4985a.firebaseapp.com",
  projectId: "dummyclone-4985a",
  storageBucket: "dummyclone-4985a.appspot.com",
  messagingSenderId: "52600767374",
  appId: "1:52600767374:web:24b01f95eec47015bd5adf",
  measurementId: "G-0V9EQBH3KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
