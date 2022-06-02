// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhbryxs41eRnLJ-O1KkCLb7jl9b29VJsc",
  authDomain: "petshop-4c907.firebaseapp.com",
  projectId: "petshop-4c907",
  storageBucket: "petshop-4c907.appspot.com",
  messagingSenderId: "518788014157",
  appId: "1:518788014157:web:349126c5688e398d5d3c04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}