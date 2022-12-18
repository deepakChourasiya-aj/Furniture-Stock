

export  function navbar(){


    return `
   
<section id="main_nav">
<div class="imgdiv">
<a href="/index.html"><img id="weblogo"src="img/WhatsApp Image 2022-12-13 at 7.44.58 PM.jpeg" alt=""></a>
    
</div>
<!-- <div> -->
    <input id="searchhove"  type="text" placeholder="Search... everything you find ship for free"> 
    <i id="searchicon" class="fa fa-search"></i>
<!-- </div> -->
<div class="icondiv">

            <a href="/register-login.html"><i class="fa fa-thin fa-user"></i></a>
            <a href="/cart.html"><i class="fa fa-light fa-heart"></i></a>
            <a href="/cart.html"><i class="fa fa-thin fa-cart-shopping"></i></a>


</div>

<a href="/dee_Billing_Address.html"><button  id="checkbtn">Chekout</button>
</a>

</section>

<!-- bottom -->

<nav class="navbar navbar-inverse">
<div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>

            <!-- <h6>Menu</h6> -->

        </button>

    </div>


    <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right anime">
            <li><a id="furn" href="#">Furniture</a></li>
            <li><a id="rugs" href="#">Rugs</a></li>
            <li><a id="deco" href="#">Decor</a></li>
            <li><a id="bed" href="#">Bedding</a></li>
            <li><a id="efhome" href="#">Home Important</a></li>
            <li><a id="kithome" href="#">Kitchen</a></li>
            <li><a id="outpros" href="#">Outdoor</a></li>
            <li><a href="#">Lighting</a></li>
            <li><a href="#">Gifts</a></li>
            <li><a id="holi" href="#">Holiday</a></li>
            <li><a id="sels" href="#">Sales & Deals</a></li>
            
        </ul>

    </div>
</div>
</nav>
    
    `

}


