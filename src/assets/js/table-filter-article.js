
// filter for article table

const nameInput = document.getElementById('title');
const tagInput = document.getElementById('tag');
const authorInput = document.getElementById('author');
const categorySelect = document.getElementById('category');
const approvedCheckbox = document.getElementById('approved');
const declinedCheckbox = document.getElementById('declined');
const dataTable = document.getElementById('dataTable');
const showAllTable = document.getElementById('showAllTable');

// event listeners for input and change events
nameInput.addEventListener('input', filterTable);
tagInput.addEventListener('input', filterTable);
authorInput.addEventListener('input', filterTable);
categorySelect.addEventListener('change', filterTable);
approvedCheckbox.addEventListener('change', filterTable);
declinedCheckbox.addEventListener('change', filterTable);
showAllTable.addEventListener('click', showAllData);

// filter function 
function filterTable() {
  const rows = dataTable.querySelectorAll('tr');
  
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    const author= row.cells[1].textContent.toLowerCase();
    const category = row.cells[2].textContent;
    const tag = row.cells[3].textContent.toLowerCase();
    const status = row.cells[4].textContent.toLowerCase();
    
    

    // filters by input values and checkboxes
    const nameFilter = name.includes(nameInput.value.toLowerCase());
    const tagFilter = tag.includes(tagInput.value.toLowerCase());
    const authorFilter = author.includes(authorInput.value.toLowerCase());
    const categoryFilter = category.includes(categorySelect.value);
    const approvedFilter = approvedCheckbox.checked ? status === '✔️' : true;
    const declinedFilter = declinedCheckbox.checked ? status === '❌' : true;


    // conditions to show or hide row based on filter 
    if(nameFilter && tagFilter && authorFilter && categoryFilter && approvedFilter && declinedFilter) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// function to show all rows in the table
function showAllData() {
  const rows = dataTable.querySelectorAll('tr');

  rows.forEach(row => {
    row.style.display = '';
  });
}




// // filter for artical table
// const nameInput = document.getElementById('title');
// const authorInput = document.getElementById('author');
// const categorySelect = document.getElementById('category');
// const tagInput = document.getElementById('tag');
// const approvedCheckbox = document.getElementById('approved');
// const declinedCheckbox = document.getElementById('declined');
// const dataTable = document.getElementById('dataTable');
// const showAllTable = document.getElementById('showAllTable');

// // event listeners for input and change events
// nameInput.addEventListener('input', filterTable);

// authorInput.addEventListener('input', filterTable);
// categorySelect.addEventListener('change', filterTable);
// tagInput.addEventListener('input', filterTable);
// approvedCheckbox.addEventListener('change', filterTable);
// declinedCheckbox.addEventListener('change', filterTable);
// showAllTable.addEventListener('click', showAllData);

// // filter function 
// function filterTable() {
//   const rows = dataTable.querySelectorAll('tr');
  
//   rows.forEach(row => {
//     const name = row.cells[0].textContent.toLowerCase();
    
//     const author = row.cells[1].textContent.toLowerCase();
//     const category = row.cells[2].textContent;
//     const tag = row.cells[3].textContent.toLowerCase();
//     const status = row.cells[4].textContent.toLowerCase();
    
//     // filters by input values and checkboxes
//     const nameFilter = name === nameInput.value.trim().toLowerCase();
    
//     const authorFilter = author === authorInput.value.trim().toLowerCase();
//     const categoryFilter = category === categorySelect.value;
//     const tagFilter = tag === tagInput.value.trim().toLowerCase();
//     const approvedFilter = approvedCheckbox.checked ? status === '✔️' : true;
//     const declinedFilter = declinedCheckbox.checked ? status === '❌' : true;

//     // conditions to show or hide row based on filter 
//     if(nameFilter  && authorFilter && categoryFilter && tagFilter && approvedFilter && declinedFilter) {
//       row.style.display = '';
//     } else {
//       row.style.display = 'none';
//     }
//   });
// }

// // function to show all rows in the table
// function showAllData() {
//   const rows = dataTable.querySelectorAll('tr');

//   rows.forEach(row => {
//     row.style.display = '';
//   });
// }



