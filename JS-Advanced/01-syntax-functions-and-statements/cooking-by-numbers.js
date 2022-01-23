function cookingByNumbers(n, arg1, arg2, arg3, arg4, arg5) {

    let commands = [...arguments];
    let num = Number(commands.shift())
    for (const command of commands) {
        switch (command) {
            case 'chop': num /= 2;
                console.log(num); break;
            case 'dice': num = Math.sqrt(num);
                console.log(num); break;
            case 'spice': num++;
                console.log(num); break;
            case 'bake': num *= 3;
                console.log(num); break;
            case 'fillet': num *= 0.8;
                console.log(num); break;
        }

    }

}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet')