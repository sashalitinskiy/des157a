(function() {
    'use strict';

    window.addEventListener('load', function () {
        const overlay = document.getElementById("overlay");
        const overlayText = document.getElementById("overlay-text");

        const messages = ["Yellow Wax Seal", "Orange and Pink Wax Seal"];

        window.addEventListener('scroll', function () {
            let scrollPosition = window.scrollY;

            if (scrollPosition > 200 && scrollPosition < 600) {
                showOverlay(0); 
            } else if (scrollPosition >= 600) {
                showOverlay(1); 
            } else {
                overlay.style.display = "none";
            }
        });

        function showOverlay(index) {
            overlayText.innerText = messages[index];
            overlay.style.display = "block";
        }

        window.closeOverlay = function () {
            overlay.style.display = "none";
        };
    });
})();
