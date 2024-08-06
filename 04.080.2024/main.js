// let student = [
//     { id: "1" , name: "omer" , grade: "100"} ,
//     {id: "2" , name: "avi" , grade: "40"} ,
//     { id: "3" , name: "gaga" , grade: 80}
// ]

// function getValueFromKey(array , key){
//     let valueArray = [];
//     for(let i = 0; i < array.length; i++){
//         valueArray.push(array[i][key]);
//     }
//     console.log(valueArray);
// }

// getValueFromKey(student , "name");

// function getPassStudent(array , grade){
//     let passStudentArray = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i].grade > grade) passStudentArray.push(array[i]);
//     }
//     return(passStudentArray);

// }
// // console.log(getPassStudent(student , 70));
// // console.log(getPassStudent(student , 90));

// let names = ["yossi" , "liraz" , "baba"];

// function createPersons(array){
//     let persons = [];
//     for(let i = 0; i < array.length; i++){
//         persons.push({name: array[i] , id: i});
//     }
//     return persons;
// }

// console.log(createPersons(names));




// let employees = [
//     {name: "Maor" , department: "Engineering" , yearsOfExp: 5 },
//     {name: "baba" , department: "Marketing" , yearsOfExp: 8 },
//     {name: "nana" , department: "Engineering" , yearsOfExp: 5 },
//     {name: "sasa" , department: "Marketing" , yearsOfExp: 10 },
//     {name: "papa" , department: "Engineering" , yearsOfExp: 3 },
//     {name: "haha" , department: "Marketing" , yearsOfExp: 8 },
// ];

// function groupBy(array , key){
//     let group = {};
//     for(let i = 0; i < array.length; i++){
//         if((!group[array[i][key]])){
//             group[array[i][key]] = []
//         }
//         group[array[i][key]].push(array[i]);

//    }
//    return group
// }
// console.log(groupBy(employees , "yearsOfExp"));

"use strict";

let person = {
  name: "John",
  age: 17,
  address: {
    city: "New York",
    zip: "10001",
  },
};

// TODO: Write a function to update the person's city
function updateCity(person, newCity) {
  person.address.city = newCity
}

updateCity(person, "Los Angeles");
console.log("Updated Person:", person);

/////////////////////////////////////////////////////

let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 },
  { id: 3, name: "Charlie", age: 19 },
];

// TODO: Write a function to return an array of student names
function getStudentNames(students) {
    let arrayName = [];
    for(let i = 0; i < students.length; i++){
        arrayName.push(students[i].name)
    }
    return arrayName;
}

let names = getStudentNames(students);
console.log("Student Names:", names);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
    for(let i = 0; i < students.length; i++){
        if(students[i].id === id){
            return students[i];
        }
    }
}

let student1 = getStudentById(students, 2);
console.log("Found Student:", student1);

// TODO: Write a function to find a student by ID
function getStudentById(students, id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

// let student = getStudentById(students, 2);
// console.log("Found Student:", student);

// TODO: Write a function to add a new student to the array
function addStudent(students, newStudent) {
  students.push(newStudent);
}

addStudent(students, { id: 4, name: "Charlie", age: 19 });
console.log("Updated Students:", students);

/////////////////////////////////////////////////////

let product = {
  name: "Laptop",
  price: 1200,
  isAvailable: true,
  categories: ["electronics", "computers", "tech"],
};

// TODO: Write a function to toggle the product's availability
function toggleAvailability(product) {
  product.isAvailable = !product.isAvailable;
}

toggleAvailability(product);
console.log("Updated Product:", product);

// TODO: Write a function to update the product's price
function updatePrice(product, newPrice) {
  product.price = newPrice;
}

updatePrice(product, 1500);
console.log("Updated Product:", product);

// TODO: Write a function to remove a category from the product
function removeCategory(product, category) {
  let catArray = product.categories;
  for(let i = 0; i< catArray.length; i++){
    if(catArray[i] === category){
        product.categories.splice(i, 1);
        return;
    }
  }
}

removeCategory(product, "computers");
console.log("Updated Product:", product)

/////////////////////////////////////////////////////

let products = [
  { name: "Laptop", price: 1000, sizes: ["M", "L"], isAvailable: true },
  { name: "Mouse", price: 2500, sizes: ["S", "M"], isAvailable: false },
  { name: "Keyboard", price: 52, sizes: ["L", "XL"], isAvailable: true },
];

// TODO: Write a function to find the most expensive product
function findMostExpensiveProduct(products) {
  let maxIndex = 0;
  for(let i = 0; i < products.length; i++){
    if(products[i].price > products[maxIndex].price){
        maxIndex = i;
    }
  }
  return products[maxIndex];
}

let expensiveProduct = findMostExpensiveProduct(products);
console.log("Most Expensive Product:", expensiveProduct);

// TODO: Write a function to return an array of only available product sizes
function getAvailableSizes(products) {
  
}

// let sizes = getAvailableSizes(products);
// console.log("Available Sizes:", sizes);

/////////////////////////////////////////////////////

let student = {
  name: "Alice",
  age: 20,
};

// TODO: Write a function to add a new property to the student object
function addProperty(student, key, value) {
  student[key] = value;
}

addProperty(student, "grade", "A");
console.log("Updated Student:", student);

/////////////////////////////////////////////////////

let school = {
  name: "Greenwood High",
  address: {
    city: "Springfield",
    zip: "12345",
  },
  students: [
    { id: 1, name: "Alice", grades: { math: 85, english: 78 } },
    { id: 2, name: "Bob", grades: { math: 92, english: 88 } },
  ],
};

// TODO: Write a function to update a student's grade in a subject
function updateStudentGrade(school, studentId, subject, newGrade) {
  if(studentId === school[0].id){
    return (school.students[0].grades[subject] = newGrade);
  }
  else if(studentId === school[0].id){
    return (school.students[1].grades[subject] = newGrade);
  }
  else{
    return (school.students[2].grades[subject] = newGrade);
  }
}

updateStudentGrade(school, 1, "math", 90);
console.log("Updated School:", school);

/////////////////////////////////////////////////////

let orders = [
  { id: 1, product: "Laptop", status: "delivered" },
  { id: 2, product: "Mouse", status: "pending" },
  { id: 3, product: "Keyboard", status: "delivered" },
  { id: 4, product: "Monitor", status: "pending" },
  { id: 5, product: "Laptop", status: "shipped" },
];

// TODO: Write a function to return an array of only delivered orders
function getDeliveredOrders(orders) {
  let group = {};
  for(let i =0; i < orders.length; i++){
    if(orders[i].status === "delivered"){
        if(group[orders[i].status] === undefined){
            group[orders[i].status].push(orders[i]);
        }
    }
  }
  return group
}

let deliveredOrders = getDeliveredOrders(orders);
console.log("Delivered Orders:", deliveredOrders);

// TODO: Write a function to count the occurrences of each product in the orders
function countProductOccurrences(orders) {
  let products = {};
  for(let i = 0; i < orders.length; i++){
    if(products[orders[i].product] === undefined){
        products[orders[i].product] = 0;
    }
    products[orders[i].product] ++;
  }
  return products;
}

let productCounts = countProductOccurrences(orders);
console.log("Product Counts:", productCounts);
/*
  Output:
  {
    Laptop: 2,
    Mouse: 1,
    Keyboard: 1,
    Monitor: 1
  }
  */
