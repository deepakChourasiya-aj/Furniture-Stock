

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

// let navbar = document.querySelector('#totnav')

//     navbar.innerHTML=`
//     <section id="main_nav">
// <div class="imgdiv">
// <a href=""><img id="weblogo"src="img/WhatsApp Image 2022-12-13 at 7.44.58 PM.jpeg" alt=""></a>
    
// </div>

//     <input id="searchhove" type="text" placeholder="Search... everything you find ship for free"> 
//     <i id="searchicon" class="fa fa-search"></i>

// <div class="icondiv">
// <a href=""><i class="fa fa-thin fa-user"></i></a>
//      <a href=""><i class="fa fa-light fa-heart"></i></a>
//          <a href=""><i class="fa fa-thin fa-cart-shopping"></i></a>


// </div>

// <button id="checkbtn">Chekout</button>
// </section>


// <nav class="navbar navbar-inverse">
// <div class="container">
//     <div class="navbar-header">
//         <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>
//             <span class="icon-bar"></span>

//         </button>

//     </div>


//     <div class="collapse navbar-collapse" id="myNavbar">
//         <ul class="nav navbar-nav navbar-right anime">
//             <li  ><a  id="furn" href="#">Furniture</a></li>\
//             <li><a id="rugs" href="#">Rugs</a></li>
//             <li><a id="deco"  href="#">Decor</a></li>
//             <li><a id="bed" href="#">Bedding</a></li>
//             <li><a id="efhome" href="#">Home Important</a></li>
//             <li><a href="#">Kitchen</a></li>
//             <li><a href="#">Outdoor</a></li>
//             <li><a href="#">Lighting</a></li>
//             <li><a href="#">Gifts</a></li>
//             <li><a href="#">More</a></li>  
//             <li><a href="">|</a></li>
//             <li><a id="holi"href="#">Holiday</a></li>
//             <li><a id="sels" href="#">Sales & Deals</a></li>
            
//         </ul>

//     </div>
// </div>
// </nav>


//     `

let navbartag = document.querySelector('#togsnav')

        // *******************


function navbar(){

    return `
   
<section id="main_nav">
<div class="imgdiv">
<a href=""><img id="weblogo"src="img/WhatsApp Image 2022-12-13 at 7.44.58 PM.jpeg" alt=""></a>
    
</div>
<!-- <div> -->
    <input id="searchhove"  type="text" placeholder="Search... everything you find ship for free"> 
    <i id="searchicon" class="fa fa-search"></i>
<!-- </div> -->
<div class="icondiv">

<a href=""><i class="fa fa-thin fa-user"></i></a>
            <a href=""><i class="fa fa-light fa-heart"></i></a>
            <a href=""><i class="fa fa-thin fa-cart-shopping"></i></a>


</div>

<button id="checkbtn">Chekout</button>
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
            <li><a href="#">Kids & Baby</a></li>
            <li><a href="#">Gifts</a></li>
            <li><a id="holi" href="#">Holiday</a></li>
            <li><a id="sels" href="#">Sales & Deals</a></li>
            
        </ul>

    </div>
</div>
</nav>
    
    `

}



navbartag.innerHTML= navbar();

export {navbar}

// navbar()
































let searhov = document.querySelector('#searchhove')
let shovef=document.querySelector('#Sear_hov_Eff')

searhov.addEventListener('focus', function(){
    shovef.style.visibility="visible"
    
    })
    
    // searhov.addEventListener('mouseout', function(){
    // shovef.style.visibility="hidden"
    
    // })
    
    searhov.addEventListener('blur', function(){
        shovef.style.visibility="hidden"
    })

    // shovef.addEventListener('mouseout', function(){
    //     shovef.style.visibility="hidden"
        
    // })











let furn = document.querySelector('#furn')
let hovef=document.querySelector('#hov_Eff_furn')

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


// rugs

let rugs = document.querySelector('#rugs')
let rhovef=document.querySelector('#hov_Eff_sec')

rugs.addEventListener('mouseover', function(){
rhovef.style.visibility="visible"

})

