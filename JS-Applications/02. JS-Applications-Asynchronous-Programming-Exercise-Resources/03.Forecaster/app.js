function attachEvents() {
    
}

attachEvents();

async function getLocation(location) {
    const url = 'http://localhost:3030/jsonstore/forecaster/locations'
    const res = await fetch(url);
    const data = await res.json();

    return data.filter(l=>l.name==location);

}