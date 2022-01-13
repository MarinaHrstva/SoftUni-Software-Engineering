function extractText() {
    let items = document.querySelectorAll('#items li')
    let arr = Array.from(items);
    let result = '';

    for (const el of arr) {
        result += el.textContent + '\n'
    }

    document.getElementById('result').textContent = result
}