let detail_arr = JSON.parse(localStorage.getItem("detail_data"))
let detail_arr1=[];
detail_arr1.push(detail_arr);
function showedetail(){
   let container = document.getElementById('detail_img');
   container.innerHTML=null;

   let container1 = document.getElementById("detail_info_of_product");
   container1.innerHTML=null;
   detail_arr1.forEach((el)=>{

    let div = document.createElement("div");
    div.setAttribute("class","info_of_img");
    let div3 = document.createElement("div");
    div3.setAttribute("class","img-zoom-lens");

    let div2 = document.createElement("div");

    let img = document.createElement("img");
    img.src=el.img;

    let h1 = document.createElement("h2");
    h1.innerText=el.item;

    let h2 = document.createElement("h2");
    h2.innerText="Sale INR "+" "+el.price;

    let h3 = document.createElement("h2");
    h3.innerText=el.des;

    let h4 = document.createElement("h2");
    h4.innerText=el.catogary;
      

    div.append(img);
    div2.append(h1,h4,h2,h3);
    container.append(div);
    container1.append(div2);
   })
}

showedetail();

