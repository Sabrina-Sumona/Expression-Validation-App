var option, re, str;
option = prompt(`Which expression do you want to validate?
a. Email
b. Phone number
c. Post Code`);
switch (option) {
    case "a":
        str = prompt(`Enter the email:`);
        re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
        reTest(re, str);
        break;
    case "b":
        str = prompt(`Enter the phone number:`);
        re = /^(\+)?(88)?01[0-9]{9}$/;
        reTest(re, str);
        break;
    case "c":
        str = prompt(`Enter the post code:`);
        re = /^[0-9]{4}$/;
        reTest(re, str);
        break;
    default:
        alert(`Invalid option`);
}


function reTest(re, str) {
    if (re.test(str)) {
        alert(`'${str}' is valid`);
    }
    else {
        alert(`'${str}' is not valid`);
    }
}