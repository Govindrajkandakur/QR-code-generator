const wrapper =document.querySelector(".wrapper");
qrInput =document.querySelector(".form input");
generateBtn =document.querySelector(".form button");
qrImg =wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value;
    if(!qrValue)return; //if the input is empty then return from here
    generateBtn.innerText="Generating QR code ...";
     qrImg.src=` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
        wrapper.classList.add("active");
    
    generateBtn.innerText="Generated QR code "
    //getting aQR code of user entered value using the qrserver api and passing 
   //the api returned img src to qrImg
    });
});
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})