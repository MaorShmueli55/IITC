//1
let person = {
    name: "Maor",
    age: 21,
    isStudent: true
};

console.log(person.name);
person.isStudent = false;
console.log(person.isStudent);


//2
let car = {
    make: "BMW",
    model: "X6",
    year: 2024
};

//car make an object that cunclud make , model and year;

console.log(car.model);
car.year = 2025;
console.log(car.year);

//3
let fruit = {
    name: "mango",
    color: "orange",
    sweetness: 7
};
console.log(fruit.name + " " + fruit.sweetness);
fruit.color = "black";
console.log(fruit.color);


//4
let book = {
    titel: "IITC",
    author: "Omer",
    page: 7000000
};
console.log(book.titel + " " + book.author);
book.page += 50;
console.log(book.page);


//5
let animal = {
    species: "dog",
    sound: "bark",
    isWild: false
};
console.log(animal.species + " " + animal.sound);
animal.isWild = true;
console.log(animal.isWild);

//6
let smartphone = {
    brand: "apple",
    model: "15 pro max",
    strongGB: 265
};
console.log(smartphone.brand + " " + smartphone.strongGB);
smartphone.model = "18"
console.log(smartphone.model);


//7
let recipe = {
    name: "pancake",
    ingredients:["milk" , "egg" , "sugar"],
    preparationTime: 30
};

console.log(recipe.name + " " + recipe.ingredients);
recipe.ingredients.push("flour");
console.log(recipe.ingredients);



//8
let movie = {
    title: "amama",
    director: "fitusi",
    releaseYear: 2025
};
console.log(movie.title + " " + movie.director);
movie.releaseYear = 2024
console.log(movie.releaseYear);

//9
let country = {
    name: "Israel",
    capital: "Jerusalem",
    population: 9898989
};
console.log(country.name + " " + country.capital);
country.population += 1000000;
console.log(country.population);

//10
let computer = {
    brand: "dell",
    CPU: "Maor",
    RAMinGB: 8
};
console.log(computer.brand + " " + computer.CPU);
computer.RAMinGB *= 2;
console.log(computer.RAMinGB);

//11
let playlist = {
    name: "Maor's playlist",
    songs: ["Lose control" , "Rose" , "Satlot"],
    duration: 10
};
playlist.songs.push("deep down")
console.log("average " + playlist.duration / playlist.songs.length);

//12
let bankAccount = {
    accountNumber: "12334",
    balance: 200000,
    isActive: false,
    deposit: function (amount){
        this.balance += amount;
        console.log(`The new balance is ${this.balance}`);
    },
    withdraw: function (amount){
        if (this.balance > amount) {
            this.balance -= amount
            console.log(`The new balance is ${this.balance}`);
        }
        else{
            console.log(`you cant withdraw from your account`);
        }
    }
};


bankAccount.deposit(30);
bankAccount.withdraw(70);
bankAccount.withdraw(700000000);


//13
let circle = {
    radius: 5,
    color: "black"
};

function calculateArea(){
    return (Math.PI*circle.radius^2);
}

function calculateCircumference(){
    return (2*Math.PI*circle.radius);
}

//14
let student = {
    name: "Maor",
    grades: [90 , 85 , 78],
    calculateAverage: function(){
        let average = this.grades.reduce(function myFun (total , num){
            return total + num;
        } , 0) / this.grades.length
        console.log(`The average is ${average}`);
    },
    getLetterGrade: function(){
        let letter = [this.grades.map(function  myFunn (num){
        if(num  >= 90) return "A";
        else if(num >= 80) return "B";
        else if (num >= 70) return"C";
        else if (num >= 60) return "D";
        else return "F";
    })]
    console.log(letter);
}
};


student.calculateAverage();
student.getLetterGrade();


