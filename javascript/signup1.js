const form=document.querySelector("#form"),
continueBtn = form.querySelector("#btn"),
errorText = form.querySelector(".error-text");

document.getElementById("email").value=localStorage.getItem("email");

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
                location.href = "php/signup2.php";
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