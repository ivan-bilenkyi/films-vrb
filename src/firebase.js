import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const API_KEY = import.meta.env.VITE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const DATABASE_URI = import.meta.env.VITE_DATABASE_URI;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_APP_ID;


const firebaseConfig = {
    apiKey: "AIzaSyAe4PlXLVgvWzlkdAEpwSQGRoKVps0uNts",
    authDomain: "films-59b2a.firebaseapp.com",
    databaseURL: "https://films-59b2a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "films-59b2a",
    storageBucket: "films-59b2a.appspot.com",
    messagingSenderId: "760793981786",
    appId: "1:760793981786:web:469dc3218e5ffb19e10963"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const database = getDatabase(app);