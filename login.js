const loginForm = document.getElementById("login-form");
let usersData = JSON.parse(localStorage.getItem("users-details")) || [];
let userLoggedIn = false;

loginForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let emailCheck = false;
    let passCheck = false;

    for(user of usersData){
        if(email==user.email){
            emailCheck=true;
        }
        if(password==user.password){
            passCheck=true;
        }
    }

    if(emailCheck&&passCheck){
        userLoggedIn=true;
        localStorage.setItem("user-logged-in", userLoggedIn);
        alert("Login Successful");
    } else if(emailCheck&& !passCheck){
        alert("Wrong Password")
    } else {
        alert("It's like you are a new user. Please Create an account before you login.")
    }

});


