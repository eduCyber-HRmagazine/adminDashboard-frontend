const colors = [
  "badge-danger",
  "badge-dark",
  "badge-success",
  "badge-primary",
  "badge-warning",
  "badge-info"
];

document.querySelectorAll(".tag").forEach(tag => {
  let i = Math.round(Math.random() * 5);
  console.log(i)
  console.log(colors)
  tag.className = colors[i] + ' p-2 me-2 my-1 badge fw-bold';
  tag.innerHTML = '#' + tag.innerHTML
});
