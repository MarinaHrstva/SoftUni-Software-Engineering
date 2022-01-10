function login(arr) {

    //    Until you receive the correct password print on the console "".

    //     However on the fourth try if the password is still not correct print "User {username} blocked!" and end the program.

    let user = arr[0];
    let password = '';
    let blockedCounter = 0

    for (let i = user.length - 1; i >= 0; i--) {
        password += user[i]
    }

    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];

        if (element === password) {
            console.log(`User ${user} logged in.`);
        } else {
            blockedCounter += 1;
            if (blockedCounter === 4) {
                console.log(`User ${user} blocked!`);
                break;
            } else {
                console.log(`Incorrect password. Try again.`);
            }

        }

    }




}

login(['Acer', 'login', 'go', 'let me in', 'recA'])