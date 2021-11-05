import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue, push} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";
import {userCards} from "./userCards";

const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig); 

function registerUser(newUser)
{
    const db = getDatabase();

    const newUserRef = (ref(db, "users/" + newUser.CODE));
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

getUsers();

function updateUsers(info)
{
    if(info)
    {
        userList1.innerHTML = "";
        userList2.innerHTML = "";
        userList3.innerHTML = "";
        
        Object.keys(info).forEach((key, index) =>
        {
            console.log(key, index);
            const card = new userCards(info[key]);        
            testBtn.addEventListener("click", (e, ev) =>
            {
                console.log(info[key].PART);
            });

            let userParticips = info[key].PART;

            if(userParticips <= 5)
            {
                userList1.appendChild(card.render());
            }

            if(userParticips > 5 && userParticips <= 10)
            {
                userList2.appendChild(card.render());
            }

            if(userParticips > 10)
            {
                userList3.appendChild(card.render());
            }

            //text += info[key].NAME + "<br>";
        });
        console.log(text)

        //userList1.innerHTML = text;
    }

    else
    {
        userList1.innerHTML = "N/A";
        userList2.innerHTML = "N/A";
        userList3.innerHTML = "N/A";
    }
}

const studentName = document.getElementById("studentTextField");
const codeText = document.getElementById("codeTextField");
const courseText = document.getElementById("course");

const registerButton = document.getElementById("registerButton");

const userList1 = document.getElementById("bonusC1");
const userList2 = document.getElementById("bonusC2");
const userList3 = document.getElementById("bonusC3");

const testBtn = document.getElementById("testButton");

function test()
{
    alert("hello world");
}

const saveUserData = (e, event) =>
{
    let name = studentName.value;
    let code = codeText.value;
    let course = courseText.value;
    let participations = 0;

    let newUser =
    {
        NAME: name,
        CODE: code,
        COURSE: course,
        PART: participations
    };

    registerUser(newUser);

    alert("Usuario registrado exitosamente");
}

registerButton.addEventListener("click", saveUserData);