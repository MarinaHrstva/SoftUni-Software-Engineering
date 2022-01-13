function sumTable() {
    let rows = document.querySelectorAll('table tr td')
    let sum = 0;
    for (let i = 1; i < rows.length - 1; i += 2) {
        sum += Number(rows[i].textContent);
    }

    document.getElementById('sum').textContent = sum
}