import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth/";

function readFirebaseEnv() {
  const keys = {
    apiKey: "EXPO_PUBLIC_FIREBASE_API_KEY",
    authDomain: "EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN",
    projectId: "EXPO_PUBLIC_FIREBASE_PROJECT_ID",
    storageBucket: "EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID",
    appId: "EXPO_PUBLIC_FIREBASE_APP_ID",
  };
  const out = {};
  const missing = [];
  for (const [prop, envName] of Object.entries(keys)) {
    const value = process.env[envName];
    if (!value) missing.push(envName);
    out[prop] = value;
  }
  if (missing.length) {
    throw new Error(
      `Missing Firebase env vars: ${missing.join(", ")}. Copy .env.example to .env in the project root and add values from the Firebase console (Project settings → Your apps).`
    );
  }
  return out;
}

const firebaseConfig = readFirebaseEnv();
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, app, auth };
