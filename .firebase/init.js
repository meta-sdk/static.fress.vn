// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDouE0SrWTg3aqC_cxpAMu0w8HxCxg3eQ8",
  authDomain: "meta-sdk-github.firebaseapp.com",
  databaseURL: "https://meta-sdk-github-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "meta-sdk-github",
  storageBucket: "meta-sdk-github.appspot.com",
  messagingSenderId: "441279583861",
  appId: "1:441279583861:web:5bdfce97cbee7142c80a3c",
  measurementId: "G-8Y675G6BQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
