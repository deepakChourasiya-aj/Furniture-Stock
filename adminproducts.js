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
    
async function products(){
    
    try {
        let data1=await fetch("http://localhost:3000/api/products");
       let proData=await data1.json()   
        renderProducts(proData)
    //    console.log(proData)
    } catch (error) {
        console.log(error)
    }
}

products(); 

function renderProducts(cartdata)
{
 cartdata.forEach((ele,index) => {
     let box=document.createElement("tr");
     let td1=document.createElement("td");
     td1.id = "imgsec"
     let image = document.createElement('img');
     image.setAttribute("src",ele.img);
     td1.appendChild(image);
     let td2=document.createElement("td");
     td2.innerText=ele.item.substring(0, 30);
     let td3=document.createElement("td");
     td3.innerText=ele.id;
     let td4=document.createElement("td");
     td4.innerText=ele.price;
     let td6=document.createElement("td");
     td6.innerText=ele.rating
     let td5=document.createElement("td")
     var button = document.createElement('button');
button.innerText="Remove";
button.addEventListener("click", async ()=>{
  try {
    fetch(`http://localhost:3000/api/products/${ele.id}`, {
        method: "DELETE"
    })
  } catch (error) {
    console.log(error);
  }  
}) 


    td5.append(button)
   
     box.append(td3,td2,td1,td4,td6,td5);
     document.querySelector("#todata").append(box)
 });
}

