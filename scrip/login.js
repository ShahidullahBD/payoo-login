document.getElementById('login-btn').addEventListener('click', function(){
    console.log('clicked');
    const mobileNumber = document.getElementById('mobile-number');
    const contactNumber = mobileNumber.value;
    const pinNumber = document.getElementById('pin-number');
    const pin = pinNumber.value;
    if(contactNumber == '01710102030' && pin == '1234'){
        alert('loging succesfully');
        // window.location.replace('./home.html')
        window.location.assign('./home.html')
    }else{
        alert('login failed');
        return;
    }       
})
