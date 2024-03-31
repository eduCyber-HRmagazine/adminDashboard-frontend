const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const categorySelect = document.getElementById("category");
const showAllBtn = document.getElementById("showAllBtn");
const table = document.querySelector(".table");
const rows = table.querySelectorAll("tr");

titleInput.addEventListener("input", filterTable);
dateInput.addEventListener("change", filterTable);
categorySelect.addEventListener("change", filterTable);
showAllBtn.addEventListener("click", showAllRows);

function filterTable() {
  rows.forEach((row) => {
    const cells = row.getElementsByTagName("td");
    if (cells.length > 0) {
      const title = cells[0].textContent.toUpperCase();
      const date = cells[3].textContent;
      const category = cells[2].textContent;
      const filterTitle = titleInput.value.toUpperCase();
      const filterDate = dateInput.value;
      const filterCategory = categorySelect.value;

      if (
        title.includes(filterTitle) &&
        (filterDate === "" || date === filterDate) &&
        (filterCategory === "" || category === filterCategory)
      ) {
        row.style.display = "";
      } else {
        row.style.display = "none";
      }
    }
  });
}

function showAllRows() {
  rows.forEach((row) => {
    row.style.display = "";
  });
}
