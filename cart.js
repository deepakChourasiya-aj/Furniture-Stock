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
        console.log(data);
    } catch (error) {
        console.log(error)
    }
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
    
    cart.innerHTML = cartProductsapi.map((elem) => {
       return  `
    <div id="add-cart">
        <img src="${elem.img}" alt="">
        <span>
            <h3>${elem.item.substring(0,50)+"..."}</h3>
            <p>${"INR "+elem.price}</p>
            <span>
            Quantity: 
            <select id="quantity-select">
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
            </select>
            </span>
            <button id="remove-btn" >Remove</button>
        </span>
    </div>
    `
    }).join(''); 


    // document.querySelector("#quantity-select").addEventListener("change", ()=>{
    //     let quan = document.querySelector("#quantity-select").value;
    //     console.log(quan);
    // });
}

function billsection(){
    cartBill.innerHTML = `
    <div id="promo-code">
    <details>
        <summary> <b> Add a Promo Code </b></summary>
        <span>
        <input placeholder="Enter Promo Code" type="text">
        <button>Apply</button>
        </span>
    </details>
</div>
<div id="total-bill">
    <table>
        <tr>
            <td><b>(0) Items : </b></td>
            <td><b>INR </b></td>
        </tr>
        <tr>
            <td>Promo code:</td>
            <td>- INR 0</td>
        </tr>
        <tr>
            <td><b>Subtotal:</b></td>
            <td><b>INR 0</b></td>
        </tr>
        <tr>
            <td><h3>Your Total:</h3></td>
            <td><h3>INR</h3></td>
        </tr>
    </table>
    <button id="checkout-btn"><img width="16px" src="assets/lock.svg" alt=""> Check Out</button>
</div>
`    
}

billsection();
}
