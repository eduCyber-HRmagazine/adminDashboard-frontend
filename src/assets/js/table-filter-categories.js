//filter for categories table

// input element 
document.getElementById('title').addEventListener('input', function() {
    let filterValue = this.value.trim().toLowerCase();
    //  all rows in the table
    let categories = document.querySelectorAll('#dataTable tr');

    // Loop through each row
    categories.forEach(function(category) {
        let categoryName = category.querySelector('td:first-child input').value.toLowerCase();
        
        if(categoryName.includes(filterValue)) {
            category.style.display = 'table-row';
        } else {
            category.style.display = 'none';
        }
    });
});

document.getElementById('showAllTable').addEventListener('click', function() {
    let categories = document.querySelectorAll('#dataTable tr');
    // display all rows
    categories.forEach(function(category) {
        category.style.display = 'table-row';
    });
});
    



