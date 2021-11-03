import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig); 

function registerUser(newUser)
{
    const db = getDatabase();

    const newUserRef = push(ref(db, "users"));
    console.log(newUserRef);

    //const dbRef = ref(db, "user/ " + newUser.NAME);
    set(newUserRef, newUser);
}

function getUsers()
{
    const db = getDatabase();
    const dbRef = ref(db, "users");

    onValue(dbRef, (snapshot) => 
    {
        const data = snapshot.val();
        console.log(data);
        updateUsers(data);
    });
}

const userList1 = document.getElementById("bonusC1");

function updateUsers(info)
{
    if(info)
    {
        let text = "";
        Object.keys(info).forEach((key, index) =>
        {
            console.log(key, index);
            text += info[key].NAME + "\n";
        });

        console.log(text)

        //userList1.innerHTML(text);
    }

    else
    {
        //userList1.innerHTML("N/A");
    }
}

const studentName = document.getElementById("studentTextField");
const codeText = document.getElementById("codeTextField");
const courseText = document.getElementById("course");

const registerButton = document.getElementById("registerButton");

function test()
{
    alert("hello world");
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

    alert("Usuario registrado exitosamente");
}

registerButton.addEventListener("click", saveUserData);
registerButton.addEventListener("click", getUsers);