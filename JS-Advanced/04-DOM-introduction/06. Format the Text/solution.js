function solve() {
  let divResult = document.getElementById("output");
  let text = document.getElementById("input").value;
  text = text.split(". ").filter((s) => s != "");

  while (text.length > 0) {
    let pText = text.splice(0, 3).join(". ");
    let p = document.createElement("p");
    p.textContent = pText;
    divResult.appendChild(p);
  }
}

// hi i am maria. i am 30 years old. ighjklcvbn fghjxcvb. yousdfghj sdfghj dfgh. tfghjcfghghj. fgghghj dfghghgh dfgghfgh.
