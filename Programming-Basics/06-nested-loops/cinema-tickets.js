function cinemaTickets(input) {
    let index = 0;
    let command = input[index++];
    let studentCount = 0;
    let standardCount = 0;
    let kidCount = 0;

    while (command !== "Finish") {
        let movie = command;
        let capacity = Number(input[index++]);
        let ticketCounter = 0;

        while (ticketCounter < capacity) {

            let tempTickets = input[index++];
            if (tempTickets === "End") {
                break;
            }
            ticketCounter++
            if (tempTickets === "standard") {
                standardCount++
            } else if (tempTickets === "student") {
                studentCount++
            } else if (tempTickets === "kid") {
                kidCount++
            }

        }
        command = input[index++];
        console.log(`${movie} - ${((ticketCounter / capacity) * 100).toFixed(2)}% full.`)
    }
    let totalTickets = studentCount + standardCount + kidCount
    console.log(`Total tickets: ${totalTickets}`)
    console.log(`${(studentCount / totalTickets * 100).toFixed(2)}% student tickets.`)
    console.log(`${(standardCount / totalTickets * 100).toFixed(2)}% standard tickets.`)
    console.log(`${(kidCount / totalTickets * 100).toFixed(2)}% kids tickets.`)

}
cinemaTickets(["Taxi",
    "10",
    "standard",
    "kid",
    "student",
    "student",
    "standard",
    "standard",
    "End",
    "Scary Movie",
    "6",
    "student",
    "student",
    "student",
    "student",
    "student",
    "student",
    "Finish"])
