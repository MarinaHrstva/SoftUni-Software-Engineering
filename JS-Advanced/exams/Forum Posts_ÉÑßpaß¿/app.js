window.addEventListener("load", solve);

function solve() {
  let titleInputElement = document.getElementById('post-title');
  let categoryInputElement = document.getElementById('post-category');
  let contentInputElement = document.getElementById('post-content');

  let reviewListUlElement = document.getElementById('review-list')
  let publishedList = document.getElementById('published-list');

  let publishBtnElement = document.getElementById('publish-btn');
  let clearBtnElement = document.getElementById('clear-btn');

 

  publishBtnElement.addEventListener('click', (e) => {
    if (!titleInputElement.value || !categoryInputElement.value || !contentInputElement.value) {
      return;
    }
    e.preventDefault();

    let liElement = document.createElement('li')
    liElement.classList.add('rpost')

    let articleElement = document.createElement('article')
    let h4Element = document.createElement('h4')
    h4Element.textContent = titleInputElement.value;

    let firstPElement = document.createElement('p')
    firstPElement.textContent = 'Category: ' + categoryInputElement.value;

    let secondPElement = document.createElement('p')
    secondPElement.textContent = 'Content: ' + contentInputElement.value;

    let editBtnElement = document.createElement('button')
    editBtnElement.textContent = 'Edit'
    editBtnElement.classList.add('action-btn');
    editBtnElement.classList.add('edit');

    let approveBtnElement = document.createElement('button')
    approveBtnElement.textContent = 'Approve'
    approveBtnElement.classList.add('action-btn');
    approveBtnElement.classList.add('approve');

    articleElement.appendChild(h4Element);
    articleElement.appendChild(firstPElement);
    articleElement.appendChild(secondPElement);

    liElement.appendChild(articleElement);
    liElement.appendChild(editBtnElement);
    liElement.appendChild(approveBtnElement);

    reviewListUlElement.appendChild(liElement);

    titleInputElement.value = '';
    categoryInputElement.value = '';
    contentInputElement.value = '';


    editBtnElement.addEventListener('click', (e) => {
      titleInputElement.value = h4Element.textContent;
      categoryInputElement.value = firstPElement.textContent.slice(10)
      contentInputElement.value = secondPElement.textContent.slice(9)

      liElement.remove()
    })

    approveBtnElement.addEventListener('click', (e) => {
      publishedList.appendChild(liElement);
      editBtnElement.remove();
      approveBtnElement.remove();
    })

  })

  clearBtnElement.addEventListener('click', (e) => {
    let list =Array.from( document.querySelectorAll('#published-list li'))
    for (const li of list) {
      li.remove();
    }
  })
}
