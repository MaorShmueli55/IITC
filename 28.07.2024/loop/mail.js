//'for' Loop Exercises
//1
for(i = 10; i>0; i--){
    console.log(i);
}
//2
for(i=2; i<=20; i+=2){
    console.log(i);
}
//3
let sum = 0;
for(i=1; i<=10; i++){
    sum = i + sum;
}
console.log(sum);
//4
for(i=1; i<+50; i+=5){
    console.log(i);
}
//5 
let str = "*";
for(i=1; i<6; i++){
    console.log(str.repeat(i));
}

//'while' Loop Exercises
//1
let b1 = 1;
while(b1 <= 10){
    console.log(b1);
    b1++;
}


//2
let num3 = 5;
while(num3 <= 100){
   console.log(num3);
   num3 *= 2;
}

//3
let b2 = 20;
while(b2 >= 0){
    console.log(b2);
    b2--;
}

//4
// let pass = 1234;
// let guessPass;
// while(guessPass !== pass){
//      guessPass = Number(prompt("enter a password"));
// }


//5
let num15;
while(num15 !== 5){
    num15 = Math.floor((Math.random() * 10) + 1);
}
    console.log(num15);





//'do while' Loop Exercises
let num4 = 1;
do{
    console.log(num4);
    num4 ++;
}while(num4 <= 5)


//2
    // do{
    //     answer = prompt("do you want to play agin?")

    // }while(answer !== "no")



//3
let numR1;
do{
    numR1 = Math.floor((Math.random() * 6) + 1);
}while(numR1 !== 6);
console.log(numR1);




//4
let num31 = 5;
do{
   console.log(num3);
   num31 *= num3;
}while(num31 <= 1000);



//5
// let str3 = "";
// let name1;
// let isDone;
// do{
//     name1 =prompt("put a name");
//     str3 = name1 + " " + str3;
//     isDone = prompt("you want to continue or you are done?")

// }while (isDone !== "done");
// console.log(str3);







//Additional JavaScript Loops Exercises
//1
for(i = 0; i>21; i++){
    console.log(i);
}
//2
i = 1;
while(i<16){
    if(i % 2 !== 0 ){
        console.log(i);
    }
    i++;
}
//3
// let userNum;
// do{
//     userNum = Number(prompt("put a number between 1-10"))

// }while(userNum < 1 || userNum > 10)

//4
sum = 0;
for(i=1; i<=100; i++){
    sum = i + sum;
}
console.log(sum);
//5


for(i=10; i>0; i--){
    console.log(i);
}
console.log("Blast off!");
//6
sum = 0;
for(i=1; i<=10; i++){
    sum = i + sum;
    console.log(sum);
}
//7
let numR;
do{
    numR = Math.floor((Math.random() * 6) + 1);
}while(numR !== 3);
console.log(numR);

//8
for(i=0; i <+10 ; i++){
    console.log(i*7);
}






//9
isNumber = true;
let num = 1001;
while(isNumber){
    if(num % 3 !== 0 || num % 7 !== 0){
        num++;
    }
    else{
        isNumber = false;
        console.log(num);
    }
}







//10
sum = 1;
let givenNumber = 4;
for(i=1; i<=givenNumber; i++){
    sum = i * sum;
}
console.log(sum);
//11

// let num6 = 5;
// let guessNum;
// do{ guessNum = Number(prompt("guess a number between 1-20"))
// if(num6 > guessNum) console.log("higher");
// else console.log("lower");
// }while(num6 !== guessNum);





//12
let givenNumber1= 4;
let isPrime = true;
let consoleIsPrime;
for(i=2; (isPrime) && (i < givenNumber1); i++){
    if(givenNumber1 % i === 0){
        consoleIsPrime = "not a prime number."
        isPrime = false;
    }
    else{
        consoleIsPrime = "a prime number."
    }
}
console.log(consoleIsPrime);






//13
let num1 = 2.13;







//14
for(i=1; i<6; i++){
    let str1 = i.toString();
    console.log(str1.repeat(i));
}





//15
// let isExit = "no";
// let num15 = 0;
// do{
//     num15 += Number(prompt("enter a number to the calculator"));
//     isExit = prompt("are you done (yes/no)");
// }while(isExit === "no");
// console.log(num15);





//16
let num16 = 27;
let num17 = 108;
let divisor;
for(i=1 ; i < num16  && i < num17; i++){
    if(num16 % i === 0 && num17 % i ===0){
        divisor = i;
    }
}

console.log(divisor);

//17





//23






//24
let m = 4;
let sumM = 1;
for(i = 2; i <= m; i++){
    if(i % 2 === 0){
        sumM = sumM - 1/i;
    }
    else{
        sumM = sumM + 1/i;
    }
}
console.log(sumM);






//25
let n = 6;
let e = 0;
while(n !== 1){
    if (n % 2 === 0) {
        n /= 2;
    }
    else{
        n = (n *3) + 1
    }
    e ++;
}
console.log(e);


//# 30 Basic 'for' Loop Exercises in JavaScript
// 1. Write a for loop that counts from 1 to 5 and prints each number.
//    ```javascript
//    // Your code here
for(i=1; i < 6; i++){
console.log(i);
}





// 2. Create a for loop that counts from 0 to 9 and prints each number.
//    ```javascript
//    // Your code here
for(i=0; i < 10; i++){
    console.log(i);
    }
    





