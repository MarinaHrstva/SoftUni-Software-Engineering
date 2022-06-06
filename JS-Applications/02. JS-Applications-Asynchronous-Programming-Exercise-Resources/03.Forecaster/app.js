function attachEvents() {
    const submitBtn = document.getElementById('submit');
    const searchedLocation = document.getElementById('location').value;


    submitBtn.addEventListener('submit', () => {
        const currentLocation = await getLocation(searchedLocation);

    })

}

attachEvents();

async function getLocation(location) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations'
    const res = await fetch(url);
    const data = await res.json();

    return data.filter(l => l.name == location);

}


async function getCurrentCondition(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}