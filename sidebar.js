

document.addEventListener('DOMContentLoaded', () => {
    // Attach click event listeners to all elements with a 'summary' class within the sidebar
    document.querySelectorAll('.sidebar .summary').forEach(summaryElement => {
        summaryElement.addEventListener('click', function() {
            // Locate the submenu related to this summary by accessing the next sibling element
            const relatedSubmenu = this.nextElementSibling;

            // Toggle the 'hidden' class to show or hide the submenu
            // Also toggle the 'shown' class for CSS visibility control
            relatedSubmenu.classList.toggle('hidden');
            relatedSubmenu.classList.toggle('shown');

            // Find the icon within the summary element and rotate it based on the submenu visibility
            const icon = this.querySelector('i.fas');
            icon.classList.toggle('rotated'); // Add or remove the 'rotated' class to rotate the icon
        });
    });
});


