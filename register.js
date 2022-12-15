const registerForm = document.getElementById("register-form");
let usersDetails = JSON.parse(localStorage.getItem("users-details")) || [];


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
            password
        };
        usersDetails.push(registerdData);
        localStorage.setItem("users-details", JSON.stringify(usersDetails));
        alert("Account created successfully. You can Login now.")
    }else{
        alert("Password is not matching. Please check and try again");
    } 
});

