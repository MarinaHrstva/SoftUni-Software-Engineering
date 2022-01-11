function passwordValidator(pass) {

    function passLength(pass) {   // The length should be 6 - 10 characters (inclusive)
        if (pass.length < 6 || pass.length > 10) {
            return 'Password must be between 6 and 10 characters' + '\n';
        } else {
            return '';
        }

    }


    function consistChars(pass) {       // It should consists only of letters and digits
        let result=''
        for (let i = 0; i < pass.length; i++) {
            let charCode = pass[i].charCodeAt();
            if (charCode < 48 || (charCode > 58 && charCode < 65) || (charCode > 90 && charCode < 97) || charCode > 122) {
                result+= 'Password must consist only of letters and digits' + '\n';
                break;
            } 
        }

        return result

    }

    function atLeast2Digits(pass) {        // Password must have at least 2 digits
        let digitCount = 0;

        for (let i = 0; i < pass.length; i++) {
            let charCode = pass[i].charCodeAt();

            if (charCode >= 47 && charCode <= 57) {
                digitCount++
            }

        }

        if (digitCount < 2) {
            return 'Password must have at least 2 digits';
        } else {
            return ''
        }

    }

    let output = passLength(pass) + consistChars(pass) + atLeast2Digits(pass);

    return (output ? output : 'Password is valid');

}

console.log(passwordValidator('Pa$s$s'));  //Password must consist only of letters and digits
                                          //Password must have at least 2 digits
