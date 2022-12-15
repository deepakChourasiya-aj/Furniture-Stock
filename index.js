let navbar = document.querySelector('#totnav')

// navbar.innerHTML = `

// <section id="main_nav">
// <div class="imgdiv">

//     <img id="weblogo"src="img/WhatsApp Image 2022-12-13 at 7.44.58 PM.jpeg" alt="">
// </div>
// <!-- <div> -->
//     <input type="text" placeholder="Search... everything you find ship for free"> 
//     <i id="searchicon" class="fa fa-search"></i>
// <!-- </div> -->
// <div class="icondiv">
//     <a href=""><i class="fa fa-thin fa-user"></i></a>
//     <a href=""><i class="fa fa-light fa-heart"></i></a>
//     <a href=""><i class="fa fa-thin fa-cart-shopping"></i></a>


// </div>

// <button id="checkbtn">Chekout</button>
// </section>

// <!-- bottom -->

// <nav class="navbar navbar-inverse">
// <div class="container">
//     <div class="navbar-header">
//         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>

//             <!-- <h6>Menu</h6> -->

//         </button>

//     </div>


//     <div class="collapse navbar-collapse" id="myNavbar">
//         <ul class="nav navbar-nav navbar-right anime">
//             <li><a href="#">Furniture</a></li>
//             <li><a href="#">Rugs</a></li>
//             <li><a href="#">Decor</a></li>
//             <li><a href="#">Bedding</a></li>
//             <li><a href="#">Home Important</a></li>
//             <li><a href="#">Kitchen</a></li>
//             <li><a href="#">Outdoor</a></li>
//             <li><a href="#">Lighting</a></li>
//             <li><a href="#">Kids & Baby</a></li>
//             <li><a href="#">Gifts</a></li>
//             <li><a href="#">More</a></li>  
//             <li><a href="">|</a></li>
//             <li><a href="#">Holiday</a></li>
//             <li><a href="#">Sales & Deals</a></li>
            
//         </ul>

//     </div>
// </div>
// </nav>

// `






// totnav


// function navbar(){ 
    // return 
    navbar.innerHTML=`
    <section id="main_nav">
<div class="imgdiv">
<a href=""><img id="weblogo"src="img/WhatsApp Image 2022-12-13 at 7.44.58 PM.jpeg" alt=""></a>
    
</div>

    <input id="searchhove" type="text" placeholder="Search... everything you find ship for free"> 
    <i id="searchicon" class="fa fa-search"></i>

<div class="icondiv">
    <a href=""><i class="fa fa-thin fa-user"></i></a>
    <a href=""><i class="fa fa-light fa-heart"></i></a>
    <a href=""><i class="fa fa-thin fa-cart-shopping"></i></a>


</div>

<button id="checkbtn">Chekout</button>
</section>


<nav class="navbar navbar-inverse">
<div class="container">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>

        </button>

    </div>


    <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right anime">
            <li  ><a  id="furn" href="#">Furniture</a></li>\
            <li><a href="#">Rugs</a></li>
            <li><a href="#">Decor</a></li>
            <li><a href="#">Bedding</a></li>
            <li><a href="#">Home Important</a></li>
            <li><a href="#">Kitchen</a></li>
            <li><a href="#">Outdoor</a></li>
            <li><a href="#">Lighting</a></li>
            <li><a href="#">Gifts</a></li>
            <li><a href="#">More</a></li>  
            <li><a href="">|</a></li>
            <li><a href="#">Holiday</a></li>
            <li><a href="#">Sales & Deals</a></li>
            
        </ul>

    </div>
</div>
</nav>


    `

let furn = document.querySelector('#furn')
let hovef=document.querySelector('#hov_Eff')

furn.addEventListener('mouseover', function(){
hovef.style.visibility="visible"

})

furn.addEventListener('mouseout', function(){
hovef.style.visibility="hidden"

})

hovef.addEventListener('mouseover', function(){
    hovef.style.visibility="visible"
})
hovef.addEventListener('mouseout', function(){
    hovef.style.visibility="hidden"
    
})


    // serachhover
    let searhov = document.querySelector('#searchhove')
    let shovef=document.querySelector('#Sear_hov_Eff')

    searhov.addEventListener('mouseover', function(){
        shovef.style.visibility="visible"
        
        })
        
        searhov.addEventListener('mouseout', function(){
        shovef.style.visibility="hidden"
        
        })
        
        shovef.addEventListener('mouseover', function(){
            shovef.style.visibility="visible"
        })
        shovef.addEventListener('mouseout', function(){
            shovef.style.visibility="hidden"
            
        })