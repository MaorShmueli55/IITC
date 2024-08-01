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




