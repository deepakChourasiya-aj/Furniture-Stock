import { data ,data1 } from "./data.js";

function renderdata(data1){
    let container = document.getElementById("procard");
    container.innerHTML=null;
    data1.forEach((el)=>{
        let div = document.createElement("div");
        div.setAttribute("class","proitem");

        let img = document.createElement("img");
        img .src=el .image;

        let p = document .createElement("p");
        p .innerHTML=el .title;

        let a = document.createElement("a");
        a.href="#";
        a.append(img,p);
        div.append(a);
        container.append(div);
    })
}

renderdata(data1);

function produtrender(data){
    let side = document.querySelector(".sidebar2");
    side.innerHTML=null;
   
    data.forEach((el)=>{
       let cont = document.createElement("div");
       cont.setAttribute("class","product_items");
   
       let div = document.createElement("div");
       div.setAttribute("class","pro_img_item");
   
       let pi = document.createElement("img");
       pi.src=el.img;
   
       let price = document.createElement("h3");
       price.innerText=`Sale INR:-`+" "+el.price;
       price.style.color="red";

       let display = document.createElement("button");
       display.innerText="Details";
       display.onclick = () =>{
        displayData(el);
       }
       div.append(pi,price,display);
       cont.append(div);
       side.append(cont)
    })

}
produtrender(data);

let btn=document.getElementById("btn");
btn.addEventListener("change",function(){
    let  value = document.getElementById("pro").value;
    console.log(value);
})

let displayData = async(el)=>{ 
   alert(el.id);
}


