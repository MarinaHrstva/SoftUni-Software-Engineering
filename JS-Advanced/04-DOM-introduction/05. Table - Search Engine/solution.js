function solve() {
  document.querySelector("#searchBtn").addEventListener("click", onClick);

  function onClick() {
    let surchedText = document.getElementById("searchField").value;
    let rows = document.querySelectorAll(".container tbody tr");

    for (const row of rows) {
      if (row.textContent.includes(surchedText)) {
        row.className = "select";
      }
    }
    document.getElementById("searchField").value = "";
  }
}
