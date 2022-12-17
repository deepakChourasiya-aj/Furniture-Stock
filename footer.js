export  function footer(){

    return`

     <div class="main">
      
      
      <div class="logo row">
        <div class="footer-header">

            <h1 id="com_name">FURNITURE <br> stock.. </h1>
        </div>
        <div class="logo-des">
          <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
          
          <a href="#" class="btn-know">Know More</a>
        </div>
        
        
      </div>
      
      
      
      <div class="office row">
        <div class="footer-header">
          <h2>Office</h2>
        </div>
        <div class="office-des">
          <p>here are <br> many variations of passages<br>of Lorem Ipsum<br>available</p>
          
         <a href="#">faizan.md9735@gmail.com</a>
         
          
          <p class = "num">+91-6201855200</p>
        </div>
      </div>
      
      
      <div class="link row">
        <div class="footer-header">
          <h2>Links</h2>
        </div>
        
        <div class="link-des">
          <a href="#" class="footer-links">Home</a>
          <a href="#" class="footer-links">About</a>
          <a href="#" class="footer-links">Services</a>
          <a href="#" class="footer-links">Galary</a>
          <a href="#" class="footer-links">Contact</a>


        </div>
        
        
        
      </div>
      
      
      <div class="newsletter row">
        <div class="footer-header">
          <h2>Contect</h2>
        </div>
        <div class="newsletter-des">
          <div class="subcribe"><i class="sub-icon ri-mail-check-fill"></i>
            <input type="mail" placeholder = "Enter Email ID" required>
            <i class="sub-icon ri-arrow-right-line"></i>
          </div>
          <div class="icons">
            <a href="#"><i class="social-icon ri-facebook-fill"></i></a>
            <a href="#"><i class="social-icon ri-instagram-line"></i></a>
            <a href="#"><i class="social-icon ri-linkedin-fill"></i></a>
            <a href="#"><i class="social-icon ri-github-line"></i></a>
            
          </div>
        </div>
      </div>
      
      
    </div>
    <div class="copyright">
    <hr>
    
    <p>© Copyright 2022, Overstock.com®, Inc.
        <br>
        799 Coliseum Way Midvale, UT 84047 | 1-800-843-2446  
        <img  src="https://ak1.ostkcdn.com/img/mxc/intFlag_IN.gif" alt="">
     </p> 
    </div> 


    `

}


import { navbar } from "./function.js";
let navbartag = document.querySelector('#togsnav')

console.log(navbar)
navbartag.innerHTML= navbar();