let search = document.getElementById("search");
let results = document.getElementById("results");
let btn = document.getElementById("btn");
let item = document.createElement("li");

search.addEventListener("keyup", findEmission);
btn.addEventListener("click", clearAll);

async function findEmission(ev) {
  results.innerHTML = "";

  let searchTerm = ev.target.value.toLowerCase();

  const response = await fetch("jsonData.json");
  const dataJ = await response.json();
  dataJ.forEach(function (emission) {
    if (
      emission.title.toLowerCase().indexOf(searchTerm) > -1 ||
      emission.directive.toLowerCase().indexOf(searchTerm) > -1
    ) {
      item.innerHTML = emission.title;

      if (searchTerm != "") {
        results.appendChild(item);
      } else {
        results.innerHTML = "";
      }
    }
  });
}
function clearAll(ev) {
  search.value = "";
  results.innerHTML = "";
}
