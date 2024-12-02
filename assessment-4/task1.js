const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

async function calculate() {
    let value1, value2, value3;
    
    await new Promise(resolve => {
        readline.question("Enter the number: ", input => {
            value1 = Number(input);
            resolve();
        });
    });
    
    value2 = 2 * Math.pow(value1, 2.0);
    value3 = 3 + value2 / 2 - 1;
    console.log(value3);
    readline.close();
}

calculate();

/*
If user enters	Value of variable value3 displayed
2  ------->>> 6;	
5 -------->>>27 
4.3	---->>>20.49
6------->>>38
	*/