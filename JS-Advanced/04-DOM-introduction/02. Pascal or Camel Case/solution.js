function solve() {
  let text = document.getElementById("text").value;
  let convention = document.getElementById("naming-convention").value;
  let result = "";

  if (convention === "Camel Case") {
    result += text[0].toLowerCase();
  } else if (convention === "Pascal Case") {
    result += text[0].toUpperCase();
  } else {
    result = "Error!";
  }
  
  if (result != "Error!") {
    for (let i = 1; i < text.length; i++) {
      if (text[i] === " ") {
        continue;
      } else if (text[i - 1] === " ") {
        result += text[i].toUpperCase();
      } else {
        result += text[i].toLowerCase();
      }
    }
  }

  document.getElementById("result").textContent = result;
}
