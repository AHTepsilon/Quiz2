import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig); 

function registerUser(newUser)
{
    const db = getDatabase();
    const dbRef = ref(db, "user/ " + newUser.NAME);
    set(dbRef, newUser);
}

function getUsers()
{
    const db = getDatabase();
    const dbRef = ref(db, "user");

    onValue(dbRef, (snapshot) => 
    {
        const data = snapshot.val();
        console.log(data);
    });
}

const studentName = document.getElementById("studentTextField");
const codeText = document.getElementById("codeTextField");
const courseText = document.getElementById("course");

const registerButton = document.getElementById("registerButton");

function test()
{
    alert("hello world")
}

const saveUserData = (e, event) =>
{
    let name = studentName.value;
    let code = codeText.value;
    let course = courseText.value;

    let newUser =
    {
        NAME: name,
        CODE: code,
        COURSE: course
    };

    registerUser(newUser);
}

registerButton.addEventListener("click", saveUserData);