//15
let todoList = {
    tasks: ["homework" , "shopping" , "training"],
    comletedTasks: ["make a dinner" , "go to gym"],
    addTask: function (task){
        this.tasks.push(task);
    },
    displayTask: function (){
        console.log(this.tasks);
       },
    completeTask: function(task){
        this.comletedTasks.push(task)
        this.tasks = this.tasks.filter(function move(word){
            return word !== task;
        })
    }
};

todoList.displayTask();
todoList.completeTask("homework")
todoList.displayTask();
// console.log(todoList.comletedTasks);

//16
book = {
    titel: "IITC" ,
    author: "Maor",
    isbn: "111111",
    isAvailable: true,
    checkOut: function (){
        if(this.isAvailable){
            this.isAvailable = false;
            console.log(`You check out the book ${this.titel}`);
        }
        else{
            console.log(`The book ${this.titel} is not active.`);
        }
    },
    return: function(){
        this.isAvailable = true;
        console.log(`You return the book ${this.titel}.`);
    }
};

book.checkOut();
book.checkOut();
book.return();
book.checkOut();


// //17
// let colorMixer = {
//     color1: "black",
//     color2: "white",


// };



//18
let tempConverter = {
    celsius: 0 ,
    fahrenheit: 0 ,
    setC: function (temp){
        this.celsius = temp;
        this.fahrenheit = (temp*9)/5 + 32;
    },
    setF: function (temp){
        this.fahrenheit = temp;
        this.celsius = (temp-32)*5/9;
    },
    getC: function(){
        console.log(`The temperature is ${this.celsius} celsius`);
    },
    getF: function(){
        console.log(`The temperature is ${this.fahrenheit} fahrenheit`);
    }
  
};

tempConverter.setC(25);
tempConverter.getC();
tempConverter.getF();

//19
let pet = {
    name: "tokyo",
    type: "dog",
    hunger: 5,
    happiness: 10,
    feed: function(){
        this.hunger += 3;
    },
    play: function(){
        this.happiness += 3;
    },
    getStatus: function(){
        console.log(`the happiness is ${this.happiness} and the hunger is ${this.hunger}.`);
    }
};

pet.getStatus();
pet.play();
pet.feed();
pet.getStatus();

//20









///////////////////////////////////////////
//30 Basic Nested Loop Exercises in JavaScript
//1
function printStr(str , num){
    let row = ""
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            row += str + " ";
        }
        row += `\n`
    }
    console.log(row);
}


printStr("*" , 3);

//2
function sum(num){
    let sum1;
    let row = "";
    for(let i = 0; i < num; i++){
        for(let j = 0; j < num; j++){
            sum1 = i + j
            row += sum1.toString() + " ";
        }
        row += `\n`
    }
    console.log(row);
}

sum(5);

//3
function printStr1(str , num){
    let row = ""
    for(let i = 0; i < num; i++){
        for(let j = 0; j < i; j++){
            row += str + " ";
        }
        row += `\n`
    }
    console.log(row);
}


printStr1("*" , 5);

//4
function mult(num){
    let sum1;
    let row = "";
    for(let i = 1; i <= num; i++){
        for(let j = 1; j <= num; j++){
            sum1 = i * j
            row += sum1.toString() + " ";
        }
        row += `\n`
    }
    console.log(row);
}

mult(10);

//5
function squareBorder(str , num){
    let row = "";
    for(let i = 0 ; i < num; i ++){
        for(let j = 0; j < num; j++){
            if(i === 0 || i === (num-1) || (j=== 0 || j === (num - 1))){
                row += str + " ";
            }
            else{
                row += "  ";
            }
        }
        row += `\n`
    }
    console.log(row);
}

squareBorder("$" , 9);

//6
function numFromTo(){
    let row = "";
    let sum = 0
    for(let i = 1; i < 6; i++){
        for(let j  = 0; j < 5; j++){
            if(i <= 2){
            sum += 1
            row += `${sum.toString()}  `
            }
            else{
            sum += 1
            row += `${sum.toString()} `
            }
        }
        row += `\n`;
    }
    console.log(row);
}

numFromTo();

