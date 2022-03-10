function colorize() {
  let trElements = document.querySelectorAll("table tr:nth-child(even)");

  for (const element of trElements) {
    element.style.backgroundColor = "teal";
  }
}