rugs.addEventListener('mouseout', function(){
rhovef.style.visibility="hidden"

})

rhovef.addEventListener('mouseover', function(){
    rhovef.style.visibility="visible"
})
rhovef.addEventListener('mouseout', function(){
    rhovef.style.visibility="hidden"
    
})


// deccor

let dec = document.querySelector('#deco')
let dehovef=document.querySelector('#hov_Eff_dec')

dec.addEventListener('mouseover', function(){
dehovef.style.visibility="visible"

})

dec.addEventListener('mouseout', function(){
dehovef.style.visibility="hidden"

})

dehovef.addEventListener('mouseover', function(){
    dehovef.style.visibility="visible"
})
dehovef.addEventListener('mouseout', function(){
    dehovef.style.visibility="hidden"
    
})

// bedding  hov_Eff_bed

let bed = document.querySelector('#bed')
let bedhovef=document.querySelector('#hov_Eff_bed')

bed.addEventListener('mouseover', function(){
bedhovef.style.visibility="visible"

})

bed.addEventListener('mouseout', function(){
bedhovef.style.visibility="hidden"

})

bedhovef.addEventListener('mouseover', function(){
    bedhovef.style.visibility="visible"
})
bedhovef.addEventListener('mouseout', function(){
    bedhovef.style.visibility="hidden"
    
})

// holiday

let holi = document.querySelector('#holi')
let holihovef=document.querySelector('#holiday')

holi.addEventListener('mouseover', function(){
holihovef.style.visibility="visible"

})

holi.addEventListener('mouseout', function(){
holihovef.style.visibility="hidden"

})

holihovef.addEventListener('mouseover', function(){
    holihovef.style.visibility="visible"
})
holihovef.addEventListener('mouseout', function(){
    holihovef.style.visibility="hidden"
    
})

// sels

let sels = document.querySelector('#sels')
let selshovef=document.querySelector('#selss')

sels.addEventListener('mouseover', function(){
selshovef.style.visibility="visible"

})

sels.addEventListener('mouseout', function(){
selshovef.style.visibility="hidden"

})

selshovef.addEventListener('mouseover', function(){
    selshovef.style.visibility="visible"
})
selshovef.addEventListener('mouseout', function(){
    selshovef.style.visibility="hidden"
    
})

// logsss
// logs

let efhome = document.querySelector('#efhome')
let hov_Eff_home=document.querySelector('#hov_Eff_home')

efhome.addEventListener('mouseover', function(){
    hov_Eff_home.style.visibility="visible"

})

efhome.addEventListener('mouseout', function(){
    hov_Eff_home.style.visibility="hidden"

})

hov_Eff_home.addEventListener('mouseover', function(){
    hov_Eff_home.style.visibility="visible"
})
hov_Eff_home.addEventListener('mouseout', function(){
    hov_Eff_home.style.visibility="hidden"
    
})


let kithome = document.querySelector('#kithome')
let hov_Eff_kits=document.querySelector('#hov_Eff_kits')

kithome.addEventListener('mouseover', function(){
    hov_Eff_kits.style.visibility="visible"

})

kithome.addEventListener('mouseout', function(){
    hov_Eff_kits.style.visibility="hidden"

})

hov_Eff_kits.addEventListener('mouseover', function(){
    hov_Eff_kits.style.visibility="visible"
})
hov_Eff_kits.addEventListener('mouseout', function(){
    hov_Eff_kits.style.visibility="hidden"
    
})

// outpros

let outpros = document.querySelector('#outpros')
let hov_Eff_out=document.querySelector('#hov_Eff_out')

outpros.addEventListener('mouseover', function(){
    hov_Eff_out.style.visibility="visible"

})

outpros.addEventListener('mouseout', function(){
    hov_Eff_out.style.visibility="hidden"

})

hov_Eff_out.addEventListener('mouseover', function(){
    hov_Eff_out.style.visibility="visible"
})
hov_Eff_out.addEventListener('mouseout', function(){
    hov_Eff_out.style.visibility="hidden"
    
})