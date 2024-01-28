// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-analytics.js";
import { getAuth,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_f2pD6q1P7yUA9VnHhZHW1cORF_d2538",
    authDomain: "grocery-16363.firebaseapp.com",
    projectId: "grocery-16363",
    storageBucket: "grocery-16363.appspot.com",
    messagingSenderId: "289717138998",
    appId: "1:289717138998:web:b9289b2bdc93b7aa0fca97"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

var Email = document.getElementById('email');
var Password = document.getElementById('password');

window.login = function(e) {
    e.preventDefault();
    var obj = {
        email:Email.value,
        password:Password.value
    }
    signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function(userCredential) {
        var user = userCredential.user;
        console.log(user.uid);
        alert("Login Successfull");
        window.location.href='after.html';
    })
    .catch(function(err) {
        console.log("Login failed");
        alert("Error: " + err );
    })
    console.log(obj);
}
window.logout = function() {
    signOut(auth).then(function() {
        alert("Logout successful");
        window.location.href='after.html'; // Redirect to your login page
    }).catch(function(error) {
        console.error("Error signing out:", error);
        alert("Error signing out");
    });
}