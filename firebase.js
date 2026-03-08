import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAQK1GHgtajdfHr8D1d2IgD3Vfof1OcYJ4",
  authDomain: "mhtcet-fa7b6.firebaseapp.com",
  projectId: "mhtcet-fa7b6",
  storageBucket: "mhtcet-fa7b6.firebasestorage.app",
  messagingSenderId: "70570844132",
  appId: "1:70570844132:web:3110635e3e7e48a554f1f1"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);