// Import the functions you need from the SDKs you need
import { getApps, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
import { GoogleAuthProvider ,getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC4bkgqvBUKoeOEuIJdJVTHJvV0vnSpSAE",
  authDomain: "epic-chat-15e02.firebaseapp.com",
  projectId: "epic-chat-15e02",
  storageBucket: "epic-chat-15e02.appspot.com",
  messagingSenderId: "491150137139",
  appId: "1:491150137139:web:b21506f2ca748324bed046",
  measurementId: "G-Y4DGR9RDGD"
};

// Initialize Firebase
const app = getApps().length===0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app)
const auth = getAuth(app)
const storage = getStorage(app)
const provider = new GoogleAuthProvider()

export {db,auth,storage,provider}