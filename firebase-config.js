import { initializeApp } from "firebase/app"; 
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js"; 
import { getAnalytics } from "firebase/analytics"; 

// Your web app's Firebase configuration 
const firebaseConfig = { 
    apiKey: "AIzaSyAgp1Q4z2tgau1jZ_oSlLxvnz-nqkUieug", 
    authDomain: "hightech-e39de.firebaseapp.com", 
    projectId: "hightech-e39de", 
    storageBucket: "hightech-e39de.firebasestorage.app", 
    messagingSenderId: "975351630077", 
    appId: "1:975351630077:web:cdb4053159d8a88cd59694", 
    measurementId: "G-YWSK5W3E33" 
}; 

// Initialize Firebase 
const app = initializeApp(firebaseConfig); 
const analytics = getAnalytics(app); 
const auth = getAuth(); 

// Register new users 
export async function registerUser(email, password) { 
    try { 
        const userCredential = await createUserWithEmailAndPassword(auth, email, password); 
        const user = userCredential.user; 
        localStorage.setItem('userName', email.split('@')[0]); 
        return user; 
    } catch (error) { 
        throw error; 
    } 
} 

// Login existing users 
export async function loginUser(email, password) { 
    try { 
        const userCredential = await signInWithEmailAndPassword(auth, email, password); 
        const user = userCredential.user; 
        localStorage.setItem('userName', email.split('@')[0]); 
        return user; 
    } catch (error) { 
        throw error; 
    } 
} 

// Logout users 
export async function logoutUser() { 
    try { 
        await signOut(auth); 
        localStorage.removeItem('userName'); 
    } catch (error) { 
        throw error; 
    } 
}