// 7
console.log("\nExercise 7:");
for (let i = 1; i <= 5; i++) {
    let row = ' '.repeat(5 - i);
    for (let j = 1; j <= i; j++) {
        row += i + ' ';
    }
    console.log(row);
}

// 8
console.log("\nExercise 8:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += ((i + j) % 2) + ' ';
    }
    console.log(row);
}

// 9
console.log("\nExercise 9:");
let pascal = [[1]];
for (let i = 1; i < 5; i++) {
    let row = [1];
    for (let j = 1; j < i; j++) {
        row.push(pascal[i-1][j-1] + pascal[i-1][j]);
    }
    row.push(1);
    pascal.push(row);
}
pascal.forEach((row, i) => {
    console.log(' '.repeat(4-i) + row.join(' '));
});

// 10
console.log("\nExercise 10:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        if (i === 0 || i === 4 || j === 0 || j === 4) {
            row += '* ';
        } else {
            row += '  ';
        }
    }
    console.log(row);
}

// 11
console.log("\nExercise 11:");
count = 1;
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += count + ' ';
        count++;
    }
    console.log(row);
}

// 12
console.log("\nExercise 12:");
for (let i = 1; i <= 4; i++) {
    let row = '';
    for (let j = 1; j <= 4; j++) {
        row += i.toString().repeat(j) + ' ';
    }
    console.log(row);
}

//13
console.log("\nExercise 13:");
for (let i = 5; i >= 1; i--) {
    console.log('* '.repeat(i));
}

// 14
console.log("\nExercise 14:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += Math.max(i, j) + ' ';
    }
    console.log(row);
}

// 15
console.log("\nExercise 15:");
for (let i = 1; i <= 5; i += 2) {
    console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}
for (let i = 3; i >= 1; i -= 2) {
    console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}

// 16
console.log("\nExercise 16:");
for (let i = 0; i < 6; i++) {
    let row = '';
    for (let j = 0; j < 6; j++) {
        row += (i * j) + ' ';
    }
    console.log(row);
}

//17
console.log("\nExercise 17:");
let char = 65;
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += String.fromCharCode(char) + ' ';
        char++;
    }
    console.log(row);
}

//18
console.log("\nExercise 18:");
let spiral = Array(5).fill().map(() => Array(5).fill(0));
let num = 1, top = 0, bottom = 4, left = 0, right = 4;

while (num <= 25) {
    for (let i = left; i <= right; i++) spiral[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) spiral[i][right] = num++;
    right--;
    for (let i = right; i >= left; i--) spiral[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) spiral[i][left] = num++;
    left++;
}

spiral.forEach(row => console.log(row.map(n => n.toString().padStart(2, ' ')).join(' ')));

//19
console.log("\nExercise 19:");
for (let i = 1; i <= 5; i++) {
    let row = ' '.repeat(5-i);
    for (let j = 1; j <= 2*i-1; j++) {
        if (j === 1 || j === 2*i-1 || i === 5) row += '*';
        else row += ' ';
    }
    console.log(row);
}

//20
console.log("\nExercise 20:");
function sumTo(n) {
    return (n * (n + 1)) / 2;
}
for (let i = 0; i < 4; i++) {
    let row = '';
    for (let j = 0; j < 4; j++) {
        row += sumTo(i * j) + ' ';
    }
    console.log(row);
}

//21
console.log("\nExercise 21:");
for (let i = 5; i >= 1; i -= 2) {
    console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}
for (let i = 3; i <= 5; i += 2) {
    console.log(' '.repeat((5-i)/2) + '*'.repeat(i));
}

//22
console.log("\nExercise 22:");
for (let i = 0; i < 5; i++) {
    let row = '';
    for (let j = 0; j < 5; j++) {
        row += Math.abs(i - j) + ' ';
    }
    console.log(row);
}

//23
console.log("\nExercise 23:");
count = 2;
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += count + ' ';
        count += 2;
    }
    console.log(row);
}