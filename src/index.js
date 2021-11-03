import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import {userCards} from "./userCards";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig); 

function registerUser(newUser)
{
    const db = getDatabase();

    const newUserRef = push(ref(db, "users"));
    console.log(newUserRef);

    newUser["id"] = newUserRef.key;

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

getUsers();

function updateUsers(info)
{
    if(info)
    {
        userList1.innerHTML = "";
        
        Object.keys(info).forEach((key, index) =>
        {
            console.log(key, index);
            const card = new userCards(info[key]);
            userList1.appendChild(card.render());

            //text += info[key].NAME + "<br>";
        });
        console.log(text)

        //userList1.innerHTML = text;
    }

    else
    {
        userList1.innerHTML = "n/a";
    }
}

const studentName = document.getElementById("studentTextField");
const codeText = document.getElementById("codeTextField");
const courseText = document.getElementById("course");

const registerButton = document.getElementById("registerButton");

const userList1 = document.getElementById("bonusC1");


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