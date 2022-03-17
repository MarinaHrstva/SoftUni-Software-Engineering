function focused() {
    let inputElements = document.querySelectorAll('input');

    for (const el of inputElements) {
        let parentElement = el.parentNode;

        el.addEventListener('focus', () => {
            parentElement.className = 'focused'
        })

        el.addEventListener('blur', () => {
            parentElement.className = ''
        })
    }
}