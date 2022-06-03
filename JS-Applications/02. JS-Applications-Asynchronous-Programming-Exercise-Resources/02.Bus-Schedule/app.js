function solve() {

    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');
    let infoElement = document.querySelector('#info span');

    let stop = {
        next: 'depot'
    }

    async function depart() {
        const url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
        departBtn.disabled = true;
        const res = await fetch(url);
        stop = await res.json();

        infoElement.textContent = stop.name;
        arriveBtn.disabled = false;
    }

    async function arrive() {

        arriveBtn.disabled = true;
        infoElement.textContent = `Arriving at ${stop.name}`
        departBtn.disabled = false;

    }

    return {
        depart,
        arrive
    };
}

let result = solve();