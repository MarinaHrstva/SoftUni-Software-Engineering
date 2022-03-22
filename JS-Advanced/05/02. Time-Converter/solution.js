function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    }

    function convert(value, unit) {
        const inDays = value / ratios[unit];

        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        }
    }

    const daysInputElement = document.getElementById('days');
    const hoursInputElement = document.getElementById('hours');
    const minutesInputElement = document.getElementById('minutes');
    const secondsInputElement = document.getElementById('seconds');

    document.querySelector('main').addEventListener('click', onConvert);


    function onConvert(e) {

        if (e.target.tagName == 'INPUT' && e.target.type == 'button') {
            const input = e.target.parentNode.querySelector('input[type="text"]');
            const time = convert(Number(input.value), input.id);

            daysInputElement.value = time.days;
            hoursInputElement.value = time.hours;
            minutesInputElement.value = time.minutes;
            secondsInputElement.value = time.seconds;
        }

    }


}