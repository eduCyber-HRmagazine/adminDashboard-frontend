
// filter for event table

const nameInput = document.getElementById('title');
const dateInput = document.getElementById('date');

const dataTable = document.getElementById('dataTable');
const showAllTable = document.getElementById('showAllTable');

// event listeners for input and change events
nameInput.addEventListener('input', filterTable);

dateInput.addEventListener('change', filterTable);

showAllTable.addEventListener('click', showAllData);

// filter function 
function filterTable() {
  const rows = dataTable.querySelectorAll('tr');
  
  rows.forEach(row => {
    const name = row.cells[0].textContent.toLowerCase();
    // const date = row.cells[3].textContent;
    const dateString = row.cells[3].textContent;
    // assuming date is in format "MM/DD/YYYY"
    const dateParts = dateString.split('/'); 
    // reformat date string to YYYY-MM-DD
    const rowDate = new Date(`${dateParts[2]}-${dateParts[0]}-${dateParts[1]}`); 
    



    // filters by input values and checkboxes
    const nameFilter = name.includes(nameInput.value.toLowerCase());
    // compare dates
    const dateFilter = dateInput.value === '' || rowDate.toDateString() === new Date(dateInput.value).toDateString(); 


    // conditions to show or hide row based on filter 
    if(nameFilter && dateFilter) {
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








