import { auth } from "./firebase.js";

import {
RecaptchaVerifier,
signInWithPhoneNumber
}
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

window.recaptchaVerifier =
new RecaptchaVerifier(auth,'recaptcha-container',{});

window.sendOTP=function(){

let phone=document.getElementById("phone").value;

signInWithPhoneNumber(auth,phone,window.recaptchaVerifier)

.then((result)=>{

window.confirmationResult=result;

alert("OTP Sent");

});

}

window.verifyOTP=function(){

let code=document.getElementById("otp").value;

confirmationResult.confirm(code)

.then(()=>{

window.location="register.html";

});

}