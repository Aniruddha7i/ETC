// Live date (Year)
var date=new Date();
var Years=date.getFullYear();// It give us local time update
var date_spam=document.getElementById('Year');
date_spam.innerText=Years+'';

//  form dom
var login = document.getElementById('login');
var signup = document.getElementById('signup');
var list_login=login.classList;
var list_signup=signup.classList;
var closeform=()=>{
    list_login.add('display_none');
}
var closeform2=()=>{
    list_signup.add('display_none');
}
var Login=()=>{
    list_login.toggle('display_none');
    list_signup.add('display_none');
}
var SignUp=()=>{
    list_signup.toggle('display_none');
    list_login.add('display_none');
}