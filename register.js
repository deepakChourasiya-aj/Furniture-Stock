const registerForm = document.getElementById("register-form");




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
        console.table(registerdData);
    }else{
        alert("Password is not maching. Please check and try again");
    } 
});

