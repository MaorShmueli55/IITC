"use strict"

//1
function pattern(str , num){
     for(let i = 0; i < num; i++){
        console.log(str.repeat(i));
     }
}
// pattern("*" , 9);

//2
function starPattern(str , num){
    for(let i = 1; i <= num; i++){
    let stars = "";
    for(let j = 1; j <= i; j++){
        stars += str;
    }
    console.log(stars);
    }
}
starPattern("j" , 6)



function starPattern_1(str , num){
    let stars = "";
    for(let i = 1; i <= num; i++){
    for(let j = 1; j <= i; j++){
        stars += str;
    }
    stars += "\n"
}
    console.log(stars);
}
starPattern_1("j" , 6);


//3
function makeMultTable(){      // למספר הרוחב j  למספר האורך  i =  - לוח הכפל
    for(let i = 1; i<=10; i++){
        let row = "";
        for(let j = 1; j<=10; j++){
            row += j * i + " ";
        }
        console.log(row);
    }
}
makeMultTable();


//4
function searchInArray(array_2D , target){
    let row;
    let col;
    for(let i =0 ; i < array_2D.length; i++){
        for(let j = 0; j < array_2D[i][j]; j++){
            if(array_2D[i][j] === target){
                row = i;
                col = j;
                break;
            }
        }
        if(row !== undefined){
            break;
        }
    }
    console.log(row , col);
}

searchInArray([[1 ,2 ,3] , [4 , 5 , 6] , [7 , 8 , 9]] , 5);


//5
// // Exercise 4: Count Vowels and Consonants
// Objective: Write a program to count the number of vowels and consonants in a given string.
// Instructions:
// Take a string as input.
// Use a loop to iterate over each character in the string.
// Use another loop (or a set of conditions) to check if the character is a vowel or consonant.
// Keep a count of vowels and consonants.
// for simplicity,string should contain only letters.

function CountVowelsAndConsonants(str){
    let countVowels = 0;
    for(let i = 0; i < str.length; i ++){
        if(str[i] === "a" || str[i] === "u" || str[i] === "o" || str[i] === "i" || str[i] === "e"){
            countVowels ++;
        }
    }

console.log(`Vowels: ${countVowels}, Consonants: ${str.length - countVowels}`);
}

CountVowelsAndConsonants("hello");

//5
// //Objective: Write a program that reverses a given string using nested loops.
// Instructions:
// Take a string as input.
// Use a loop to iterate over each character in the string.
// Use a nested loop to reverse the string by iterating from the end to the beginning.

function reversesString(str){
    let newString = "";
    for(let i = str.length - 1; i >= 0; i--){
        newString += str[i];
    }
    console.log(newString);
}

reversesString("hello")


//6
// Exercise 6: Number Pyramid
// Objective: Create a program that prints a number pyramid.
// Instructions:
// Use nested loops to print a pyramid of numbers.
// The outer loop should iterate through the number of rows (e.g., 5).
// The inner loop should print numbers from 1 up to the current row number.

function numberPyramid(num){
    let sum = "";
    for(let i = 1; i <= num; i++){
        sum += i.toString();
        console.log(sum);
    }
}
numberPyramid(8);

//7
// Objective: Calculate the sum of all elements in a 2D array.
// Instructions:
// Create a 2D array with numbers.
// Use nested loops to iterate over each element.
// Sum all the elements and print the total.

function calculate2D_Array(arr){
    let sum = 0
    for(let i = 0;  i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            sum += arr[i][j];
        }
    }
    console.log(sum);
}

calculate2D_Array([[1 ,2 ,3] , [4 , 5 , 6]]);

//8
// Exercise 8: Character Frequency
// Objective: Write a program to find the frequency of each character in a string.
// Instructions:
// Take a string as input.
// Use nested loops to count the frequency of each character.
// Print each character and its frequency.

function characterFrequency(str){
    let strr = "";
    for(let i = 0; i < str.length; i++){
        let sumChar = 0;
        for(let j = 0; j < str.length ; j++){
            if(str[i] === str[j]){
                sumChar ++;
            }
        }
        strr += str[i].toString() + " : " + sumChar.toString() + ", "; 
    }
    console.log(strr);

}


characterFrequency("hello");


function countFrequency(str){
    let freqtObject = {};
    for(let i = 0; i < str.length; i++){
        if(!freqtObject[str[i]]){
          for(let j = 0; j < str.length; j++){
            if(str[i] === str[j]){
                if(!freqtObject[str[i]]){
                    freqtObject[str[i]] = 1;
                }
                else freqtObject[str[i]] += 1
            }
          }
        }
    }
    console.log(freqtObject);

}
countFrequency("hello")





//9
// Flatten a 2D Array
// Objective: Convert a 2D array into a 1D array.
// Instructions:
// Create a 2D array with some numbers.
// Use nested loops to iterate over each element.
// Store all elements in a new 1D array and print the result.

function flattenA_2DArray(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            newArr.push(arr[i][j]);
        } 
    }
    console.log(newArr);
}

flattenA_2DArray([[1 , 2 , 3] , [4 , 5 ,6] , [7 , 8 , 9]]);



//10
// Exercise 10: Matrix Transpose
// Objective: Transpose a given matrix.
// Instructions:
// Create a 2D array representing a matrix.
// Use nested loops to switch the rows and columns of the matrix.
// Print the transposed matrix.
// For matrix = [[1, 2, 3], [4, 5, 6]], output: [[1, 4], [2, 5], [3, 6]]

function transposeAGivenMatrix(arr){
    let newArr = [];
    for(let i = 0; i < arr[0].length; i++){
        let newArr2 = [];
        for(let j = 0; j < arr.length; j++){
            newArr2.push(arr[j][i]);
        }
        newArr.push(newArr2)
    }
    console.log(newArr);

}

transposeAGivenMatrix([[1, 2, 3], [4, 5, 6]]);


// Exercise 11: Palindrome Check
// Objective: Check if a given string is a palindrome.
// Instructions:
// Take a string as input.
// Use nested loops to compare characters from the beginning and end of the string.
// Print whether the string is a palindrome.
// Example Output:
// For input = "radar", output: Palindrome
// For input = "hello", output: Not a palindrome

function palindromeCheck(str){
    let isPalindrome = true;
    for(let i = 1; i <= str.length/2; i++){
        for(let j = str.length ;  j >= str.length/2; j--){
            if(str[(i -1)] !== str[(j-1)] && i + j === str.length + 1){
                isPalindrome = false;
                break;
            }
        }
        if(!isPalindrome)
            break;
    }
    if (isPalindrome) {
        console.log("Palindrome");
    }
    else{
        console.log("Not a palindrome");
    }
}

palindromeCheck("radar");
palindromeCheck("hello");
palindromeCheck("naan")

//12
