const form=document.querySelector("#for"),
continueBtn=form.querySelector("#btn"),
errorText = form.querySelector(".error-text");
form.onsubmit = (e)=>{
    e.preventDefault();
}

continueBtn.onclick = ()=>{
    let xhr = new XMLHttpRequest();

    xhr.onload = ()=>{
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(data === "success"){
                sendEmail();
                location.href = "otpverify.html";
              }else{

                errorText.textContent = data;
                errorText.style.height = "45px";
                
              }
          }
      }
    }
    let formData = new FormData(form);
    xhr.send(formData);
}


var otp='';

function generateOtp()
{
  otp='';
  var digits = '0123456789';
  var otpLength = 6;
  for(let i=1; i<=otpLength; i++)
  {
    var index = Math.floor(Math.random()*(digits.length));
    otp = otp + digits[index];
  }
  localStorage.setItem("name", otp);
  return otp;
}	

function sendEmail() {
  otp = generateOtp();
  var to=document.getElementById("myText").value;
  Email.send({
    Host: "smtp.gmail.com",
    Username : "gihozomichelangelo@gmail.com",
    Password : "Alwayscool12345",
    To : to,
    From : "gihozomichelangelo@gmail.com",
    Subject : "Social Media - OTP",
    Body : "Message from gihozomichealangelo.\nThe OTP is " +otp+" Have a Nice Day!!:)",
  });
  localStorage.setItem("email", to);
  alert("Mail sent successfully Check for OTP");
}