// 3. Write a for loop that counts from 10 to 1 (backwards) and prints each number.
//    ```javascript
//    // Your code here
for(i=10; i > 0; i--){
    console.log(i);
    }
    

// 4. Create a for loop that counts from 1 to 10, but only prints even numbers.
//    ```javascript
//    // Your code here
for(i=1; i < 11; i++){
    if(i%2 === 0){
    console.log(i);
    }
    }
    

// 5. Write a for loop that counts from 1 to 10, but only prints odd numbers.
//    ```javascript
//    // Your code here
for(i=1; i < 11; i++){
    if(i%2 !== 0){
    console.log(i);
    }
    }

// ## Counting with Different Increments

// 6. Create a for loop that counts from 0 to 15 by 3s (0, 3, 6, 9, 12, 15).
//    ```javascript
//    // Your code here
for(i=0; i < 16; i+=3){
    console.log(i);
    }

// 7. Write a for loop that counts from 1 to 20 by 2s (1, 3, 5, ..., 19).
//    ```javascript
//    // Your code here
for(i=1; i < 21; i+=2){
    console.log(i);
    }

// 8. Create a for loop that counts from 2 to 20 by 2s (2, 4, 6, ..., 20).
//    ```javascript
//    // Your code here
for(i=2; i < 21; i+=2){
    console.log(i);
    }

// 9. Write a for loop that counts from 10 to 0 by 2s (10, 8, 6, ..., 0).
//    ```javascript
//    // Your code here
for(i=10; i > -1; i-=2){
    console.log(i);
    }

// 10. Create a for loop that counts from 5 to 25 by 5s (5, 10, 15, 20, 25).
//     ```javascript
//     // Your code here
for(i=5; i < 26; i+=5){
    console.log(i);
    }

// ## Printing Patterns

// 11. Write a for loop that prints "*" five times on the same line.
//     ```javascript
//     // Your code here
let strt = "";
for(i=0; i < 6; i++){
    strt = strt + "*"
}
console.log(strt);
// 12. Create a for loop that prints "Hello" three times, each on a new line.
//     ```javascript
//     // Your code here
for(i=0; i<3; i++){
    console.log("Hello");
}

// 13. Write a for loop that prints numbers from 1 to 3, each followed by "!".
//     ```javascript
//     // Your code here
for(i=1; i < 4; i++){
    console.log(i + "!");
}

// 14. Create a for loop that prints "A" to "E" (one letter per iteration).
//     ```javascript
//     // Your code here


// 15. Write a for loop that prints "2" four times, separated by spaces.
//     ```javascript
//     // Your code here
//     ```

// ## Working with Arrays

// 16. Given the array `[1, 2, 3, 4, 5]`, write a for loop to print each element.
//     ```javascript
//     let arr = [1, 2, 3, 4, 5];
//     // Your code here
//     ```

// 17. Given the array `['a', 'b', 'c', 'd']`, use a for loop to print each element.
//     ```javascript
//     let arr = ['a', 'b', 'c', 'd'];
//     // Your code here
//     ```

// 18. Write a for loop to print each element of `[10, 20, 30, 40, 50]` backwards.
//     ```javascript
//     let arr = [10, 20, 30, 40, 50];
//     // Your code here
//     ```

// 19. Use a for loop to print every second element of `[1, 2, 3, 4, 5, 6]`.
//     ```javascript
//     let arr = [1, 2, 3, 4, 5, 6];
//     // Your code here
//     ```

// 20. Given `['red', 'green', 'blue']`, use a for loop to print "Color: [color]" for each.
//     ```javascript
//     let colors = ['red', 'green', 'blue'];
//     // Your code here
//     ```

// ## Simple Calculations in Loops

// 21. Write a for loop to calculate the sum of numbers from 1 to 5.
//     ```javascript
//     let sum = 0;
//     // Your code here
//     ```

// 22. Create a for loop to calculate the product of numbers from 1 to 5.
//     ```javascript
//     let product = 1;
//     // Your code here
//     ```

// 23. Use a for loop to count how many even numbers are in `[1, 2, 3, 4, 5, 6, 7, 8]`.
//     ```javascript
//     let arr = [1, 2, 3, 4, 5, 6, 7, 8];
//     let count = 0;
//     // Your code here
//     ```

// 24. Write a for loop to find the largest number in `[10, 5, 8, 12, 3]`.
//     ```javascript
//     let arr = [10, 5, 8, 12, 3];
//     let largest = arr[0];
//     // Your code here
//     ```

// 25. Use a for loop to calculate the sum of even numbers from 1 to 10.
//     ```javascript
//     let sum = 0;
//     // Your code here
//     ```

// ## Nested Loops

// 26. Write nested for loops to create this pattern:
//     ```
//     *
//     **
//     ***
//     ```
//     ```javascript
//     // Your code here
//     ```

// 27. Create nested for loops to print a 3x3 grid of asterisks.
//     ```javascript
//     // Your code here
//     ```

// 28. Use nested for loops to create this number pattern:
//     ```
//     1
//     12
//     123
//     ```
//     ```javascript
//     // Your code here
//     ```

// 29. Write nested for loops to create a 4x4 multiplication table.
//     ```javascript
//     // Your code here
//     ```

// 30. Create nested for loops to print this pattern:
//     ```
//     1
//     22
//     333
//     ```
//     ```javascript
//     // Your code here
//     ```
