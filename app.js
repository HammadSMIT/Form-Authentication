import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword , sendEmailVerification, deleteUser } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js"; 
  const firebaseConfig = {
    apiKey: "AIzaSyBUO53OS85nm2ZUFGG9_xf4JMAuaCYcqyY",
    authDomain: "authentication-project-9b821.firebaseapp.com",
    projectId: "authentication-project-9b821",
    storageBucket: "authentication-project-9b821.appspot.com",
    messagingSenderId: "499555950862",
    appId: "1:499555950862:web:737b93be87be094c11375f",
    measurementId: "G-F30QNPT41J"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);


  //  SIGN UP
let Signup = () =>{

    let getEmail = document.querySelector("#Signup-Email")
    let getPass = document.querySelector("#Signup-Password")
     
    
    createUserWithEmailAndPassword(auth, getEmail.value, getPass.value)
    .then((userCredential) => {
      
      const user = userCredential.user.email;
      console.log(user)
      localStorage.setItem("Email" , getEmail.value)
      localStorage.setItem("Password",getPass.value)
      location.href = "./signin.html"

    
    })
    .catch((error) => {
    //   const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error message" , errorMessage)
    });

}

// LOGIN

let Login = () =>{
    let getEmail = document.querySelector("#Login-Email")
    let getPass = document.querySelector("#Login-Password")
    signInWithEmailAndPassword(auth, getEmail.value, getPass.value)
  .then((userCredential) => {
    const user = userCredential.user.email;
    console.log(user)
     location.href = "./welcome.html"
})
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    console.log("Error Message" , errorMessage)
    alert("please Enter Correctly")
    getEmail.value = "";
    getPass.value = ""
  });
}

let verify = () => {
    sendEmailVerification(auth.currentUser)
    .then(() => {
       console.log("Check your email")
    });
}

let Logout = () => {
    const user = auth.currentUser;

    deleteUser(user).then(() => {
      localStorage.clear()
      location.href = "./index.html"
    }).catch((error) => {
      console.log(error)
    });
}
// let showData = () => {
   
//    let getDiv = document.querySelector("#getDiv")
//    if(getDiv){
//      getDiv.innerHTML = `<h1>${currentUser} ${emailVerified}</h1>`
//    }
// }
window.Signup = Signup
window.Login = Login
window.verify = verify
window.Logout  = Logout
// window.showData = showData
