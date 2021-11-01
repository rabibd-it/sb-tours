import { getAuth, signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializedAuthentication from "../firebase/firebase.init";

initializedAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // Registration Using Email and Password
    const SignUpUsingEmailPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login Using Email and Password
    const logInUsingEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Login Using Google
    const logInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // Login Using Github
    const logInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider);
    }

    // Update user profile

    const updateUserProfile = (userData) => {
        return updateProfile(auth.currentUser, userData);
    }

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            setUser({});
        }).finally(() => setIsLoading(false));
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
    }, []);

    return {
        SignUpUsingEmailPassword,
        logInUsingEmailPassword,
        logInUsingGoogle,
        logInUsingGithub,
        updateUserProfile,
        logOut,
        user,
        isLoading
    }
}

export default useFirebase;