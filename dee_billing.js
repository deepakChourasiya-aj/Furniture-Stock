

let submit_button1 = document.querySelector('.form_data');
// billing address data
let  lsdata = JSON.parse(localStorage.getItem('BillingAddress'))||[];
// shipping address data
let  lsdata2 = JSON.parse(localStorage.getItem('shippingAddress2'))||[];



submit_button1.addEventListener('submit',function(event){
    event.preventDefault();
    let email = document.querySelector('#dee_email').value;
    let firstName = document.querySelector('#dee_fname').value;
    let lastName = document.querySelector('#dee_lname').value;
    let company = document.querySelector('#dee_company').value;
    let taxId = document.querySelector('#dee_taxID').value;
    let Address1 = document.querySelector('#dee_Address1').value;
    let Address2 = document.querySelector('#dee_Address2').value;
    let countryName = document.querySelector('#dee_country').value;
    let city = document.querySelector('#dee_city').value;
    let state = document.querySelector('#dee_state').value;
    let Zipcode = document.querySelector('#dee_ZIP').value;
    let Phone = document.querySelector('#dee_Phone').value;
 
    if(email&&firstName&&Address1&&Address2&&countryName&&Phone&&lastName&&company&&taxId&&state&&Zipcode){
        let billing_data ={
            'Email':email,
            'FirstName ':firstName,
            'Address_1':Address1,
            'Address_2':Address2,
            'Country':countryName,
            'City':city,
            'PhoneNO':Phone
        } 
        // ServerData(shipping_data);
        console.log(billing_data);
        lsdata.push(billing_data);
        console.log(lsdata);
        localStorage.setItem('BillingAddress',JSON.stringify(lsdata));
    }else{
        alert('Please Fill the Required details');
    }
    
})

let submit_button2 = document.querySelector('#form2_data')

 submit_button2.addEventListener('submit',function(event){
    event.preventDefault();
    let email = document.querySelector('#dee_email2').value;
    let firstName = document.querySelector('#dee_fname2').value;
    let lastName = document.querySelector('#dee_lname').value;
    let company = document.querySelector('#dee_company').value;
    let taxId = document.querySelector('#dee_taxID').value;
    let Address1 = document.querySelector('#dee_Address12').value;
    let Address2 = document.querySelector('#dee_Address22').value;
    let countryName = document.querySelector('#dee_country2').value;
    let city = document.querySelector('#dee_city2').value;
    let state = document.querySelector('#dee_state').value;
    let Zipcode = document.querySelector('#dee_ZIP').value;
    let Phone = document.querySelector('#dee_Phone2').value;
    if(email&&firstName&&Address1&&Address2&&countryName&&Phone&&lastName&&company&&taxId&&state&&Zipcode){
        let shipping_data ={
            'Email':email,
            'FirstName ':firstName,
            'Address_1':Address1,
            'Address_2':Address2,
            'Country':countryName,
            'City':city,
            'PhoneNO':Phone
        } 
        // ServerData(shipping_data);
        lsdata2.push(shipping_data);
        localStorage.setItem('shippingAddress2',JSON.stringify(lsdata2));
        console.log(shipping_data);
    }else{
        console.log('aghhayme ')
        alert('Please Fill the Required details');
    }
 })


//  let ServerData = async(shipping_data)=>{
//          try {
//             let res = await fetch('url',{
//                 method: "POST",
//                 headers: {
//                     "Content-Type" : "application/json"
//                 },
//                 body : JSON.stringify(shipping_data)
//             });
            
            
//          } catch (error) {
//             alert('Bad Request')
//          }
//  }