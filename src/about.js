document.addEventListener("DOMContentLoaded", function() {
    const text = document.querySelector(".content .animated");
    const images = document.querySelectorAll(".content .images img");

    text.classList.add("fadeInText");
    setTimeout(function() {
        text.classList.add("show");
    }, 100); 

    images.forEach(image => {
      image.classList.add("fadeIn");
    });
});



