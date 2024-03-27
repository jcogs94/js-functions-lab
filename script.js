/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));

/*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThree = (x, y, z) => {
    let largest = x;
    if (y > largest)
        largest = y;
    if (z > largest)
        largest = z;
    return largest;
}

console.log('Exercise 2 Result:', maxOfThree(3, 1, 2));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

const isCharAVowel = (x) => {
    x = x.toLowerCase();
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u')
        return true;
    else return false;
    
    // // >> Added validation for practice <<
    // x = x.toLowerCase();
    // if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
    //     if (x.toLowerCase() === 'a' || 'e' || 'i' || 'o' || 'u')
    //         return true;
    //     else if (x.toLowerCase() === 'y')
    //         return "only sometimes";
    //     else return false;
    // }
    // else return "Invalid input";
}

console.log('Exercise 3 Result:', isCharAVowel('u'));

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

const sumArray = (x) => {
    // validation practice
    // console.log(typeof x);
    // console.log(x.instanceof Array);
    
    let result = x[0];
    for (let num = 1; num < x.length; num++)
        result += x[num];
    return result;
}

console.log('Exercise 4 Result:', sumArray([5, 2, 3, 15]) );

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

const multiplyArray = (x) => {
    // validation practice
    // console.log(typeof x);
    // console.log(x.instanceof Array);
    
    let result = x[0];
    for (let num = 1; num < x.length; num++)
        result *= x[num];
    return result;
}

console.log('Exercise 5 Result:', multiplyArray([3, 5, 10]));

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

const reverseString = (x) => {
    let result = '';
    for (let i = x.length - 1; i >= 0; i--) {
        result += x[i];
    }
    return result;
}

console.log('Exercise 6 Result:', reverseString('hello world'));

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/

const longestStringInArray = (x) => {
    let result = x[0];
    for (let i = 1; i < x.length; i++) {
        if (x[i].length > result.length)
            result = x[i];
    }
    return result;
}

console.log('Exercise 7 Result:', longestStringInArray(['hello', 'problem', 'how', 'are', 'jumanjiiii']));

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

const stringsLongerThan = (inputArray, num) => {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > num)
            result.push(inputArray[i]);
    }
    return result;
}

console.log('Exercise 8 Result:', stringsLongerThan(['testing', 'this', 'function', 'for', 'now'], 3));

/*
Exercise 9: numArgs

Challenge yourself with numArgs. This function should return the count of arguments passed to it when called.

Complete Exercise 9 in the space below:
*/



console.log('Exercise 9 Result:', );
