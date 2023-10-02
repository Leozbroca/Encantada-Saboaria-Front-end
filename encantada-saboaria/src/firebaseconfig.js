import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVqp32pVAjT5jhdp8m1UghLb9OK-KqN_k",
  authDomain: "encantada-saboaria.firebaseapp.com",
  projectId: "encantada-saboaria",
  storageBucket: "encantada-saboaria.appspot.com",
  messagingSenderId: "269263058421",
  appId: "1:269263058421:web:a19175d5ade7a64fc3dcbc",
  measurementId: "G-GY142EHM5Z"
};

export const appG = initializeApp(firebaseConfig);
export const analytics = getAnalytics(appG);
export const auth = getAuth(appG);