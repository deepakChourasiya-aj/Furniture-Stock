async function getproducts(){
    try {
        let data= await fetch("http://localhost:3000/api/users")
       let user=await data.json();
       appenddetails(user)
    } catch (error) {
       console.log(error) 
    }
}
getproducts()

function appenddetails(data){
    document.querySelector("tbody").innerHTML="";
data.forEach(ele => {
    let box=document.createElement("tr");
    let name=document.createElement("td")
    name.innerText=`${ele.firstname} ${ele.lastname}`
    let mail=document.createElement("td")
    mail.innerText=ele.email;
    let mobile=document.createElement("td");
    mobile.innerText=ele.phone;
    let password=document.createElement("td");
    password.innerText=ele.password;
    let userid=document.createElement("td");
    userid.innerText=ele.id
let place=document.createElement("td");
place.innerText=ele.place
    box.append(name,userid,mail,mobile,password,place)
    document.querySelector("tbody").append(box)
});


}

document.querySelector(".theme-toggler .dark").addEventListener("click",function(){
    let cont=document.querySelector(".container")
    cont.style.backgroundColor="black";
    
    
    let dash=document.querySelector(".container main h1")
    dash.style.color="white"
    let top=document.querySelector("aside .sidebar>a .material-symbols-sharp")
    top.style.color="white"
    let side=document.querySelector("aside .sidebar>a")
    side.style.color="white";
    let right=document.querySelector(".right .recent-updates h2")
    right.style.color="white";
    let right1=document.querySelector(".right .sales-analytics h2")
    right1.style.color="white";
    let main=document.querySelector(".container main .recentorder h2")
    main.style.color="white";
    let insight=document.querySelector("main .insights>div ")
    insight.style.boxShadow="0 2rem 3rem rgba(104, 110, 164, 0.18);"
    let top1=document.querySelector(".container .right>.top>.profile>.profile-name>p")
    top1.style.color="white"
    let q=theme-toggler.querySelector("span:nth-child(2)")
    q.style
    })
    
    document.querySelector(".theme-toggler .active").addEventListener("click",function(){
    let cont=document.querySelector(".container")
    cont.style.backgroundColor=" aliceblue";
    let cont1=document.querySelector(".container main h1");
    cont1.style.color="black";
    let main1=document.querySelector(".container main .recentorder h2")
    main1.style.color="black"
    let right3=document.querySelector(".right .recent-updates h2")
    right3.style.color="black";
    let right4=document.querySelector(".right .sales-analytics h2")
    right4.style.color="black";
    let top1=document.querySelector(".container .right>.top>.profile>.profile-name>p")
    top1.style.color="black"
    let side=document.querySelector(".sidebar #dash")
    side.style.color="grey"
    let side1=document.querySelector(".sidebar #dash span")
    side1.style.color="grey"
    })
    
    
    let v= document.getElementById("feedback")
    v.style.display="none"
    
    function menuitem2(){
        if(v.style.display=="none"){
            v.style.display="block"
        }
        else{
            v.style.display="none"
        }
    }
    let x2= document.getElementById("feedback")
    x2.style.display="none"
    
    function feedbackPage(){
        if(x2.style.display=="none"){
            x2.style.display="flex"
        }
        else{
            x2.style.display="none"
        }
    }
    
