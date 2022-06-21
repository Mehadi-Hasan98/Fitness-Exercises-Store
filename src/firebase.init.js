// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNqz3T5gHL8rt8rNik63FYgCTRVqiZsLw",
  authDomain: "fitness-exercises-store.firebaseapp.com",
  projectId: "fitness-exercises-store",
  storageBucket: "fitness-exercises-store.appspot.com",
  messagingSenderId: "842672875755",
  appId: "1:842672875755:web:0f3c8e9b755e93ef2776ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;