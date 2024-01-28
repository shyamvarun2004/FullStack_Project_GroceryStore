
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";

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
  const auth = getAuth();

  var firstname =document.getElementById("fname")
  var lastname =document.getElementById("lname")
  var email =document.getElementById("text")
  var password =document.getElementById("password")

  window.signup=function(e){
    e.preventDefault();
    var obj={
        firstname:firstname.value,
        lastname:lastname.value,
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