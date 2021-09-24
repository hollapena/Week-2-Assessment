const { read } = require('fs');

console.log('Welcome to the Password Validator Tool!');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
})

readline.question('What password would you like to validate?', password => {
    String(password);
    if(password.length >= 10){
        console.log('Congratulations! Your password is Valid!');
        readline.close();
    } else {
        console.log('Womp Womp your password failed, try again!');
        readline.question('What password would you like to validate?', password => {
            String(password);
            if(password.length >= 10){
                console.log('Congratulations! Your password is Valid!');
                readline.close();
            } else {
                console.log('Womp Womp your password failed again, Game OVER!');
                readline.close();
    }}
)}})

