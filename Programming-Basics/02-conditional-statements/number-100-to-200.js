function num100To200(numInput){

    let number = Number(numInput);

    if (number < 100) {
        console.log("Less than 100");
    } else if (number <= 200) {
        console.log("Between 100 and 200");
    } else {
        console.log("Greater than 200");
    }

}



num100To200("120")