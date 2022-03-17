function deleteByEmail() {
    let emailInputElement = document.querySelector('input[name="email"]');
    let emailsTdElements = document.querySelectorAll("tr td:nth-of-type(2)");
    let resultDivElement = document.getElementById("result");

    let emailElements = Array.from(emailsTdElements);
    let targetElement = emailElements.find(
        (x) => x.textContent == emailInputElement.value
    );

    if (targetElement) {
        targetElement.parentNode.remove();
        resultDivElement.textContent = "Deleted.";
    } else {
        resultDivElement.textContent = "Not found.";
    }
}
