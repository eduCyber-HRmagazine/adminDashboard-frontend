// Get the input element where the user will type the filter keyword
const filterInput = document.getElementById('title');

// Get all the tag elements
const tagElements = document.querySelectorAll('.custom-input');

// Add input event listener to the filter input
filterInput.addEventListener('input', function() {
    const filterValue = this.value.toLowerCase(); // Get the value entered by the user and convert it to lowercase

    // Loop through each tag element and check if it matches the filter value
    tagElements.forEach(function(tagElement) {
        const tagText = tagElement.value.toLowerCase();
        const parentTr = tagElement.closest('tr');

        if (tagText.includes(filterValue)) {
            parentTr.style.display = ''; // Show the tag if it matches the filter value
        } else {
            parentTr.style.display = 'none'; // Hide the tag if it does not match the filter value
        }
    });
});