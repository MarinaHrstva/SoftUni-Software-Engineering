function search() {
  let towns = Array.from(document.querySelectorAll("#towns li"));
  let searchText = document.getElementById("searchText").value;
  let resultPlace = document.getElementById("result");
  let counter = 0;

  for (const town of towns) {
    if (town.textContent.includes(searchText)) {
      town.style.fontWeight = "bold";
      town.style.textDecoration = "underline";
      counter++;
    }
  }

  resultPlace.textContent=`${counter} matches found`

}