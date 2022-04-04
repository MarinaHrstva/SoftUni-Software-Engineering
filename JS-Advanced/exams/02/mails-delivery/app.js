function solve() {
    let recipientNameInputElement = document.getElementById('recipientName');
    let titleInputElement = document.getElementById('title');
    let messageInputElement = document.getElementById('message');
    let addBtnElement = document.getElementById('add');
    let resetBtnElement = document.getElementById('reset');

    let listOfMailsUlElement = document.getElementById('list');

    addBtnElement.addEventListener('click', (e) => {
        e.preventDefault();
        if (!recipientNameInputElement.value || !titleInputElement.value || !messageInputElement.value) {
            return
        }

        let liElement = document.createElement('li');
        let heading4TitleElement = document.createElement('h4');
        heading4TitleElement.textContent = 'Title: ' + titleInputElement.value;
        liElement.appendChild(heading4TitleElement);

        let heading4RecipientNameElement = document.createElement('h4');
        heading4RecipientNameElement.textContent = 'Recipient Name: ' + recipientNameInputElement.value;
        liElement.appendChild(heading4RecipientNameElement);

        let spanMessegeElement = document.createElement('span');
        spanMessegeElement.textContent = messageInputElement.value;
        liElement.appendChild(spanMessegeElement);

        let listActionDivElement = document.createElement('div');
        listActionDivElement.setAttribute('id', 'list-action');
        let sendBtnElement = document.createElement('button');
        sendBtnElement.textContent = 'Send';
        sendBtnElement.setAttribute('id', 'send')
        let deleteBtnElement = document.createElement('button');
        deleteBtnElement.textContent = 'Delete';
        deleteBtnElement.setAttribute('id', 'delete')

        listActionDivElement.appendChild(sendBtnElement);
        listActionDivElement.appendChild(deleteBtnElement);

        liElement.appendChild(listActionDivElement);
        listOfMailsUlElement.appendChild(liElement)

        recipientNameInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';
        //  ------------------------------------------------------------------   <!-- <li>
        //    ---------------------------------------------------- <span>To: John@abv.bg</span>
        //    ------------------------------------------- <span>Title: For Work</span>
        //     <div class="btn">
        //         <button type="submit" class="delete">Delete</button>
        //     </div>
        // </li> -->
        sendBtnElement.addEventListener('click', (e) => {
            let sentListUlEleement = document.querySelector('ul.sent-list')
            console.log(sentListUlEleement);
            let newLiElement = document.createElement('li');
            sentListUlEleement.appendChild(newLiElement)

            let newSpanElement = document.createElement('span');
            newSpanElement.textContent = 'To: ' + heading4RecipientNameElement.textContent.slice(15)
            newLiElement.appendChild(newSpanElement)

            let newSpanTitleElement = document.createElement('span');
            newSpanTitleElement.textContent = 'Title: ' + heading4TitleElement.textContent.slice(7)
            newLiElement.appendChild(newSpanTitleElement)

            let btnDivElement = document.createElement('div');
            btnDivElement.classList.add('btn')
            let newDelBtnElement = document.createElement('button');
            newDelBtnElement.textContent='Delete';
            newDelBtnElement.classList.add('delete')

            btnDivElement.appendChild(newDelBtnElement)
            newLiElement.appendChild(btnDivElement);

            liElement.remove()

            newDelBtnElement.addEventListener('click',()=>{
                let delDivElement=document.querySelector('ul.delete-list');
                delDivElement.appendChild(newLiElement)
                btnDivElement.remove()
            })

        })


    })



    resetBtnElement.addEventListener('click', (e) => {
        e.preventDefault();
        recipientNameInputElement.value = '';
        titleInputElement.value = '';
        messageInputElement.value = '';

    })


}
solve()