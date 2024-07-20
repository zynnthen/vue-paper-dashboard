// src/firebase/firebaseConfig.js
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBEQK1NxV6chOGRyVxhnQmCnMsMK68Sghg",
  authDomain: "vue-paper-demo.firebaseapp.com",
  projectId: "vue-paper-demo",
  storageBucket: "vue-paper-demo.appspot.com",
  messagingSenderId: "674679516935",
  appId: "1:674679516935:web:fce73e41f792c6aa789fa2",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

// Set persistence to local
auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
