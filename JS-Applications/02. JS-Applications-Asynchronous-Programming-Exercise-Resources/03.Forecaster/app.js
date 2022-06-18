function attachEvents() {
    const submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', displayWeather);

}

attachEvents();
const symbols = {
    Sunny: '\&#x2600',
    'Partly sunny': '&#x26C5',
    Overcast: '&#x2601',
    Rain: '&#x2614',
    Degrees: '&#176'

}

async function displayWeather() {
    let searchedLocation = document.getElementById('location').value;
    searchedLocation = await getLocation(searchedLocation);
    const currentWeather = await getCurrentCondition(searchedLocation.code);
    const upcomingWeather = await getUpcommingCondition(searchedLocation.code);
    const forecastElement = document.getElementById('forecast');
    forecastElement.style.display = 'block';

    const currentDivElement = document.getElementById('current');
    const forcastDivElement = document.createElement('div');
    forcastDivElement.classList.add('forcasts');
    currentDivElement.appendChild(forcastDivElement);

    const symbolSpanElement = document.createElement('span');
    symbolSpanElement.classList.add('symbol', 'condition');
    symbolSpanElement.innerHTML = `${symbols[currentWeather.forecast.condition]}`;
    forcastDivElement.appendChild(symbolSpanElement);

    const conditionElement = document.createElement('span');
    conditionElement.classList.add('condition');

    const first = document.createElement('span');
    first.classList.add('forecast-data');
    first.textContent = currentWeather.forecast.condition;

    const second = document.createElement('span');
    second.classList.add('forecast-data');
    second.textContent = currentWeather.forecast.high;

    const third = document.createElement('span');
    third.classList.add('forecast-data');
    third.textContent = currentWeather.forecast.low;

    forcastDivElement.appendChild(first);
    forcastDivElement.appendChild(second);
    forcastDivElement.appendChild(third);

    const upcomingDivElement = document.getElementById('upcoming');
    const forcastUpcomingDivElement = document.createElement('div');
    upcomingDivElement.appendChild(forcastUpcomingDivElement);
    forcastUpcomingDivElement.classList.add('forcast-info')

    
    const upcomingDays=upcomingWeather.forecast;
    upcomingDays.forEach(d=>{
       forcastUpcomingDivElement.appendChild(createSpans(d));
   })



}

function createSpans(day) {
    const upcomingSpanElement = document.createElement('span');
    upcomingSpanElement.classList.add('upcoming');

    const upcomingSpanSymbolElement = document.createElement('span');
    upcomingSpanSymbolElement.classList.add('symbol');
    upcomingSpanSymbolElement.innerHTML = `${symbols[day.condition]}`

    const upcomingDegreesSpanElement = document.createElement('span');
    upcomingDegreesSpanElement.classList.add('forecast-data');
    upcomingDegreesSpanElement.textContent = `${day.low}/${day.high}`;

    const upcomingConditioSpanElement = document.createElement('span');
    upcomingConditioSpanElement.classList.add('forecast-data');
    upcomingConditioSpanElement.textContent=day.condition;

    upcomingSpanElement.appendChild(upcomingSpanSymbolElement);
    upcomingSpanElement.appendChild(upcomingDegreesSpanElement);
    upcomingSpanElement.appendChild(upcomingConditioSpanElement);

    return upcomingSpanElement

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