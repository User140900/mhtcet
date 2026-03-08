import { db } from "./firebase.js";

import {
collection,
addDoc
}
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

window.addQuestion=async function(){

let subject=document.getElementById("subject").value;

let question=document.getElementById("question").value;

await addDoc(collection(db,"questions"),{

subject:subject,
question:question

});

alert("Question Added");

}