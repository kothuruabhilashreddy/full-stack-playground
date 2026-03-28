import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth/";

// eslint-disable-next-line prettier/prettier

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWvvdDQ-mx3-SdoK-mmeXPLzKR3gEahs8",
  authDomain: "image-lab-2b52f.firebaseapp.com",
  projectId: "image-lab-2b52f",
  storageBucket: "image-lab-2b52f.appspot.com",
  messagingSenderId: "846302281857",
  appId: "1:846302281857:web:c0664cae69b655b4978d80",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// const persistenceAuth = initializeAuth(app, {
//   persistence: getReactNativePersistence(AsyncStorage),
// });

const db = getFirestore(app);

const auth = getAuth(app);

export { db, app, auth };
