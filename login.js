import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
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
const auth = getAuth(app);

document.getElementById('submit_1').addEventListener('click', async function(e) {
    e.preventDefault();
    
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // Redirect to a different page after successful sign-in
        window.location.href ="home.html"; // Change to your dashboard page
    } catch (error) {
        document.getElementById('error-message').innerText = error.message;
      alert(errorMessage)
    }
});

/////////////////// Google Authentication ///////////