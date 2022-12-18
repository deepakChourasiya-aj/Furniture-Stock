
import { navbar} from "./function.js";
import { footer } from "./footer.js";
console.log(footer)

let userLoggedIn = localStorage.getItem("user-logged-in");
let cartProducts = JSON.parse(localStorage.getItem("cart-products")) || [];
const cart = document.getElementById("cart");
const cartBill = document.getElementById("cart-bill");



getCartProducts();

async function getCartProducts(){
    try {
        let res = await fetch("http://localhost:3000/api/cartproducts");
        let data = await res.json();
        displayCartProducts(data);
        totalItems(data.length)
    } catch (error) {
        console.log(error)
    }
   
}

billsection();


function billsection(){
    cartBill.innerHTML = `
    <div id="promo-code">
    <details>
        <summary> <b> Add a Promo Code </b></summary>
        <span>
        <input id="code" placeholder="Enter Promo Code" type="text">
        <button id="promo-btn" >Apply</button>
        </span>
    </details>
</div>
<div id="total-bill">
    <table>
        <tr>
            <td><b id="total-items" >(0) Items : </b></td>
            <td><b>INR </b></td>
        </tr>
        <tr>
            <td><b>Subtotal:</b></td>
            <td><b id="sub-total" >INR 0</b></td>
        </tr>
        <tr>
        <td>Promo code:</td>
        <td id="promo-val" > - INR 0</td>
    </tr>
        <tr>
            <td><h3>Your Total:</h3></td>
            <td><h3 id="total" >INR</h3></td>
        </tr>
    </table>
    <button id="checkout-btn"><img width="16px" src="assets/lock.svg" alt=""> Check Out</button>
</div>
`    

const promoBtn = document.getElementById("promo-btn");
promoBtn.addEventListener("click", ()=>{
    let total = document.getElementById("total");
    let promoVal = document.getElementById("promo-val");
    let subT = +document.getElementById("sub-total").innerText;
    let code = document.getElementById("code").value;
    if(code==="masai20"){
        let dis = subT*0.20
        promoVal.innerText = "- INR "+ dis.toFixed(2);
        total.innerText = eval(subT-dis);
    } else {
        alert("Invalid Promo code")
    }
   
})

const checkoutBtn = document.getElementById("checkout-btn");
checkoutBtn.addEventListener("click", ()=>{
    let total = document.getElementById("total").innerText;
    localStorage.setItem("cart-total", total);
    window.location.href = "dee_Billing_Address.html";
});

}


function displayCartProducts(cartProductsapi){

    
if(cartProductsapi.length===0){
    cart.innerHTML = `<div>
    <h2>Your Shopping cart is empty.</h2>
    <p>Started a cart already? Sign in to get your item!</p>
    <button id="signin-btn">Sign In</button>
    <p>New to Furniture Stock? <a href="register-login.html">Create an account</a></p>
</div>
`
const btn1 = document.querySelector("#cart button");
btn1.addEventListener("click", ()=>{
    window.location.href = "register-login.html";
});
} else {



    cart.style.border = "none";
    cart.style.padding = 0;


    let a = cartProductsapi.reduce((a, b)=>{
        return a + Number(b.price) * Number(b.quantity);
    }, 0);

    document.getElementById("sub-total").innerText = a;
    document.getElementById("total").innerText = a


    
    cartProductsapi.forEach((elem) => {
       
        let div = document.createElement("div");
        div.id = "add-cart"

        let img = document.createElement("img");
        img.src = elem.img;

        let span1 = document.createElement("span");
        

        let name = document.createElement("h2");
        name.innerText = elem.item;

        let price = document.createElement("p");
        price.innerText = "Price: INR"+" "+elem.price;

        let span2 = document.createElement("span");

        let p = document.createElement("p");
        p.innerText = "Quantity";


        let quant = document.createElement("select");
        quant.innerHTML = ` <select id="quantity-select">
                         <option value="1">1</option>
                         <option value="2">2</option>
                         <option value="3">3</option>
                         <option value="4">4</option>
                         <option value="5">5</option>
                         <option value="6">6</option>
                        <option value="7">7</option>
                         <option value="8">8</option>
                        <option value="9">9</option>
                         <option value="10">10</option>
                         <option value="11">11</option>
                         <option value="12">12</option>
                        <option value="13">13</option>
                         <option value="14">14</option>
                         <option value="15">15</option>
                         <option value="16">16</option>
                     <option value="17">17</option>
                         <option value="18">18</option>
                         <option value="19">19</option>
                         <option value="20">20</option>
                     </select>`;

                     quant.value=elem.quantity;
                quant.addEventListener("change", ()=>{
                    console.log(elem.id, +quant.value);
                    changeQuant(elem.id, +quant.value);
                });
         


            let removeBtn = document.createElement("button");
            removeBtn.id = "remove-btn";
            removeBtn.innerText = "Remove";
            removeBtn.addEventListener("click", ()=>{
                removeElem(elem.id);
            });

            

            span2.append(p, quant);
            span1.append(name, price, span2, removeBtn)
            div.append(img, span1);
            cart.append(div);
    }); 

}

}


async function removeElem(id){
    try {
        fetch(`http://localhost:3000/api/cartproducts/${id}`, {
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    }
}

function totalItems(n){
    document.getElementById("total-items").innerText = `(${n}) Items : `;
}

async function changeQuant(id, val){
    try {
        fetch(`http://localhost:3000/api/cartproducts/${id}`, {
            method: "PATCH",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({quantity: val})
        })
    } catch (error) {
        console.log(error);
    }
}


let navtags = document.querySelector('#navbars')

navtags.innerHTML= navbar();



// // footer

let footertag = document.querySelector('#footerarea')


// // console.log(footer)
footertag.innerHTML= footer();