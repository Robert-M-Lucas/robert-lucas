import {GoogleAuthProvider, signInWithPopup, User} from "firebase/auth";
import { auth } from "./firebase";

// export function promptSignInWait(): User | null {
//     let done = false;
//     let user = null;
//     signInWithGoogle().then((u) => {
//         done = true;
//         user = u;
//     });
//     while (!done) {};
//     return user;
// };

export async function promptSignIn(): Promise<User | null> {
    return signInWithGoogle()
};

// Initialize a new Google Auth Provider
const googleProvider = new GoogleAuthProvider();

// Function to sign in with Google
export const signInWithGoogle = async (): Promise<User | null> => {
    const result = await signInWithPopup(auth, googleProvider);
    // Return the entire user object
    return result.user;
};