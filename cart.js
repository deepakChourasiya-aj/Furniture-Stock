let userLoggedIn = localStorage.getItem("user-logged-in");
let cartProducts = JSON.parse(localStorage.getItem("cart-products")) || [];
const cart = document.getElementById("cart");
const cartBill = document.getElementById("cart-bill");


if(!userLoggedIn && cartProducts.length===0){
    cart.innerHTML = `<div>
    <h2>Your Shopping cart is empty.</h2>
    <p>Started a cart already? Sign in to get your item!</p>
    <button>Sign In</button>
    <p>New to Furniture Stock? <a href="register-login.html">Create an account</a></p>
</div>
`
const btn1 = document.querySelector("#cart button");
btn1.addEventListener("click", ()=>{
    window.location.href = "register-login.html";
});
}

function billsection(){
    cartBill.innerHTML = `
    <div id="promo-code">
    <details>
        <summary>Add a Promo Code</summary>
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
    <button><img width="16px" src="assets/lock.svg" alt=""> Check Out</button>
</div>
`    
}

billsection();