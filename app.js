let search = document.getElementById("search");
let results = document.getElementById("results");
let btn = document.getElementById("btn");
let item = document.createElement("li");

search.addEventListener("keyup", findEmission);
btn.addEventListener("click", clearAll);

function findEmission(ev) {
  results.innerHTML = "";

  let searchTerm = ev.target.value.toLowerCase();

fetch("jsonData.json")
.then(res=>res.json())
.then(dataJ=>

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
  }));
}
function clearAll(ev) {
  search.value = "";
  results.innerHTML = "";
}
