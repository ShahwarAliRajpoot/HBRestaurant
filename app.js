var searchForm = document.querySelector('.search-form-container');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var cart = document.querySelector('.shopping-cart-container');

document.querySelector('#cart-btn').onclick = () =>{
    cart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

var loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    navbar.classList.remove('active');
}

var navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cart.classList.remove('active');    
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
}

var home = document.querySelector('.home');
if(home){
    home.addEventListener('mousemove', (e) => {

        var x = (window.innerWidth - e.pageX * 2) / 90;
        var y = (window.innerHeight - e.pageY * 2) / 90;
    
        document.querySelector('.home .home-parallax-img').style.transform = `translateX(${y}px) translateY(${x}px)`;
      });
}

function favorite(e){
    if(e.className === "far fa-heart"){
        e.className = "fas fa-heart";
    }
    else{
        e.className = "far fa-heart";
    }
}


function addOrder() {
    alert("Your Order Has Been Placed")
}

function checkout() {
    alert("Proseed To Checkout Done it")
}

function proceed() {
    alert("Your Order Has Been Proseed")
}

function net() {
    alert("Wellcome to HBRestaurant Please Read More")
}

var viewMore = function(el)
{

flag = el.getAttribute('flag');
if(flag == 'less'){
    el.setAttribute('flag','more')
    el.innerHTML = "View Less";
    showHide('block');
}
else{
    el.setAttribute('flag','less')
    el.innerHTML = "View More";
    showHide('none');
}
};

function showHide(display){
    var viewAll = document.getElementsByClassName("view")
        for(var i = 0; i < viewAll.length; i++){
      
        viewAll[i].style.display = display  
       
    }
}

function loader(){
    document.getElementById("loader-container").classList.add("fade-out");
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  window.onload = fadeOut();