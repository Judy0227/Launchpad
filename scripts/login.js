document.querySelectorAll('.toggle-password').forEach(toggle => {
   toggle.addEventListener('click', function () {
     const targetInput = document.getElementById(this.dataset.target);
     const icon = this.querySelector('i');
 
     if (targetInput.type === 'password') {
       targetInput.type = 'text';
       icon.classList.remove('fa-eye-slash');
       icon.classList.add('fa-eye');
     } else {
       targetInput.type = 'password';
       icon.classList.remove('fa-eye');
       icon.classList.add('fa-eye-slash');
     }
   });
 });
 const email = document.getElementById('email')
 const password = document.getElementById('password')
 email.addEventListener('blur', validateEmail);
 function validateEmail() {
    
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/

    if (!re.test(email.value)) {
        const emailError = document.getElementById('emailError')
        emailError.textContent= 'Please input a valid Email';
        email.classList.add('error')
    }
    if (email.classList.contains('error')) {
        if (re.test(email.value)) {
          email.classList.remove('error');
          emailError.textContent = "";
        }
      }
   
}
password.addEventListener('blur', validatePassword);
 function validatePassword() {
    
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/

    if (!re.test(password.value)) {
  const passwordError = document.getElementById('passwordError')
        passwordError.textContent= 'Password should be at least 12 characters long and include a mix of uppercase and lowercase letters, numbers, and symbols';
        password.classList.add('error')
    }  
    if (password.classList.contains('error')) {
        if (re.test(password.value)) {
          password.classList.remove('error');
          passwordError.textContent = "";
        }
      }
    
}
import { handleLogin } from './firebaseauth.js';

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  handleLogin();
});
// Import the functions you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCG5xfdBA_EHjTVk04O7IK60N3RiivMn7k",
    authDomain: "launchpad-b4033.firebaseapp.com",
    projectId: "launchpad-b4033",
    storageBucket: "launchpad-b4033.firebasestorage.app",
    messagingSenderId: "792877110477",
    appId: "1:792877110477:web:d4427113cfe96f9ba8c584"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
const forgotPasswordLink = document.getElementById("forgotPasswordLink");

forgotPasswordLink.addEventListener("click", () => {
  const email = prompt("Enter your email to reset password:");

  if (email) {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        showMessage("Reset link sent! Check your email.", 'success') ;
      })
      .catch((error) => {
        console.error("Password reset error:", error);
        showMessage(`Error ${error.message}`, error);

      });
  }
});