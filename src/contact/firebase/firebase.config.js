
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwj_6L7zENaash8OoyOgcV_7qHZY4a-Bc",
  authDomain: "react-ecommarce.firebaseapp.com",
  projectId: "react-ecommarce",
  storageBucket: "react-ecommarce.appspot.com",
  messagingSenderId: "365124187756",
  appId: "1:365124187756:web:ab6c381390915a29d5ca49"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);












{/*

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:  import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

//const provider =new GoogleAuthProvider();
//export {auth, provider}; 
*/}
