function action(event) {
  hash = document.location.hash;
  categoryForm = document.getElementById("category");
  tagForm = document.getElementById("tag");

  if (hash == "#category") {
    categoryForm.classList.remove("d-none");
    tagForm.classList.add("d-none");
  } else if (hash == "#tag") {
    categoryForm.classList.add("d-none");
    tagForm.classList.remove("d-none");
  } else {
    categoryForm.classList.remove("d-none");
    tagForm.classList.remove("d-none");
  }
}

window.addEventListener("hashchange", action);
window.addEventListener("load", action);