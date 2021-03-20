
//  Select element function
     const selectElement = function (element) {
         return document.querySelector(element);
     };

     let menuToggle = selectElement('.menu-toggle');
     let body = selectElement('body');
     let navList = selectElement('.nav-list')

     menuToggle.addEventListener('click', () => {
         body.classList.toggle('open')
     }); 

     navList.addEventListener('click', () => {
        body.classList.toggle('open')
    }); 



window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

$(document).ready(function(){

    $(".fa-search").click(function(){
        $(".search-box").fadeToggle();
    }); 
});

$(document).mouseup(function (e) { 
    if ($(e.target).closest(".search-box").length 
                === 0) { 
        $(".search-box").fadeOut(); 
    } 
}); 
 

