'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const tabs = [
        { button: '.profile-tab', page: '.scroll-feed-page' },
        { button: '.followers-tab', page: '.scroll-followers-page' },
        { button: '.friends-tab', page: '.scroll-friends-page' },
        { button: '.gallery-tab', page: '.scroll-gallery-page' }
    ];

    tabs.forEach(tab => {
        const button = document.querySelector(tab.button);
        const page = document.querySelector(tab.page);

        button.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(button);
            // Hide all pages
            tabs.forEach(t => {
                document.querySelector(t.page).classList.add('hidden');
                document.querySelector(t.page).classList.remove('ain-page-active');
                
                document.querySelector(t.button).classList.remove('dashboard-tab--active')
            });

            // Show the clicked page
            page.classList.remove('hidden');
            page.classList.add('main-page-active');
            button.classList.add('dashboard-tab--active')
        });
    });
});
