function addItem() {
    let inputElement = document.getElementById("newItemText");
    let itemsUlElement = document.getElementById("items");

    let liElement = document.createElement("li");
    let aDeleteElement = document.createElement("a");
    liElement.textContent = inputElement.value;
    aDeleteElement.href = "#";
    aDeleteElement.textContent = '[Delete]'
    aDeleteElement.addEventListener('click',(e)=>{
        e.currentTarget.parentNode.remove()
    })

    liElement.appendChild(aDeleteElement)
    itemsUlElement.appendChild(liElement)
}
