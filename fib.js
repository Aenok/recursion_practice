function fibs(num) {
    let retVal = [0,1];
    if(num <= 0 || typeof(num) != "number") {
        return;
    } else if (num == 1) {
        return [retVal[0]];
    } else if (num == 2) {
        return retVal;
    } else {
        for(let i = 0; i < num-2; i++) {
            retVal.push(retVal[i] + retVal[i+1])
        }
        return retVal;
    }
}

function fibsRec(n) {
    function fibonacci(num) {
    
        //base case 
        if(num < 3) {
            return num-1;
        } else {
            return (fibonacci(num-1) + fibonacci(num-2));
        }
    }
    let retVal = [];
    for(let i = 1;  i < n+1; i++) {
        retVal.push(fibonacci(i));
    }
    return retVal;

}


const args = process.argv.slice(2); // Get the arguments passed in

if (args.length > 0) {
    const number = parseInt(args[0], 10);
    // console.log(`fibs(${number}): `, fibs(number)); // Call the function with the argument passed
    console.log(fibsRec(number));
} else {
    console.log('Please provide a number');
}

