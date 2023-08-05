import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCmz9FpNCDmSNP7l6B5QdJ_EiqK6CBafDU",
  authDomain: "plastic-detection-598e8.firebaseapp.com",
  databaseURL: "https://plastic-detection-598e8-default-rtdb.firebaseio.com",
  projectId: "plastic-detection-598e8",
  storageBucket: "plastic-detection-598e8.appspot.com",
  messagingSenderId: "17850650140",
  appId: "1:17850650140:web:2a7e233f3eaa50fca8d9d9",
  measurementId: "G-93YTTTVMVG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);


