const loginForm = document.getElementById("login-form");
let usersData = JSON.parse(localStorage.getItem("users-details")) || [];
let userLoggedIn = false;


// ---------- for Local Storage ----------
// loginForm.addEventListener("submit", (e)=>{
//     e.preventDefault();

//     let email = document.getElementById("login-email").value;
//     let password = document.getElementById("login-password").value;

//     let emailCheck = false;
//     let passCheck = false;
//     for(user of usersData){
//         if(email==user.email){
//             emailCheck=true;
//         }
//         if(password==user.password){
//             passCheck=true;
//         }
//     }

//     if(emailCheck&&passCheck){
//         userLoggedIn=true;
//         localStorage.setItem("user-logged-in", userLoggedIn);
//         alert("Login Successful");
//     } else if(emailCheck&& !passCheck){
//         alert("Wrong Password")
//     } else {
//         alert("It's like you are a new user. Please Create an account before you login.")
//     }
// });
// -----------------------------------------------------------

loginForm.addEventListener("submit", async (e)=>{

    e.preventDefault();

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value

    if(email=="admin@furniturestock.com" && password=="admin"){
        // swal("Admin login Sucessful");
        swal({
            title: "Admin login Sucessful!",
            text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
        window.location.href = "Admin.html";
        return;
    }

    try {
        let res = await fetch("http://localhost:3000/api/users")
        let data = await res.json();
        userAuth(data);
    } catch (error) {
        console.log(error)
        alert("error");
    }
});


function userAuth(userData){

    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let emailCheck = false;
    let passCheck = false;



    let userDetails = {
        name : null,
        userloggedin: false
    }; 

    for(user of userData){
        if(email==user.email){
            emailCheck=true;
            userDetails.name=user.lastname
        }
        if(password==user.password){
            passCheck=true;
            userDetails.name=user.lastname
        }
    }

    if(emailCheck&&passCheck){
        userDetails.userloggedin=true;
        loggedInUser(userDetails);
        // localStorage.setItem("user-logged-in", userLoggedIn);
        window.location.href = "index.html"
        swal({
        title: "Login Successful. Happy Shopping!!",
        text: "You clicked the button!",
        icon: "success",
        button: "Aww yiss!",
         });
      
    } else if(emailCheck&& !passCheck){
        swal("Wrong Password!");
    } else {
        alert("It's like you are a new user. Please Create an account before you login.")
    }

}


async function loggedInUser(userDetails){
    try {
        let res = await fetch("http://localhost:3000/api/loggedinuser", {
            method: "POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userDetails)
        })
        
    } catch (error) {
        console.log(error);
    }
}