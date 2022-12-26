
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

// let item=document.getElementById("name").value
// let productid=document.getElementById("productid").value
// let img=document.getElementById("link").value
// let catogary=document.getElementById("cat").value
// let rating=document.getElementById("rate").value
// let price =document.getElementById("price").value



// jhfgbdfjgkdjbgvdh
let submit_button = document.querySelector('.btn8');
    
submit_button.addEventListener('click',function(){
    // event.preventDefault();
    let item=document.getElementById("name").value
    let img=document.getElementById("link").value
    let category=document.getElementById("cat").value
    let rating=document.getElementById("rate").value
    let price =document.getElementById("price").value
    console.log(item,img,category,rating,price);
  let obj = {
    item,
    img,
    category,
    rating,
    price
  }
  console.log(obj);
  rederdata(obj);
});

async function rederdata(obj){
try {
    let res = fetch('http://localhost:3000/api/products',{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
    })
        swal({
            title: "Product Added in Database!",
            text: "Successully Added the product!",
            icon: "success",
            button: "Aww yiss!",
          })
} catch (error) {
    alert('error')
}
}



