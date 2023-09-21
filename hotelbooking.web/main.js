let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formbtn = document.querySelector('#login-btn');
let loginform = document.querySelector('.login-form-container');
let formclose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videobtn = document.querySelectorAll('.vid-btn');


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');  
    menu.classList.remove('fa-times');
    navBar.classList.remove('active'); 
    loginform.classList.remove('active'); 
}

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');

})

searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');

})

formbtn.addEventListener('click',() =>{
    loginform.classList.add('active');

})

formclose.addEventListener('click',() =>{
    loginform.classList.remove('active');

})

videobtn.foreach(btn =>{
    btn.addEventListener('click', () => {
        document.querySelector('.controls .active').classList.remove('active')
        btn.classList.add('active');
        let src =btn.getattribute('data-src');
        document.querySelector('video-silder').src = src;
 })
})



 


