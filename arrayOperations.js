function sumOfNumbers(numbers){
    let sum = 0;
    for(let number of numbers){
        console.log(number);
        sum = number + sum;
        // number++;
    }
    return sum;
}

const nums = [54, 62, 12, 6];
const sum = sumOfNumbers(nums);
console.log("The sum of the numbers is:", sum);