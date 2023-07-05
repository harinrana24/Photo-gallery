//Manav kumar 200534756
// this makes our function work eery time the website is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the large image and thumbnail images
    let largeImage = document.querySelector("figure img");
    let thumbnails = document.querySelectorAll("ul li img");
  
    // Loop through each thumbnail image
    thumbnails.forEach(function (thumbnail) {
      // Add a click event listener to each thumbnail
      thumbnail.addEventListener("click", function () {
        // Get the URL of the clicked thumbnail
        let thumbnailSrc = thumbnail.getAttribute("src");
  
        // Update the source of the large image with the clicked thumbnail's URL
        largeImage.setAttribute("src", thumbnailSrc);
      });
    });
  });
  