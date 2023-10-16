'use strict';

import user from '../models/userModel.js'


console.log(user);

const loginBtn = document.querySelector('.login-btn');
console.log(loginBtn);


loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const emailAdress = document.querySelector('.email-adress').value;
    const password = document.querySelector('.password').value;
    if(emailAdress === user.emailAdress && user.password === password){
        window.location.href = '../../views/home/home.html'
    }
    
})
