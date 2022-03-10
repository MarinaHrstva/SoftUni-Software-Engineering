function extractText() {
  let items = document.querySelectorAll("#items > li");
  let textAreaElement = document.getElementById("result");
  let result = "";

  for (const line of items) {
    result += line.textContent + "\n";
  }

  textAreaElement.value = result;
}
