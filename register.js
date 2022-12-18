// import { navbar } from "./function.js";

const registerForm = document.getElementById("register-form");
let usersDetails = JSON.parse(localStorage.getItem("users-details")) || [];
let usersApi = "http://localhost:3000/api/users";


//User Registration Details
registerForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value
    
    if(password===confirmPassword){
        let registerdData = {
            firstname,
            lastname,
            email,
            password,
            phone,
            password,
            place : "india"
        };
        usersDetails.push(registerdData);
        addUser(registerdData);
        localStorage.setItem("users-details", JSON.stringify(usersDetails));
        
    }else{
        alert("Password is not matching. Please check and try again");
    } 
});


async function addUser(registerdData){
    try {
        let res = await fetch(usersApi, {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registerdData)
        })
        if(res.ok){
            alert("Account created successfully. You can Login now.");
        }
    } catch (error) {
        alert("error");
    }
}








