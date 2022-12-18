import {navbar} from "./function.js";
console.log(navbar);
let naverss= document.querySelector('#container')
naverss.innerHTML=navbar()


let arrspic = [

    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_1.jpg?imwidth=400",
        picname:'Living Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_2.jpg?imwidth=400",
        picname:'Patio Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_3.jpg?imwidth=400",
        picname:'Small Space Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_4.jpg?imwidth=400",
        picname:'Kitchen Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_5.jpg?imwidth=400",
        picname:'Dining Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_6.jpg?imwidth=400",
        picname:'Living Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_missing_1.jpg?imwidth=400",
        picname:'Dining Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_7.jpg?imwidth=400",
        picname:'Small Space Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_8.jpg?imwidth=400",
        picname:'Living Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_7.jpg?imwidth=400",
        picname:'Small Space Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_8.jpg?imwidth=400",
        picname:'Dining Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/09292022_furniture_PopCat_11.jpg?imwidth=400",
        picname:'Patio Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_missing_1.jpg?imwidth=400",
        picname:'Dining Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_7.jpg?imwidth=400",
        picname:'Small Space Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_8.jpg?imwidth=400",
        picname:'Living Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_2.jpg?imwidth=400",
        picname:'Patio Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_3.jpg?imwidth=400",
        picname:'Small Space Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_4.jpg?imwidth=400",
        picname:'Kitchen Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_5.jpg?imwidth=400",
        picname:'Dining Room Furniture'
    },{
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_7.jpg?imwidth=400",
        picname:'Small Space Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_8.jpg?imwidth=400",
        picname:'Dining Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/09292022_furniture_PopCat_11.jpg?imwidth=400",
        picname:'Patio Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_missing_1.jpg?imwidth=400",
        picname:'Dining Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_7.jpg?imwidth=400",
        picname:'Small Space Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_3.jpg?imwidth=400",
        picname:'Small Space Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_4.jpg?imwidth=400",
        picname:'Kitchen Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_5.jpg?imwidth=400",
        picname:'Dining Room Furniture'
    },
    {
        pic:"https://ak1.ostkcdn.com/img/mxc/10312022_HOLIDAY2022_Furniture_PopCat_6.jpg?imwidth=400",
        picname:'Living Room Furniture'
    },
    ]
    
    console.log(arrspic)
    let porsucarr=document.querySelector('#product')
 function getpro(data){
    
        data.forEach((el) =>{
    
            // console.log(el)
            let div=document.createElement('div')
    
            let imgs =document.createElement('img')
            imgs.src=el.pic
            let h2 = document.createElement('h2')
            h2.innerHTML=el.picname
            let btn =document.createElement('button')
            btn.innerHTML='Details'
    
            
            div.append(imgs,h2,btn)
            porsucarr.append(div)
    
        })
    
    }
 getpro(arrspic)
    

 import {footer} from './footer.js'
console.log(footer)
    let footrss =document.querySelector('#footpath').innerHTML=footer()