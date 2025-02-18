(function() {
    'use strict';
    
    window.addEventListener('load', function () {
        const sections = document.querySelectorAll('section');
        let sectionTops = [];
        let pageTop;
        let counter = 1;
        let prevCounter = 1;
        let doneResizing;
    
        resetPagePosition();
    
        window.addEventListener('scroll', function () {
            pageTop = window.pageYOffset + 300;
    
            if (pageTop > sectionTops[counter]) {
                counter++;
            } else if (counter > 1 && pageTop < sectionTops[counter - 1]) {
                counter--;
            }
    
            if (counter !== prevCounter) {
                document.querySelector('figure img').className = 'sect' + counter;
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
                sectionTops.push(Math.floor(section.getBoundingClientRect().top) + window.pageYOffset);
            });
    
            const pagePosition = window.pageYOffset + 300;
            counter = 0;
    
            sectionTops.forEach(section => { if (pagePosition > section) counter++; });
        }
    
        function showOverlay(counter) {
            const overlay = document.getElementById("overlay");
            const overlayText = document.getElementById("overlay-text");
            const messages = ["Red Wax Seal", "Pink/Yellow Wax Seal", "Green Wax Seal", "Yellow Wax Seal"];
    
            if (counter >= 1 && counter <= messages.length) {
                overlayText.innerText = messages[counter - 1];
                overlay.style.display = "block";
            }
        }
    
        window.closeOverlay = function () {
            document.getElementById("overlay").style.display = "none";
        }
    });
    
})();
