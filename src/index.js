import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


// // Import the functions you need from the SDKs you need
// import {
//     initializeApp
// } from "firebase/app";
// import {
//     getAnalytics
// } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyDR1WBsXDKhHFIzVd8tkl_tI_X1wv2C1l8",
//     authDomain: "boidin-mathieu.firebaseapp.com",
//     projectId: "boidin-mathieu",
//     storageBucket: "boidin-mathieu.appspot.com",
//     messagingSenderId: "338249359500",
//     appId: "1:338249359500:web:6cee8c9bd39c5f97f89ba9",
//     measurementId: "G-H5MWRQY74M"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

ReactDOM.render( < App / > , document.getElementById('root'));
registerServiceWorker();