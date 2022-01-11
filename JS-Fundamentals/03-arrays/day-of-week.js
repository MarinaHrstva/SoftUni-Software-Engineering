function daysOfWeek(n) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if (n >= 1 && n <= 7) {
        return days[n - 1]
    } else {
        return 'Invalid day!'
    }

}
daysOfWeek