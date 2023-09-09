let shwoDate=new Date()
let displayDate=shwoDate.getFullYear()
document.querySelector(".all-rights").innerHTML=`Copyright ${displayDate}. All rights reserved.`


          
let othernav = $('.navbar');
              
function changeNavbarBackground(color) {
  othernav.css('background-color', color);
}
let hmebutna = $('.hme-but-na'); 
function butNavcolor(but)
{
   hmebutna.css('background-color',but)
}
$(".arrow-up").fadeOut(10)
$(window).scroll(function() {
  let scrollPosition = $(window).scrollTop();
        
if (scrollPosition >= 50) {
changeNavbarBackground('#fff'); 
butNavcolor('#000')
$(".arrow-up").fadeIn(100)
} else {
changeNavbarBackground(''); 
butNavcolor('#fff');
$(".arrow-up").fadeOut(100)
}
});
let logohome = document.querySelector(".logo-home")
let logohome1 = document.querySelector(".logo-home-1")
let navlink = $(".n-home")              
function changColor(col) {
  navlink.css('color',col)
}
$(window).scroll(function() {
  let scrollPosition = $(window).scrollTop();
        
if (scrollPosition >= 50) {
changColor('#000')
logohome.classList.remove("d-none")
logohome1.classList.add("d-none")
} else {
changColor('#fff')
logohome.classList.add("d-none")
logohome1.classList.remove("d-none")
}
});
       
$(".input-nav").hide()
$('.search-nav,.search-nav-next').click(function(){
  $(".input-nav").toggle() 
})
$(document).ready(function(){
  $(".lode-page").fadeOut(2000,function(){
    $("body,html").css({overflow:'auto'})
  })
})

$(".arrow-up").click(function(){
  $("html,body").animate({scrollTop:"0"},1000)
})