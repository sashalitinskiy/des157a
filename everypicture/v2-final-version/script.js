(function () {
    'use strict';

    document.querySelectorAll('.wax-container img').forEach((img, index) => {
        img.addEventListener('click', function (event) {
            event.preventDefault();

            const overlays = document.querySelectorAll('.overlay');
            if (overlays[index]) {
                overlays[index].classList.remove('hidden');
                overlays[index].classList.add('showing');
            }
        });
    });

    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function (event) {
            event.preventDefault();

            const overlay = this.closest('.overlay');
            if (overlay) {
                overlay.classList.remove('showing');
                overlay.classList.add('hidden');
            }
        });
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            document.querySelectorAll('.showing').forEach(overlay => {
                overlay.classList.remove('showing');
                overlay.classList.add('hidden');
            });
        }
    });

})();
