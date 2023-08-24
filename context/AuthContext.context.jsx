import { createContext, useContext } from "react"
import { GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, db } from "../config/firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import userObjModel from "../models/userObjModel.model";

const UserContext = createContext();

export const AuthContextProvider = ({children}) => {
    const isUserExistsOnFirestore= async (user) => {
        try {
            const {uid} = user;
            const userDocRef = doc(db, "users", uid);
            const userDoc = await getDoc(userDocRef);
            if(userDoc.exists()) {
                return true;
            } else {
                return false;
            }        
        } catch (e) {
            return e;
        }
    }

    const getUserFromFirestore = async (user) => {
        try {
            const {uid} = user;
            const userDocRef = doc(db, "users", uid);
            const userDoc = await getDoc(userDocRef);
            
            if(userDoc.exists()) {
                return userDoc.data();
            } else {
                return false;
            }
        } catch (e) {
            return e;
        }
    }

    const createUserOnFirestore = async (user) => {
        try {
            const {uid} = user;
            const userObj = userObjModel(user);
            const userDocRef = doc(db, "users", uid); 
            await setDoc(userDocRef, userObj);
            return true;
        } catch (e) {
            return e;
        }
    }
    
    const authWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const {user} = await signInWithPopup(auth, provider);
            return user;
        } catch (e) {
            return e;
        }
    }

    const authWithGithub = async () => {
        try {
            const provider = new GithubAuthProvider();
            const {user} = await signInWithPopup(auth, provider);
            return user;
        } catch (e) {
            return e;
        }
    }

    const signOutUser = () => {
        try {
            const signOutStatus = signOut(auth);
            return signOutStatus;
        } catch (e) {
            return e;
        }
    }
    
    return (
        <UserContext.Provider value={{signOutUser, authWithGoogle, authWithGithub, isUserExistsOnFirestore, createUserOnFirestore, getUserFromFirestore}}>
            {children}
        </UserContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(UserContext);
}