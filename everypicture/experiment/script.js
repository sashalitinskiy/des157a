(function() {
    'use strict';
    
    document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let img = document.getElementById("wax-image");

    if (scrollPosition > 100 && scrollPosition < 300) {
        img.style.transform = "scale(1.2) translate(-20%, -10%)";
        showOverlay("Red and Orange Wax Seal");
    } else if (scrollPosition > 300 && scrollPosition < 500) {
        img.style.transform = "scale(1.5) translate(-10%, 0%)";
        showOverlay("Pink, Gold, and White Wax Seal");
    } else if (scrollPosition > 500 && scrollPosition < 700) {
        img.style.transform = "scale(1.8) translate(10%, 10%)";
        showOverlay("Green Wax Seal");
    } else if (scrollPosition > 700) {
        img.style.transform = "scale(2) translate(20%, 20%)";
        showOverlay("Yellow Wax Seal");
    } else {
        img.style.transform = "scale(1)";
        closeOverlay();
    }
});

function closeOverlay() {
    document.getElementById("overlay").style.display = "none";
}

})();
