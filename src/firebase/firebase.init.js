import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initializedAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initializedAuthentication;