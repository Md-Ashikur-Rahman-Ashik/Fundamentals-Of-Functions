function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

// console.log(isEven(5));
// console.log(isEven(110));

function isOdd(number){
    if(number % 2 === 1){
        return true;
    }
    return false;
}

// console.log(isOdd(5));
// console.log(isOdd(110));

function evenString(str){
    console.log("The given string is:", str);
    const size = str.length;
    console.log("The length of the given string is:", size);
    // Checking even and odd
    if(size % 2 === 0){
        console.log("Is this a even sized string?");
        return true;
    }
    else{
        console.log("Is this an even sized string?");
        return false;
    }
}

// evenString("Dhaka");
// console.log(evenString("Dhaka"));

// function doubleOrTriple(number, doDouble){
//     if(doDouble = null || doDouble === 0){
//         const double = doDouble * 2;
//     }
//     else{
//         const double = doDouble * 3;
//     }
// }

function doubleOrTriple(number, doDouble){
    if(doDouble){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

console.log("Our result is:", doubleOrTriple(5));