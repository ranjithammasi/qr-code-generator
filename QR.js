let qrContentInput = document.getElementById("qr-content");
let qrForm = document.getElementById("qr-form");
let qrcode;

function generateQrCode(){
    return new QRcode("qr-code",{
        Text : qrContentInput,
        width : 256,
        height : 256,
        correctLevel : QRcode.correctLevel.H,

    })
}
qrForm.addEventListener('submit',function(event){
    event.preventDefault();
    let qrContent=  qrContentInput.ariaValueMax;
    if(qrcode== null){
        qrCode = generateQrCode(qrContent);
    }
    else{
        qrcode.makeCode(qrContent);


    }

});