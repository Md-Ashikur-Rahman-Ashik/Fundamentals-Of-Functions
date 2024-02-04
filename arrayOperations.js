function sumOfNumbers(numbers){
    let sum = 0;
    for(let number of numbers){
        // console.log(number);
        sum = number + sum;
        // number++;
    }
    return sum;
}

const nums = [54, 62, 12, 6];
// const sum = sumOfNumbers(nums);
// console.log("The sum of the numbers is:", sum);

function evenOnly(numbers){
    const evens = [];
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);
        }
    }
    return evens;
}

// const numbers = [5, 8, 91, 24, 6];
// const evens = evenOnly(numbers);
// console.log(evens);

function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        // console.log(number);
        if(number % 2 === 0){
            // console.log(number);
            sum = sum + number;
        }
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5];
const sum = sumOfEvenNumbers(numbers);
// console.log("The sum of even numbers is:", sum);

function getMenu() {
    console.log("Burger, Pizza, Pasta");
   }
getMenu();   