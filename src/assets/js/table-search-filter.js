// const titleInput = document.getElementById("title");
// const tagInput = document.getElementById("tag");
// const authorInput = document.getElementById("author");
// const categorySelect = document.getElementById("category");
// const approvedCheckbox = document.getElementById("approved");
// const declinedCheckbox = document.getElementById("declined");
// const showAllTable = document.getElementById('showAllTable');
// const tableRows = document.querySelectorAll('filter-table tbody tr');



// function filterTable() {
//   tableRows.forEach(row=> {
//     const title = row.cells[0].textContent.toLowerCase();
//     const author = row.cells[1].textContent.toLowerCase();
//     const category = row.cells[2].textContent;
//     const tag = row.cells[3].textContent.toLowerCase();

//     const titleFilter = title.includs(titleInput.value.toLowerCase());
//     const authorFilter = author.includs(authorInput.value.toLowerCase());
//     const tagFilter = tag.includs(tagInput.value.toLowerCase());
//     const categoryFilter =
//       categorySelect.value || category === categorySelect.value;
//     const approvedFilter = approvedCheckbox.checked
//       ? category === "approved"
//       : true;
//     const declinedFilter = declinedCheckbox.checked
//       ? category === "declined"
//       : true;

//     if (
//       titleFilter &&
//       authorFilter &&
//       tagFilter &&
//       categoryFilter &&
//       approvedFilter &&
//       declinedFilter
//     ) {
//       row.style.display = "";
//     } else {
//       row.style.display = "none";
//     }
//   });
// }
// showAllTable.addEventListener('click',()=> {
// //   for (let i = 1; i < rows.lenght; i++) {
// //     rows[i].style.display = "";
// //   }
// titleInput.value = '';
// authorInput.value = '';
// tagInput.value = '';
//             categorySelect.value = '';
//             approvedCheckbox.checked = false;
//             declinedCheckbox.checked = false;
//             tableRows.forEach(row => {
//                 row.style.display = '';
// });
// });

// titleInput.addEventListener("input", filterTable);
// tagInput.addEventListener("input", filterTable);
// authorInput.addEventListener("input", filterTable);
// categorySelect.addEventListener("change", filterTable);
// approvedCheckbox.addEventListener("change", filterTable);
// declinedCheckbox.addEventListener("change", filterTable);


// filter for ( admins table && job-seekers table && employers table

const nameInput = document.getElementById('title');
const emailInput = document.getElementById('email');
const activeCheckbox = document.getElementById('active');
const blockedCheckbox = document.getElementById('blocked');
const dataTable = document.getElementById('dataTable');
const showAllTable = document.getElementById('showAllTable');

// event listeners for input and change events
nameInput.addEventListener('input', filterTable);
emailInput.addEventListener('input', filterTable);
activeCheckbox.addEventListener('change', filterTable);
blockedCheckbox.addEventListener('change', filterTable);
showAllTable.addEventListener('click', showAllData);

// filter function 
function filterTable() {
  const rows = dataTable.querySelectorAll('tr');
  
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    const email = row.cells[1].textContent.toLowerCase();
    const status = row.cells[4].textContent.toLowerCase();
    

    // filters by input values and checkboxes
    const nameFilter = name.includes(nameInput.value.toLowerCase());
    const emailFilter = email.includes(emailInput.value.toLowerCase());
    const activeFilter = activeCheckbox.checked ? status === '✔️' : true;
    const blockedFilter = blockedCheckbox.checked ? status === '❌' : true;


    // conditions to show or hide row based on filter 
    if(nameFilter && emailFilter && activeFilter && blockedFilter) {
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








