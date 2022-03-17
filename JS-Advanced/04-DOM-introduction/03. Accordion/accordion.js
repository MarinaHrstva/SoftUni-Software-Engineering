function toggle() {
  let buttonContent = document.getElementsByClassName("button")[0].textContent;
  let text = document.getElementById("extra");
  if (buttonContent === "More") {
    text.style.display = "block";
    document.getElementsByClassName("button")[0].textContent = "Less";
  } else {
    text.style.display = "none";
    document.getElementsByClassName("button")[0].textContent = "More";
  }
}
