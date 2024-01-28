// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBcK414Ulp6y4WI14DaSJwZztGpIdPWwpw",
    authDomain: "login-signuup.firebaseapp.com",
    projectId: "login-signuup",
    storageBucket: "login-signuup.appspot.com",
    messagingSenderId: "4853986543",
    appId: "1:4853986543:web:4c9307a165d89321f4171a"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  var firstname =document.getElementById("FullName")
  var email =document.getElementById("email")
  var password =document.getElementById("password")

  window.signup=function(e){
    e.preventDefault();
    var obj={
        firstname:firstname.value,
        email:email.value,
        password:password.value, 

    }
    createUserWithEmailAndPassword(auth,obj.email,obj.password).then(function(success){
        alert("signup successfully");
        window.location.href='login.html';
    })
    .catch(function(err){
        alert("error" + err)
    })
    console.log(obj)
  };


