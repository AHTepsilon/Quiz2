// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBhfJPQIgKNYG4txqw7NnSUOv-A3bmk-Xc",
    authDomain: "quiz2-d7c5c.firebaseapp.com",
    projectId: "quiz2-d7c5c",
    storageBucket: "quiz2-d7c5c.appspot.com",
    messagingSenderId: "1004502521997",
    appId: "1:1004502521997:web:47c4d4bef7fc74d7c1eac4",
    measurementId: "G-Q06D80G2D3"
  };


export function getFirebaseConfig()
{
    if(!firebaseConfig || !firebaseConfig.apiKey)
    {
        throw new Error("Firebase config error");
    }
    else
    {
        return firebaseConfig;
    }
}