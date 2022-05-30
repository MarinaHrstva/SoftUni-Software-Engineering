async function getInfo() {
    const stopId = document.getElementById('stopId').value;
    let busList = document.getElementById('buses')
    const stopName = document.getElementById('stopName');

    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`

    try {
        busList.textContent = '';
        stopName.textContent = 'Loading...'

        const res = await fetch(url);
        if (res.status != 200) {
            throw new Error('Stop ID not found')
        }

        const data = await res.json();

        stopName.textContent = data.name;
        let buses = Object.entries(data.buses).forEach(b => {
            let liElement = document.createElement('li')
            liElement.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`
            busList.appendChild(liElement);
        })

    } catch (error) {
        alert(error.message);
    }

}