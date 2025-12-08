import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0djfR7anv0ZeO-qPusMhgdHqswYP_PjM",
  authDomain: "bishnupriya-manipuri.firebaseapp.com",
  projectId: "bishnupriya-manipuri",
  storageBucket: "bishnupriya-manipuri.firebasestorage.app",
  messagingSenderId: "1052525709008",
  appId: "1:1052525709008:web:fe501bf1948023347300d5",
  measurementId: "G-75BDTV743R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
