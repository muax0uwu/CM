    var wra  = document.querySelector('.wrapper');
    var loginLink = document.querySelector('.login-link');
    var registerLink = document.querySelector('.register-link');
    var pass = document.getElementById('password');
    var msg = document.getElementById('msg');
    var str = document.getElementById('stran');

    registerLink.addEventListener('click', ()=> {
        wra.classList.add('active');
    });
    loginLink.addEventListener('click', ()=> {
        wra.classList.remove('active');
});

    pass.addEventListener('input', () => {
        if(pass.value.length > 0){
            msg.style.display = "block";
        }
        else{
            msg.style.display = "none";
        }
        if(pass.value.length > 8){
            str.innerHTML = 'weak';
        }
        else{
            msg.style.display = "none";
        }
        if(pass.value.match(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/) || pass.value.match(/([a-z])/) || pass.value.match(".*\\d.*")){
            str.innerHTML = 'Strong'
        }
        else{
            msg.style.display = "none"
        }
    });
