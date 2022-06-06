function attachEvents() {
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', displayWeather);

}

attachEvents();



async function displayWeather() {
    let searchedLocation = document.getElementById('location').value;
    searchedLocation = await getLocation(searchedLocation);
    const currentWeather = await getCurrentCondition(searchedLocation.code);
const upcomingWeather

    console.log(currentWeather);

}

async function getLocation(location) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations'
    const res = await fetch(url);
    const data = await res.json();

    return data.filter(l => l.name == location)[0];

}

async function getCurrentCondition(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/today/' + code;
    const res = await fetch(url);
    const data = await res.json();

    return data;
}

async function getUpcommingCondition(code) {
    const url = 'http://localhost:3030/jsonstore/forecaster/upcoming/' + code;
    const res = await fetch(url);
    const data = await res.json();

    return data;

}