// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: process.env. Add SDKs for Firebase products that you want to use
// https: process.env.//firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env. process.env.REACT_APP_apiKey,
//   authDomain: process.env.process.env.REACT_APP_authDomain,
//   projectId: process.env.process.env.REACT_APP_projectId,
//   storageBucket: process.env.process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.process.env.REACT_APP_messagingSenderId,
//   appId: process.env.process.env.REACT_APP_appId 
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId 
  };
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyCNzd_K4Kezu8hGmqJMm8MDvKxpAn8WicY",
//   authDomain: "leptop-1d27d.firebaseapp.com",
//   projectId: "leptop-1d27d",
//   storageBucket: "leptop-1d27d.appspot.com",
//   messagingSenderId: "693257155076",
//   appId: "1:693257155076:web:b01e274d3bf397b88ebb51"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;