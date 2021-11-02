const studentName = document.getElementById("studentTextField");
const codeText = document.getElementById("codeTextField");
const courseText = document.getElementById("course");

const registerButton = document.getElementById("registerButton");

test = () =>
{
    alert("hello world")
}

registerButton.addEventListener("click", test);