//filter for tag table

// input element 
const filterInput = document.getElementById('title');
// all the tags
const tagElements = document.querySelectorAll('.custom-input');

const showAllTable = document.getElementById('showAllTable');

// Add input event listener to the filter input
filterInput.addEventListener('input', function() {
    const filterValue = this.value.toLowerCase(); 

    // Loop each tag and check if it matches the filter value
    tagElements.forEach(function(tagElement) {
        const tagText = tagElement.value.toLowerCase();
        const parentTr = tagElement.closest('tr');

        if (tagText.includes(filterValue)) {
            parentTr.style.display = ''; 
        } else {
            parentTr.style.display = 'none'; 
        }
    });
});

showAllTable.addEventListener('click', function() {
    customInputs.forEach(function(customInput) {
        const parentRow = customInput.closest('tr');
        parentRow.style.display = '';
    });
});

