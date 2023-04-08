const loginbtn = document.querySelector('#loginform');
const username = document.querySelector('#username');
const password = document.querySelector('#password');

loginbtn.onclick = ()=>{
    console.log('username: ',username.value,);
    console.log('password: ',password.value,);

}