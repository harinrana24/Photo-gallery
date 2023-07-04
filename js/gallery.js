


// to work dynamically everytime

document.addEventListener("DOMContentLoaded", function () {
    
let imgage = document.querySelector("figure img");
let figures = document.querySelectorAll("ul li img");

// loop to get each image

figures.forEach(function(figure){
    // function to get imwge when clicked

figure.addEventListener("click", function(){
    let thumbnail = figure.getAttribute("src");
    


    imgage.setAttribute("src", thumbnail);
});
});
});