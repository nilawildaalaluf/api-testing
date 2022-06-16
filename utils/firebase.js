const firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyD8uJaWBiCbKpH3s-0XIfVWBMiF_Dz0tPs",
  authDomain: "api-qa-demo.firebaseapp.com",
  projectId: "api-qa-demo",
  storageBucket: "api-qa-demo.appspot.com",
  messagingSenderId: "993447472335",
  appId: "1:993447472335:web:34431e560c34aa7544dbba",
  measurementId: "G-LH2DB6SMND",
};

firebase.initializeApp(firebaseConfig); //initialize firebase app
module.exports = { firebase }; //export the app

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD8uJaWBiCbKpH3s-0XIfVWBMiF_Dz0tPs",
//   authDomain: "api-qa-demo.firebaseapp.com",
//   projectId: "api-qa-demo",
//   storageBucket: "api-qa-demo.appspot.com",
//   messagingSenderId: "993447472335",
//   appId: "1:993447472335:web:34431e560c34aa7544dbba",
//   measurementId: "G-LH2DB6SMND"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
