import { footer } from "./footer.js";
import { navbar } from "./function.js";

let footer_new = document.getElementById("footer");
footer_new.innerHTML=footer();

let pranav_navbar =document.querySelector("#navbar_pranav");
pranav_navbar.innerHTML=navbar();


let detail_arr = JSON.parse(localStorage.getItem("detail_data"))
let detail_arr1=[];
detail_arr1.push(detail_arr);
console.log(detail_arr1);
function showedetail(){
   let container = document.getElementById('detail_img');
   container.innerHTML=null;

   let container1 = document.getElementById("detail_info_of_product");
   container1.innerHTML=null;
   detail_arr1.forEach((el)=>{

    let div = document.createElement("div");
    div.setAttribute("class","info_of_img");
   
    let div2 = document.createElement("div");
    div2.setAttribute("class","info_of_item")

    let div3 = document.createElement("div");
    div3.setAttribute("class","info_of_item1")

    let div4 = document.createElement("div");
    div4.setAttribute("class","info_of_item2")
    let div5 = document.createElement("div");
    div5.setAttribute("class","info_of_item3")
    let div6 = document.createElement("div");
    div6.setAttribute("class","info_of_item4")


    let img = document.createElement("img");
    img.src=el.img;
    img.style.width="90%";

    let h7 = document.createElement("h2");
    h7.innerText="Category:-";
    let h8 = document.createElement("h2");
    h8.innerText="Item:-";
    let h9 = document.createElement("h2");
    h9.innerText="Price:-";
    let h6 = document.createElement("h2");
    h6.innerText="Description:-";

    let h1 = document.createElement("h2");
    h1.innerText=el.item;

    let h2 = document.createElement("h2");
    h2.innerText="Sale INR ₹:-"+" "+" "+el.price;

    let h3 = document.createElement("h2");
    h3.innerText=el.description;

    let h4 = document.createElement("h2");
    h4.innerText=el.category;

    let buttion = document.createElement("button");
    buttion.innerText="Add to Cart";
    buttion.setAttribute("id","cart_btn_add")
    buttion.addEventListener("click",function(){
      gotocart(el);
    })
    
    div.append(img);
    div3.append(h4);
    div4.append(h1);
    div5.append(h2);
    div6.append(h3);
    div2.append(h7,div3,h8,div4,h9,div5,h6,div6,buttion);
    container.append(div);
    container1.append(div2);
   })
}

showedetail();

 function gotocart(){
   alert("Produt added to Cart");
    window.location.href="cart.html";
}


