function vacation(n, type, day) {

    //                  Friday	Saturday	Sunday
    //         Students	8.45	9.80    	10.46
    //         Business	10.90	15.60	      16
    //          Regular	15	    20	         22.50

    let price = 0;

    switch (type) {
        case 'Students':
            if (day === 'Friday') {
                price = n * 8.45;
            } else if (day === 'Saturday') {
                price = n * 9.80;
            } else if (day === 'Sunday') {
                price = n * 10.46;
            }

            if (n >= 30) {
                price *= 0.85;
            }

            break;
        case 'Business':
            if (n >= 100) {
                n -= 10;
            }
            if (day === 'Friday') {
                price = n * 10.90;
            } else if (day === 'Saturday') {
                price = n * 15.6;
            } else if (day === 'Sunday') {
                price = n * 16;
            }

            break;
        case 'Regular':
            // ·	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5%
            if (day === 'Friday') {
                price = n * 15;
            } else if (day === 'Saturday') {
                price = n * 20;
            } else if (day === 'Sunday') {
                price = n * 22.5;
            }
            if (n >= 10 && n <= 20) {
                price *= 0.95;
            }
            break;
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}


vacation(30, "Students", "Sunday")