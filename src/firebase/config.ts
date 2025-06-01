import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyClU13oNDGHinO1FDfZg49GW5qzIAGVyY8",
    authDomain: "besafe-appgs.firebaseapp.com",
    projectId: "besafe-appgs",
    storageBucket: "besafe-appgs.firebasestorage.com",
    messagingSenderId: "394205907567",
    appId: "1:394205907567:web:ec6a3bb788ef78dcab1b9a"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
