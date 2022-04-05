function solve() {

    let firstNameInputElement = document.getElementById('fname');
    let lastNameInputElement = document.getElementById('lname');
    let emailInputElement = document.getElementById('email');
    let birthDateInputElement = document.getElementById('birth');
    let positionInputElement = document.getElementById('position');
    let salaryInputElement = document.getElementById('salary');
    let addWorkerBtnElement = document.getElementById('add-worker');
    let tbodyElement = document.getElementById('tbody');
    let budgetSpanElement = document.getElementById('sum')

    let budget = 0;


    addWorkerBtnElement.addEventListener('click', (e) => {
        e.preventDefault();

        if (!firstNameInputElement.value || !lastNameInputElement.value || !emailInputElement.value ||
            !birthDateInputElement.value || !positionInputElement.value || !salaryInputElement.value || Number(salaryInputElement.value) == isNaN) {
            return
        }

        let rowElement = document.createElement('tr');

        let fNameCellElement = document.createElement('td');
        fNameCellElement.textContent = firstNameInputElement.value;

        let lNameCellElement = document.createElement('td');
        lNameCellElement.textContent = lastNameInputElement.value;

        let emailCellElement = document.createElement('td');
        emailCellElement.textContent = emailInputElement.value;

        let birthDateCellElement = document.createElement('td');
        birthDateCellElement.textContent = birthDateInputElement.value;

        let positionCellElement = document.createElement('td');
        positionCellElement.textContent = positionInputElement.value;

        let salaryCellElement = document.createElement('td');
        salaryCellElement.textContent = salaryInputElement.value;
        budget += Number(salaryInputElement.value);

        let btnCellElement = document.createElement('td');
        let firedBtnElement = document.createElement('button');
        firedBtnElement.classList.add('fired');
        firedBtnElement.textContent = 'Fired';
        let editBtnElement = document.createElement('button');
        editBtnElement.classList.add('edit');
        editBtnElement.textContent = 'Edit';


        btnCellElement.appendChild(firedBtnElement);
        btnCellElement.appendChild(editBtnElement);

        rowElement.appendChild(fNameCellElement);
        rowElement.appendChild(lNameCellElement);
        rowElement.appendChild(emailCellElement);
        rowElement.appendChild(birthDateCellElement);
        rowElement.appendChild(positionCellElement);
        rowElement.appendChild(salaryCellElement);
        rowElement.appendChild(btnCellElement);


        tbodyElement.appendChild(rowElement);

        budgetSpanElement.textContent = budget.toFixed(2);

        firstNameInputElement.value = '';
        lastNameInputElement.value = '';
        emailInputElement.value = '';
        birthDateInputElement.value = '';
        firstNameInputElement.value = '';
        positionInputElement.value = '';
        salaryInputElement.value = '';

        editBtnElement.addEventListener('click', (e) => {
            firstNameInputElement.value = fNameCellElement.textContent;
            lastNameInputElement.value = lNameCellElement.textContent;
            emailInputElement.value = emailCellElement.textContent;
            birthDateInputElement.value = birthDateCellElement.textContent;
            positionInputElement.value = positionCellElement.textContent;
            salaryInputElement.value = salaryCellElement.textContent;
            budget -= Number(salaryCellElement.textContent);

            budgetSpanElement.textContent = budget.toFixed(2);
            e.target.parentNode.parentNode.remove()
        })

        firedBtnElement.addEventListener('click',(e)=>{
            budget -= Number(salaryCellElement.textContent);
            budgetSpanElement.textContent = budget.toFixed(2);
            e.target.parentNode.parentNode.remove()

        })

    })


}
solve()