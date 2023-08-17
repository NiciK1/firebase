// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2QxwBF75tYq_wjtoxSH5LewkgdvomN5o",
  authDomain: "react-course-23bb6.firebaseapp.com",
  projectId: "react-course-23bb6",
  storageBucket: "react-course-23bb6.appspot.com",
  messagingSenderId: "881911315529",
  appId: "1:881911315529:web:c7add5f5ce8c3146fcd398"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();