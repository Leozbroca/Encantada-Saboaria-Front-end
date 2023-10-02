import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebaseconfig";

const googleProvider = new GoogleAuthProvider();

const loginGmailFirebase = async () => {
    try {
        const response = await signInWithPopup(auth, googleProvider);
        console.log("Response", response);
    } catch (error) {
        console.log("ERROR", error);
    }
};

export { loginGmailFirebase };