import { auth,db } from "./firebase.js";

import {
doc,
setDoc
}
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.saveStudent=async function(){

let name=document.getElementById("name").value;

let user=auth.currentUser;

let id="MHT"+Math.floor(Math.random()*100000);

await setDoc(doc(db,"students",user.uid),{

name:name,
studentId:id,
phone:user.phoneNumber

});

alert("Your Student ID: "+id);

window.location="dashboard.html";

}