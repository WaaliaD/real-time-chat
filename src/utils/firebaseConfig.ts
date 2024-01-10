import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, getAuth, signOut } from "firebase/auth";
import { getFirestore, addDoc, collection, getDocs, query, orderBy } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBNP7W0vRKoG7P0mNelexHtKAXu098-354",
    authDomain: "chat-3ef6f.firebaseapp.com",
    projectId: "chat-3ef6f",
    storageBucket: "chat-3ef6f.appspot.com",
    messagingSenderId: "378224756356",
    appId: "1:378224756356:web:31e5cbd600b9b45dc964d1",
    measurementId: "G-LRG38XC5E4"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
const db = getFirestore(app);

export const logInFirebase = async () => {
    await signInWithPopup(auth, provider);
}
export const logOutFirebase = async () => {
    await signOut(auth);
}

export const addData = async (data: {}) => {
    await addDoc(collection(db, 'messages'), data)
}

export const queryForGet = query(
    collection(db, 'messages'),
    orderBy('date', "desc"),
)

export const getData = async () => {
    return await getDocs(queryForGet)
}