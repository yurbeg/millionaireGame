import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCTUoRYCeiUpLE21uUwWkftNq8iWb37uh0",
  authDomain: "millionaire-game-4b7b9.firebaseapp.com",
  projectId: "millionaire-game-4b7b9",
  storageBucket: "millionaire-game-4b7b9.firebasestorage.app",
  messagingSenderId: "327422073150",
  appId: "1:327422073150:web:8728aee024dd31c54c346f",
  measurementId: "G-JJFX7NC3JG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {
  auth
}

