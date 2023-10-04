//================================= Full Screen(DOM) ====================================

var menu = document.querySelector("#menu");
var full = document.querySelector(".full-screen")

var flag =0 
menu.addEventListener("click",function(){
    if(flag==0)
    {
    full.style.top = 0 ;
    menu.innerHTML =' <i class="ri-close-fill"></i>'
    flag=1 
    }
    else{
        full.style.top = "-100%" ;
        menu.innerHTML = '<i class="ri-menu-3-fill"></i>'
        flag=0 
    }
})

// =========================== Vase (GSAP/ScrollTrigger) ====================================


var pot = document.querySelector(".page1 img")
gsap.to(".page1 img",{
    y:"-40%",
    
    // delay:2,
    scrollTrigger:{
       trigger:".page1 img",
       scroler:"body",
    // markers:true,
       start:"top 15%",
       end:"top -100%",
       scrub:1                                             
    }
})

// =========================== click on menu change the images(DOM) =========================
//                                     (METHOD - 1) using-DOM

/*
var home = document.querySelector(".home");
var about = document.querySelector(".about");
var product = document.querySelector(".product");
var contact = document.querySelector(".contact");

var box = document.querySelector(".box");

// home

home.addEventListener("mouseenter",function(){
    box.style.backgroundImage="url(https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg)"
})
home.addEventListener("mouseleave",function(){
    box.style.backgroundImage="url(https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80)"
})

// about

about.addEventListener("mouseenter",function(){
    box.style.backgroundImage="url(https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg)"
})
about.addEventListener("mouseleave",function(){
    box.style.backgroundImage="url(https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80)"
})

// product

product.addEventListener("mouseenter",function(){
    box.style.backgroundImage="url(https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
})
product.addEventListener("mouseleave",function(){
    box.style.backgroundImage="url(https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80)"
})

// contact

contact.addEventListener("mouseenter",function(){
    box.style.backgroundImage="url(https://img.freepik.com/free-photo/bouquet-flowers-with-white-background_1232-1088.jpg?w=360&t=st=1693149338~exp=1693149938~hmac=239e444a621df050228342b84f10407471467ae11c357c112a3e0349fa90f870)"
})
contact.addEventListener("mouseleave",function(){
    box.style.backgroundImage="url(https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80)"
})

*/

//                                (METHOD - 2)  using (forEach)
//                   (first we have give (id and class) to our full-left div)

var home = document.querySelector(".home");
var about = document.querySelector(".about");
var product = document.querySelector(".product");
var contact = document.querySelector(".contact");

var box = document.querySelector(".box");
var option = document.querySelectorAll(".option");

option.forEach(Element =>{
   Element.addEventListener("mouseenter",function(){
           if(Element.getAttribute("id")==="home")
           {
            box.style.backgroundImage="url(https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?cs=srgb&dl=pexels-pixabay-56866.jpg&fm=jpg)"
           }
           if(Element.getAttribute("id")==="about")
           {
            box.style.backgroundImage="url(https://thumbs.dreamstime.com/b/spring-flowers-blue-crocuses-drops-water-backgro-background-tracks-rain-113784722.jpg)"
           }
            if(Element.getAttribute("id")==="product")
           {
            box.style.backgroundImage="url(https://images.pexels.com/photos/1697912/pexels-photo-1697912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)"
           }
            if(Element.getAttribute("id")==="contact")
           {
            box.style.backgroundImage="url(https://img.freepik.com/free-photo/bouquet-flowers-with-white-background_1232-1088.jpg?w=360&t=st=1693149338~exp=1693149938~hmac=239e444a621df050228342b84f10407471467ae11c357c112a3e0349fa90f870)"
           }
   })
   Element.addEventListener("mouseleave",function(){
    box.style.backgroundImage="url(https://images.unsplash.com/photo-1530092285049-1c42085fd395?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80)"
})
})

// =======================(jb home pr mousemove ho to image bhi move ho)==================

var homeImage = document.querySelector(".homeImg")
var aboutImage = document.querySelector(".aboutImg")
var productImage = document.querySelector(".productImg")
var contactImage = document.querySelector(".contactImg")

home.addEventListener("mousemove",function(event){
    let x = event.pageX;
    let y = event.pageY;

    homeImage.style.top = y +  "px";
    homeImage.style.left = x + "px";
    homeImage.style.display ="initial";
    homeImage.style.transform= "rotate(10deg)" 
})
home.addEventListener("mouseleave",function(){
    homeImage.style.display ="none";
})
about.addEventListener("mousemove",function(event){
    let x = event.pageX;
    let y = event.pageY;

    aboutImage.style.top = y + "px";
    aboutImage.style.left = x +  "px";
    aboutImage.style.display ="initial";
    aboutImage.style.transform= "rotate(-10deg)" 
})
about.addEventListener("mouseleave",function(){
    aboutImage.style.display ="none";
})
product.addEventListener("mousemove",function(event){
    let x = event.pageX;
    let y = event.pageY;

    productImage.style.top = y + "px";
    productImage.style.left = x + "px";
    productImage.style.display ="initial";
    productImage.style.transform= "rotate(10deg)" 
})
product.addEventListener("mouseleave",function(){
    productImage.style.display ="none";
})
contact.addEventListener("mousemove",function(event){
    let x = event.pageX;
    let y = event.pageY;

    contactImage.style.top = y + "px";
    contactImage.style.left = x + "px";
    contactImage.style.display ="initial";
    contactImage.style.transform= "rotate(-10deg)" 
})
contact.addEventListener("mouseleave",function(){
    contactImage.style.display ="none";
})

// ==============================(page-3 rotate photo)=====================================

var iconLeft =  document.querySelector(".icon1");
var iconRight =  document.querySelector(".icon2");
var productImages = document.querySelector(".product-images")

var swap = 0;
iconRight.addEventListener("click",function(){
    swap = swap+100;
    productImages.scrollTo(swap,0)
    productImages.style.transform ="skew(10deg)"
    productImage.style.overflowX="auto" 

    setTimeout(function(){
    productImages.style.transform ="skew(0deg)"
    },200)
})
iconLeft.addEventListener("click",function(){
    swap = swap-100;
    productImages.scrollTo(swap,0)
    productImage.style.overflowX="auto" 

    productImages.style.transform ="skew(-10deg)"
    setTimeout(function(){
    productImages.style.transform ="skew(0deg)"
    },200)
})
