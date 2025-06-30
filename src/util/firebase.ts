// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app"
import { Auth, connectAuthEmulator, getAuth } from "firebase/auth"
import {
  connectFirestoreEmulator,
  Firestore,
  getFirestore,
} from "firebase/firestore"
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import firebase from "firebase/compat"
import { IS_DEV } from "./util"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkMG6UJ1bfGBYl5pQP08rAk3eQBI2Geio",
  authDomain: "robert-lucas.firebaseapp.com",
  projectId: "robert-lucas",
  storageBucket: "robert-lucas.firebasestorage.app",
  messagingSenderId: "597127804780",
  appId: "1:597127804780:web:58a7ea379d53bed90da549",
  measurementId: "G-MQZJQK7SPC",
}

let _app = undefined
let _auth = undefined
let _db = undefined
const USE_EMULATORS = false

if (import.meta.env.MODE === "test") {
  //
} else if (IS_DEV && USE_EMULATORS) {
  _app = initializeApp(firebaseConfig)
  _auth = getAuth(_app)
  _db = getFirestore(_app)
  console.log("Connecting to emulators")
  connectAuthEmulator(_auth, "http://localhost:9099")
  connectFirestoreEmulator(_db, "localhost", 8080)
} else {
  _app = initializeApp(firebaseConfig)
  _auth = getAuth(_app)
  _db = getFirestore(_app)
}

export const app: FirebaseApp = _app!
export const auth: Auth = _auth!
export let db: Firestore = _db!

export function setTestDBContext(
  context: Firestore | firebase.firestore.Firestore
) {
  if (import.meta.env.MODE === "test") {
    db = context
  }
}
