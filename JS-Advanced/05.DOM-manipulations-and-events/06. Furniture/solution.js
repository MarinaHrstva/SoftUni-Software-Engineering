function solve() {

  let [input, output] = Array.from(document.querySelectorAll('textarea'));
  let [generateBth, buyBth] = Array.from(document.querySelectorAll('button'));
  let table = document.querySelector('table.table tbody');
  generateBth.addEventListener('click', generate);
  buyBth.addEventListener('click', buy);

  function generate(e) {
    const data = JSON.parse(input.value);

    for (const item of data) {
      let row = document.createElement('tr')
      table.appendChild(row);

      let imgCell = document.createElement('td')
      let img = document.createElement('img');
      img.src = item.img;
      imgCell.appendChild(img);
      row.appendChild(imgCell);

      let nameCell = document.createElement('td');
      let nameP = document.createElement('p');
      nameP.textContent = item.name;
      nameCell.appendChild(nameP);
      row.appendChild(nameCell);

      let priceCell = document.createElement('td')
      let priceP = document.createElement('p');
      priceP.textContent = item.price;
      priceCell.appendChild(priceP);
      row.appendChild(priceCell);

      let decFactorCell = document.createElement('td');
      let decFactorP = document.createElement('p');
      decFactorP.textContent = item.decFactor;
      decFactorCell.appendChild(decFactorP);
      row.appendChild(decFactorCell);

      let checkCell = document.createElement('td')
      let checkElement = document.createElement('input');
      checkElement.type = 'checkbox';
      checkCell.appendChild(checkElement)
      row.appendChild(checkCell);

    }
  }

  function buy(e) {

    const furniture = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
      .map(i => i.parentElement.parentElement)
      .map(r => ({
        name: r.children[1].textContent,
        price: Number(r.children[2].textContent),
        decF: Number(r.children[3].textContent)
      }))

    const names = [];
    let total = 0;
    let avgDecFactor = 0;

    for (const items of furniture) {
      names.push(items.name)
      total += items.price
      avgDecFactor += items.decF;
    }

    avgDecFactor /= furniture.length;

    let result=`Bought furniture: ${names.join(', ')}
Total price: ${total.toFixed(2)}
Average decoration factor: ${avgDecFactor}`

    output.value=result;
  }

}