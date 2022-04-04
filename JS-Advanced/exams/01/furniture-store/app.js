window.addEventListener('load', solve);

function solve() {
    let addBtnElement = document.getElementById('add');
    let modelInputElement = document.getElementById('model');
    let yearInputElement = document.getElementById('year');
    let descriptionInputElement = document.getElementById('description');
    let priceInputElement = document.getElementById('price');


    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        if (modelInputElement.value == '' || yearInputElement.value == '') {
            return;
        }

        if (Number(yearInputElement.value) < 0 || Number(priceInputElement.value) < 0) {
            return;
        }

        if (!(Number(yearInputElement.value)) || !(Number(priceInputElement.value)) || !modelInputElement.value || !yearInputElement.value) {
            return;
        }

        let infoTrElement = document.createElement('tr');
        infoTrElement.classList.add('info');

        let typeTdElement = document.createElement('td');
        typeTdElement.textContent = modelInputElement.value;

        let priceTdElement = document.createElement('td');
        priceTdElement.textContent = Number(priceInputElement.value).toFixed(2)

        let btnTdElement = document.createElement('td')
        let moreInfoBtnElement = document.createElement('button');
        moreInfoBtnElement.textContent = 'More Info';
        moreInfoBtnElement.classList.add('moreBtn');

        let buyItBtnElement = document.createElement('button');
        buyItBtnElement.textContent = 'Buy it';
        buyItBtnElement.classList.add('buyBtn');

        btnTdElement.appendChild(moreInfoBtnElement);
        btnTdElement.appendChild(buyItBtnElement);

        infoTrElement.appendChild(typeTdElement);
        infoTrElement.appendChild(priceTdElement);
        infoTrElement.appendChild(btnTdElement);

        document.getElementById('furniture-list').appendChild(infoTrElement)


        let hideTrElement = document.createElement('tr');
        hideTrElement.classList.add('hide');

        let yearTdElement = document.createElement('td');
        yearTdElement.textContent = 'Year:' + yearInputElement.value;

        let descrTdElement = document.createElement('td');
        descrTdElement.textContent = 'Description:' + descriptionInputElement.value;
        descrTdElement.setAttribute('colspan', '3');

        hideTrElement.appendChild(yearTdElement);
        hideTrElement.appendChild(descrTdElement);

        document.getElementById('furniture-list').appendChild(hideTrElement)

        modelInputElement.value = '';
        yearInputElement.value = '';
        descriptionInputElement.value = '';
        priceInputElement.value = '';


        moreInfoBtnElement.addEventListener('click', (e) => {
            if (e.target.textContent == 'More Info') {
                hideTrElement.style.display = 'contents'
                e.target.textContent = 'Less Info'
            } else {
                hideTrElement.style.display = 'none'
                e.target.textContent = 'More Info'

            }

        })

        buyItBtnElement.addEventListener('click', () => {
            let totalElement = document.querySelector('.total-price')
            let total = Number(totalElement.textContent) + Number(priceTdElement.textContent)
            totalElement.textContent = total.toFixed(2)
            hideTrElement.remove();
            infoTrElement.remove();
        })
    })
}
