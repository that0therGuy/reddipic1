import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"
const app = initializeApp({
  apiKey: "AIzaSyDy9byoPgzaYBzGZcoLGMnhO9q1F0zojFE",

  authDomain: "kkrh-edc26.firebaseapp.com",

  projectId: "kkrh-edc26",

  storageBucket: "kkrh-edc26.appspot.com",

  messagingSenderId: "360004476006",

  appId: "1:360004476006:web:2670be1f42d7d0126ba1a7",

  measurementId: "G-RHZB99YLXC"
});



document.querySelector(".login").addEventListener("click", () => {

  console.log("2nd")
  let email = document.querySelector(".us").value;
  let password = document.querySelector(".pa").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;


      go()

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)

      // ..
    });
})

function go() {
  location.replace("log.html")
  let logined = "log"
  localStorage.setItem("login", "true");


};import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js"
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js"
const app = initializeApp({
  apiKey: "AIzaSyDy9byoPgzaYBzGZcoLGMnhO9q1F0zojFE",

  authDomain: "kkrh-edc26.firebaseapp.com",

  projectId: "kkrh-edc26",

  storageBucket: "kkrh-edc26.appspot.com",

  messagingSenderId: "360004476006",

  appId: "1:360004476006:web:2670be1f42d7d0126ba1a7",

  measurementId: "G-RHZB99YLXC"
});



document.querySelector(".login").addEventListener("click", () => {

  console.log("2nd")
  let email = document.querySelector(".us").value;
  let password = document.querySelector(".pa").value;
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;


      go()

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage)

      // ..
    });
})

function go() {
  location.replace("log.html")
  let logined = "log"
  localStorage.setItem("login", "true");


};