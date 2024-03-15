document.addEventListener('DOMContentLoaded', () => {
    ////////////////////////////light/dark theme/////////////////////////
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const themeIcon = themeToggleButton.querySelector('i');
    // Extend the selection to include .menu and .submenu
    const themeElements = document.querySelectorAll('.navbar, .sidebar, .content, .icon-btn, .menu, .submenu');

    function toggleTheme() {
        themeElements.forEach(element => {
            if (element.classList.contains('light-theme')) {
                element.classList.replace('light-theme', 'dark-theme');
                themeIcon.classList.replace('fa-sun', 'fa-moon');
            } else {
                element.classList.replace('dark-theme', 'light-theme');
                themeIcon.classList.replace('fa-moon', 'fa-sun');
            }
        });

        // Additional logic to ensure all anchors within .menu and .submenu also change color
        const menuAnchors = document.querySelectorAll('.menu a, .submenu a');
        menuAnchors.forEach(anchor => {
            anchor.classList.toggle('light-theme-anchor');
            anchor.classList.toggle('dark-theme-anchor');
        });
    }

    themeToggleButton.addEventListener('click', toggleTheme);

    // Initialize with the light theme
    themeElements.forEach(element => element.classList.add('light-theme'));
    themeIcon.classList.add('fa-sun');

    // Assuming you may want specific anchor styles toggled for clarity
    const menuAnchors = document.querySelectorAll('.menu a, .submenu a');
    menuAnchors.forEach(anchor => anchor.classList.add('light-theme-anchor'));

   ///////////////////////////////////////The speech bubble/////////////////////////////
   
    const avatar = document.querySelector('.avatar');
    const speechBubble = document.querySelector('.speech-bubble');

    // Function to toggle speech bubble visibility
    function toggleSpeechBubble() {
        // Toggle the 'visible' class to show or hide the speech bubble.
        speechBubble.classList.toggle('visible');
    }

    // Listen for clicks on the avatar to show/hide the speech bubble.
    avatar.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from affecting other elements.
        toggleSpeechBubble();
    });

    // Listen for clicks on the document to hide the speech bubble if visible.
    document.addEventListener('click', (event) => {
        if (!speechBubble.contains(event.target) && speechBubble.classList.contains('visible')) {
            speechBubble.classList.remove('visible');
        }
    });

    // Prevent clicks within the speech bubble from closing it.
    speechBubble.addEventListener('click', (event) => {
        event.stopPropagation();
    });


});