import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "./config";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { useAuth } from "../../context/authContext";
import { collection, addDoc } from "firebase/firestore";

// function showEmailAlert(email) {
//   window.localStorage.setItem("emailForSignIn", email);
// }

export const signup = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    await emailVerification();
    const user = userCredential.user;
    return user;
  } catch (error) {
    throw error;
  }
};

export const emailVerification = async () => {
  const user = auth.currentUser;
  try {
    await sendEmailVerification(auth.currentUser, {
      handleCodeInApp: true,
      url: "http://localhost:19006/verify",
    }).then(() => {
      // showEmailAlert(user.email);
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(
      "Email Verification error:********** ",
      errorCode,
      errorMessage,
    );
    throw error;
  }
};

export const login = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const userId = userCredential.user.uid;

    // Fetch user role from Firestore
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      const userRole = userData.role;
      return { success: true, userRole };
    }
    return { success: true };
  } catch (e) {
    let msg = e.message;
    if (msg.includes("(auth/invalid-email)")) msg = "Invalid email";
    if (msg.includes("(auth/invalid-credential)")) msg = "Wrong credentials";
    return { success: false, msg };
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
    return { success: true };
  } catch (e) {
    return { success: false, msg: e.message, error: e };
  }
};

export const saveUserData = async (id, firstName, lastName, role) => {
  try {
    // Reference to the 'users' collection
    // const usersCollection = collection(db, "users");

    // Add a new document with the user data
    // const docRef = await setDoc(usersCollection, {
    //   id,
    //   firstName,
    //   lastName,
    //   role,
    // });
    await setDoc(doc(db, "users", id), {
      firstName,
      lastName,
      role,
      userId: id,
    });
    return { success: true };
    // console.log("Document written with ID: ", );
  } catch (error) {
    console.error("Error adding document: ", error);
  }
};

export const fetchUserData = async (uid) => {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));
    if (userDoc.exists()) {
      const userData = userDoc.data();
      return { success: true, data: userData };
    }
    return { success: true };
    // eslint-disable-next-line no-unused-vars
  } catch (e) {
    let msg = "App not working";
    return { success: false, msg };
  }
};
