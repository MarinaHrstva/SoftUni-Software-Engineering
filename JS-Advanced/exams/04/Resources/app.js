window.addEventListener('load', solve);

function solve() {

    let typeProductInputElement = document.getElementById('type-product');
    let descriptionProblemInputElement = document.getElementById('description');
    let clientNameInputElement = document.getElementById('client-name');
    let clientPhoneInputElement = document.getElementById('client-phone');

    let sendBtnElement = document.querySelector('form button');

    let recievedSectionElement = document.getElementById('received-orders');
    let completedOrdersSectionElement = document.getElementById('completed-orders');

    let clearBtnElement = document.querySelector('#completed-orders button.clear-btn')

     if (!descriptionProblemInputElement || !clientNameInputElement || !clientPhoneInputElement) {
        return;
    }
    if (typeProductInputElement.value != 'Phone' && typeProductInputElement.value != 'Computer') {
        return;
    }
    sendBtnElement.addEventListener('click', (e) => {
        e.preventDefault();
     
        let containerDiv = document.createElement('div');
        containerDiv.classList.add('container');

        let productTypeH2Element = document.createElement('h2');
        productTypeH2Element.textContent = 'Product type for repair: ' + typeProductInputElement.value;

        let clientInformationh3Element = document.createElement('h3');
        clientInformationh3Element.textContent = `Client information: ` + clientNameInputElement.value + ', ' + clientPhoneInputElement.value

        let descriptionH4Element = document.createElement('h4');
        descriptionH4Element.textContent = `Description of the problem: ` + descriptionProblemInputElement.value;

        let startBtnElement = document.createElement('button');
        startBtnElement.textContent = 'Start repair';
        startBtnElement.classList.add('start-btn');

        let finishBtnElement = document.createElement('button');
        finishBtnElement.textContent = 'Finish repair';
        finishBtnElement.classList.add('finish-btn');
        finishBtnElement.setAttribute('disabled', true);


        containerDiv.appendChild(productTypeH2Element);
        containerDiv.appendChild(clientInformationh3Element);
        containerDiv.appendChild(descriptionH4Element);
        containerDiv.appendChild(startBtnElement);
        containerDiv.appendChild(finishBtnElement);

        recievedSectionElement.appendChild(containerDiv);

        typeProductInputElement.value = '';
        descriptionProblemInputElement.value = '';
        clientNameInputElement.value = '';
        clientPhoneInputElement.value = '';

        startBtnElement.addEventListener('click', (e) => {
            e.target.setAttribute('disabled', true);
            finishBtnElement.removeAttribute('disabled')

        })

        finishBtnElement.addEventListener('click', (e) => {
            completedOrdersSectionElement.appendChild(containerDiv);
            finishBtnElement.remove();
            startBtnElement.remove();
        })

    })

    clearBtnElement.addEventListener('click', () => {
        let divs = Array.from(document.querySelectorAll('#completed-orders div'))
        for (const el of divs) {
            el.remove();
        }
    })

}