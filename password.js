const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(`Welcome to the Password Validator Tool!`);

reader.question("What is your password?\n" + "(Must be between 10-20 characters, contain at least one number, and one capital letter): ", function(input){
    tokens = input.split('');
    let numbers = /[0-9]/;
    let caps = /[A-Z]/;

    //password must be between 10-20 characters
    //password must contain at least one number
    //password must contain at least one capital letter

    if(tokens.length >= 10 && tokens.length <= 20 && numbers.test(input) && caps.test(input)){
        console.log(`This password is successful!`);
    } else if (tokens.length < 10 || tokens.length > 20 || !numbers.test(input) || !caps.test(input)) {
        console.log(`Password does not meet all requirements.`);
        console.log(`|  -----  |'''  |'''|  |'''  |'''  |'''  ----\n` + `|  |   |  |...  |...|  |     |...  |...    |\n` + `                             |\n` + `                             ----`);
    }

    reader.close()
});

//no idea if the ASCII art is the right thought process but its supposed to say "incorrect"