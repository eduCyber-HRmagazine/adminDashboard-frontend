// filter for jobs table

const nameInput = document.getElementById('title');
const employerInput = document.getElementById('employer');
const categorySelect = document.getElementById('category');
const dataTable = document.getElementById('dataTable');
const showAllTable = document.getElementById('showAllTable');

// event listeners for input and change events
nameInput.addEventListener('input', filterTable);
employerInput.addEventListener('input', filterTable);
categorySelect.addEventListener('change', filterTable);
showAllTable.addEventListener('click', showAllData);

// filter function
function filterTable() {
  const rows = dataTable.querySelectorAll("tr");

  rows.forEach((row) => {
    const name = row.cells[0].textContent.toLowerCase();
    const employer= row.cells[1].textContent.toLowerCase();
    const category = row.cells[2].textContent;

    // filters by input values and checkboxes
    const nameFilter = name.includes(nameInput.value.toLowerCase());
    const employerFilter = employer.includes(employerInput.value.toLowerCase());
    const categoryFilter = category.includes(categorySelect.value);

    // conditions to show or hide row based on filter
    if (nameFilter && employerFilter && categoryFilter) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

// function to show all rows in the table
function showAllData() {
  const rows = dataTable.querySelectorAll("tr");

  rows.forEach((row) => {
    row.style.display = "";
  });
}
