import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
	apiKey: "AIzaSyDLHldBuDbGfiplelSBJYDkhaunMn3CI4M",
	authDomain: "sidegigs-c6f4a.firebaseapp.com",
	projectId: "sidegigs-c6f4a",
	storageBucket: "sidegigs-c6f4a.appspot.com",
	messagingSenderId: "538817090559",
	appId: "1:538817090559:web:1746bf759b6a86ad1b8dca",
	measurementId: "G-BVP1GRFRSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app);
