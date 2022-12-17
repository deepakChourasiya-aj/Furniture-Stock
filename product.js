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

       let btn_div2 = document.createElement("div");
       let btn_div3 = document.createElement("div");

       let btn_div1 = document.createElement("div");
       btn_div1.setAttribute("class","button_div_container");
   
       let pi = document.createElement("img");
       pi.src=el.img;
   
       let price = document.createElement("h2");
       price.innerText=`Sale INR:-`+" "+"₹"+" "+el.price;
    

       let star = document.createElement("diV");
       star.innerText=el.star;

       let dec = document.createElement("h3");
       dec.innerText=el.item.substring(0,70)+"...";
       

       let addcart = document.createElement("button");
       addcart.innerText="Add to Cart";
       addcart.setAttribute("class","add_to_cart_btn");
       addcart.onclick=()=>{
        addtocart(el);
       }


       let display = document.createElement("button");
       display.innerText="Details";
       display.setAttribute("class","detail_pro_info");
       display.onclick = () =>{
        displayData(el);
       }

       btn_div2.append(addcart);
       btn_div3.append(display);
       btn_div1.append(btn_div2,btn_div3)
       div.append(pi,dec,price,star,btn_div1,);
       cont.append(div);
       side.append(cont)
    })

}
 produtrender(data);

function displayData(el){
    
        localStorage.setItem("detail_data",JSON.stringify(el));
        window.location.href="detail.html";

       
}

let btn=document.getElementById("btn");
btn.addEventListener("change",function(){
    let value = document.getElementById("pro").value;
    sortdata(data,value);
    
})

function sortdata(data,value)
{
   if(value=="low"){
    data.sort((a,b)=>{
        return +[a.price] - [+b.price];
    })
    produtrender(data);
   }else if(value=="high"){
    data.sort((a,b)=>{
        return +[b.price] - [+a.price];
    })
    produtrender(data);
   }
}


let btn1 = document.querySelector(".btn1");
btn1.addEventListener("change",function(){
    let value = document.querySelector(".filter_pro").value;
    filtercat(data,value);
    

})



function filtercat(data,value){
    
    let data2=[];
   data.filter((el)=>{
    if(value==el.catogary){
       return (data2.push(el));
       
    }
    produtrender(data2);
   })
  
}
let btnprie = document.querySelector("#prie_1");
btnprie.addEventListener("change",function(){
    let privalue = document.querySelector(".filter_pri").value;
    filterbyprice(data,privalue);
})

function filterbyprice(data,value){
    let data2=[];
    data.filter((el)=>{
     if(el.price <= value ){
        return (data2.push(el));
        
        
     }

     produtrender(data2);
    })
}

let rating_sort = document.querySelector("#rating_sort");
rating_sort.addEventListener("change",function(){
    let rating_value = document.querySelector(".filter_pri6").value;
    filterByRating(data,rating_value);
})

function filterByRating(data,rating_value){
    let data3=[];
    data.filter((el)=>{
        if(Math.floor(el.rating%10) == rating_value){
            return(data3.push(el));
        }
        produtrender(data3);
    })
}



function addtocart(el){
 
  let product_arr = JSON.parse(localStorage.getItem("cart_product")) || [];
  product_arr.push(el);
  localStorage.setItem("cart_product",JSON.stringify(product_arr));
  alert("produt addded to cart")
  
}

