import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs8HbTaCck4eBPfSgmILOsXoD82gN-M6k",
  authDomain: "netflixgpt-ab58b.firebaseapp.com",
  projectId: "netflixgpt-ab58b",
  storageBucket: "netflixgpt-ab58b.appspot.com",
  messagingSenderId: "672156276326",
  appId: "1:672156276326:web:04b2843439cb79ddd47fa7",
  measurementId: "G-JT2QZCXYFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);