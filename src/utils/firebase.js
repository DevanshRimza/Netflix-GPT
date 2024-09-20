// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVxX2P-wiNrmfFLLpGn9PcLsRCZLOv9iw",
  authDomain: "netflixgpt-4907d.firebaseapp.com",
  projectId: "netflixgpt-4907d",
  storageBucket: "netflixgpt-4907d.appspot.com",
  messagingSenderId: "577072345573",
  appId: "1:577072345573:web:e88cf2ffcef1ab35abff0c",
  measurementId: "G-WYRBFC1R8X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



/*
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwKbz6Wo1UVp1BzKSJVXV6hTz3vwy74k8",
  authDomain: "netflixgpt-57a56.firebaseapp.com",
  projectId: "netflixgpt-57a56",
  storageBucket: "netflixgpt-57a56.appspot.com",
  messagingSenderId: "1093133802935",
  appId: "1:1093133802935:web:c284961959cce2a54adc32",
  measurementId: "G-DEHFXGZ999",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/
export const auth = getAuth();
//export const auth = getAuth(app); // Pass the app instance
