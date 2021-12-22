function cinemaTicket(arg1){
    let day=arg1;

    switch(day){
        case("Monday"):
        case("Tuesday"):
        case("Friday"):
        console.log(12);break;
        case("Wednesday"):
        case("Thursday"):
        console.log(14);break;
        case("Saturday"):
        case("Sunday"):
        console.log(16);break;
    }



}
cinemaTicket("Saturday")



// Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday
// 12	      12	14           	14     	12	      16	      16
