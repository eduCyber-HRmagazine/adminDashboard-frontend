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
    const name = row.cells[1].textContent.toLowerCase();
    const email = row.cells[2].textContent.toLowerCase();
    const status = row.cells[5].textContent.toLowerCase();
    

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
