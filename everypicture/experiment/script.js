(function() {
    'use strict';

    window.addEventListener('load', function () {
        const sections = document.querySelectorAll('section');
        const image = document.querySelector('figure img');
        const overlay = document.getElementById("overlay");
        const overlayText = document.getElementById("overlay-text");

        let sectionTops = [];
        let pageTop;
        let counter = 0;
        let prevCounter = -1;
        let doneResizing;

        const messages = {
            0: "Yellow Wax Seal",
            1: "Orange and Pink Wax Seal"
        };

        resetPagePosition();

        window.addEventListener('scroll', function () {
            pageTop = window.pageYOffset + window.innerHeight / 3; 

            for (let i = 0; i < sections.length; i++) {
                if (pageTop >= sectionTops[i]) {
                    counter = i;
                }
            }

            if (counter !== prevCounter) {
                image.className = 'sect' + (counter + 2); 
                showOverlay(counter);
                prevCounter = counter;
            }
        });

        window.addEventListener('resize', function () {
            clearTimeout(doneResizing);
            doneResizing = setTimeout(resetPagePosition, 500);
        });

        function resetPagePosition() {
            sectionTops = [];
            sections.forEach(section => {
                sectionTops.push(section.getBoundingClientRect().top + window.pageYOffset);
            });

            pageTop = window.pageYOffset + window.innerHeight / 3;
            counter = 0;

            for (let i = 0; i < sectionTops.length; i++) {
                if (pageTop >= sectionTops[i]) {
                    counter = i;
                }
            }
        }

        function showOverlay(index) {
            if (messages[index]) {
                overlayText.innerText = messages[index];
                overlay.style.display = "block";
            } else {
                overlay.style.display = "none";
            }
        }

        window.closeOverlay = function () {
            overlay.style.display = "none";
        };
    });
})();
