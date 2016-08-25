// ALL FUNCTION NAMES ARE CASE SENSITIVE. READ THE DIRECTIONS CAREFULLY.
// BE VERY MINDFUL OF YOUR SYNTAX. A SINGLE ERROR WILL CAUSE ALL TESTS TO FAIL.

// 1. Create a function called giveMeFive. The function
// should take no arguments and return the number 5


/* -------------------------------------------------- */

function giveMeFive() {
    return 5;

}


// 2. Create a function called addTogether that takes two arguments.
// The function should return the sum of those two arguments


/* -------------------------------------------------- */

function addTogether(a, b) {
    return a + b;
}


// 3. Create a function called isOdd that takes a number as an argument.
// if the number is odd, the function should return true. If the number is 
// even the function should return false. Hint: use the % operator. 


/* -------------------------------------------------- */
function isOdd(n) {
    return n % 2 != 0;
}

// 4. Create a function called isEven that takes a number as an argument.
// if the number is even, the function should return true. If the number is 
// odd the function should return false. Hint: use the % operator. 


/* -------------------------------------------------- */
function isEven(n) {
    return !isOdd(n);

}

// 5. Create a function called max that takes two numbers as arguments.
// max should return the larger of the two numbers. If the numbers are 
// equal one of the numbers should be returned.


/* -------------------------------------------------- */

//This was the way I did it without my husband's help.
//function max(g,l){
//    return Math.max(g,l);
//
//}
//This was after he looked it over and said I was sorta cheating using a math library, so I tried it this way
//function max(a,b){
//    if (a >= b) {
//        return a;
//    } else {
//        return b;    
//    }
//}

//This was after I figured the above one out and he showed me how to make it even more streamlined
function max(a, b) {
    if (a >= b) {
        return a;
    }

    return b;
}

// 6. Create a function called min that takes two numbers as arguments.
// min should return the smaller of the two numbers. If the numbers are 
// equal one of the numbers should be returned.


/* -------------------------------------------------- */

function min(a, b) {
    if (a <= b) {
        return a;

    }

    return b;
}

// 7. Create a function called clamp that takes three arguments.
// The first value should be a number, the second should be a minimum value,
// and the third should be a maximum value. If the first value is less than the minimum,
// clamp() should return the minimum value. If the first value is greater than the maximum 
// clamp() should return the maximum value. If the value is greater than the mimimum, but less
// than the maxium, clamp() should return the value


/* -------------------------------------------------- */
function clamp(a, min, max) {
    if (a < min) {
        return min;

    } else if (a > max) {
        return max;
    } else if (a > min && a < max) {
        return a;

    }
}



// 8. Create a function called average that takes an array of numbers as its argument.
// This function should return the average of the numbers in that array. Be sure to account
// for empty elements in the array. Hint: you can use the typeof operator to see if a value
// is equal to "number"


/* -------------------------------------------------- */

function average(numbers) {
    var sum = 0;
    var numCount = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (typeof (numbers[i]) == 'number') {
            numCount++;
            sum = sum + numbers[i];
        }
    }

    return sum / numCount;

}

// 9. Create a function called disagree that takes a boolean as an argument. 
// This function should return the opposite value(true if the argument is false, 
// false if the argument is true). Hint: use the ! operator.


/* -------------------------------------------------- */
//This is the answer I came up with, it worked...
//function disagree(a){
//    if (a == false){
//        return true;
//    } else if (a == true) {
//        return !true;
//    
//    }
//
//}

function disagree(a) {
    return !a;

}

// BONUS. Create a function called fizzBuzz that takes a number as an argument. 
// If the number is divisible by 3, return the string "fizz".
// If the number is divisible by 5, return the string "buzz".
// If the number is divisible by both 3 AND 5, return the string "fizzbuzz". 
// Hint: use the % operator and be careful of the order of your if statements

function fizzBuzz(a) {
    if (a % 3 == 0 && a % 5 == 0) {
        return 'fizzbuzz';

    }

    if (a % 3 == 0) {
        return 'fizz';
    }

    if (a % 5 == 0) {
        return 'buzz';

    }




}