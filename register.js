// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPjJZXWiISZobrUejINVjWjfxGgt2dRQU",
  authDomain: "trade-f7be5.firebaseapp.com",
  projectId: "trade-f7be5",
  storageBucket: "trade-f7be5.firebasestorage.app",
  messagingSenderId: "577590773461",
  appId: "1:577590773461:web:cab2452dcd110d2366445c",
  measurementId: "G-3VRR7QSC4J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//submit button
const signup=document.getElementById('submit');
signup.addEventListener("click", 
 (event)=>{
    event.preventDefault()
    //inputs
const email=document.getElementById('email').value;
const password=document.getElementById('password').value;

    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating account......")
    window.location.href="home.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
});

//////////////// Google Authentication ///////////////////
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });