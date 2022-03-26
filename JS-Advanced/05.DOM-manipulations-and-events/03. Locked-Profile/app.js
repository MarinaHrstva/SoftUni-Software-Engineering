function lockedProfile() {
    let buttonsElements = Array.from(document.querySelectorAll('.profile button')).forEach(b => b.addEventListener('click', onToggle));

    function onToggle(e) {
        const profile = e.target.parentElement
        let hiddenFieldsElement = profile.querySelector('div');
        let isActive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isActive) {
            if (e.target.textContent == 'Hide it') {
                hiddenFieldsElement.style.display = 'none';
                e.target.textContent = 'Show more';
            } else {
                hiddenFieldsElement.style.display = 'block';
                e.target.textContent = 'Hide it';
            }
        }

    }
}