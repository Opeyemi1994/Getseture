import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyC2lHINLFYld-YXgDZPOTMKD5W27-QyZZ8",
    authDomain: "e-com-a24b7.firebaseapp.com",
    databaseURL: "https://e-com-a24b7.firebaseio.com",
    projectId: "e-com-a24b7",
    storageBucket: "e-com-a24b7.appspot.com",
    messagingSenderId: "678040297545",
    appId: "1:678040297545:web:0ae57bf5fc1ee8f7a99f98",
    measurementId: "G-8EYL2WYHQJ"
}

firebase.initializeApp(config)
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt:'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)
 
export default firebase;