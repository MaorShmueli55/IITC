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



