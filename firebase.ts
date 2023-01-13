// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5L6qzJT94Q0v109GCoVrclSXrAMkMbf0",
  authDomain: "netflix-clone-cd40d.firebaseapp.com",
  projectId: "netflix-clone-cd40d",
  storageBucket: "netflix-clone-cd40d.appspot.com",
  messagingSenderId: "501368031459",
  appId: "1:501368031459:web:8c9054d422a4f0f4d35dd6"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }