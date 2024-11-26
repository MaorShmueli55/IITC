// Basic Array Operations (Beginner)

//1
let arr = [1, 2, 3];
let newArr = [...arr];

//2
let arr2 = [4, 5, 6];
newArr = [...arr, ...arr2];
console.log(newArr);

//3
newArr = [3, ...arr];
console.log(newArr);

//4
newArr = [...arr, 3];
console.log(newArr);

//5
let arr3 = [7, 8, 9, 10, 11, 12];
newArr = [...arr, ...arr2, ...arr3];
console.log(newArr);

//6
let element = 9;
newArr = [...arr, element];
console.log(newArr);

//7
newArr = [...arr.slice(1)];
console.log(newArr);

//8
newArr = [...arr3.splice(-3)];
console.log(newArr);

//9
newArr = [...arr3.reverse()];
console.log(newArr);

//10
newArr = [arr[0], element, ...arr.slice(2)];
console.log(newArr);

// Practical Scenarios (Intermediate)

//1
let string = "nbnbnbn";
newArr = [...string];
console.log(newArr);

//3
newArr = [...arr.slice(0, -1)];
console.log(newArr);

//4
newArr = [...arr.slice(0, 2), element, ...arr.slice(2)];
console.log(newArr);

//5
// newArr=[...arr Set(arr)]

//6
newArr = arr.slice(1, -1);

//7
newArr = [...arr.slice(1), arr[0]];

//8
newArr = [string, ...arr];

//9
const mergeArrays = (arr) => {
  return [...arr];
};

//10
newArr = [...arr.sort(() => Math.random() - 0.5)];
console.log(newArr);

//Basic Object Operations (Beginner)

//1
let obj = { name: "maor", age: 22, phone: "050500050" };
let newObj = { ...obj };
console.log(newObj);

//2
let obj2 = { namesd: "gdsd", aged: 45, phonde: "050500050" };
newObj = { ...obj, ...obj2 };
console.log(newObj);

//3
newObj = { ...obj, name: "kkk" };
console.log(newObj);

//4
newObj = { ...obj, lname: "kkk" };
console.log(newObj);

//5
let obj3 = { nn: "fd" };
newObj = { ...obj, ...obj2, ...obj3 };
console.log(newObj);

//6
newObj = { ...obj };
console.log(newObj);

//7
const { name, ...newObj1 } = obj;
console.log(newObj1);

//8
newObj = { ...obj, name: "jjj", age: 44 };
console.log(newObj);

//9
let obj5 = { namesd: "gdsd", aged: 45, phonde: "050500050" };
const { namesd, ...rest } = obj5;
newObj = { name };
console.log(newObj);
console.log(rest);

//10

//Practical Scenarios (Intermediate)
//1
const mergeObjects = (object1, object2, object3) => {
  return (newObj = { ...object1, ...object2, ...object3 });
};

//2
newObj = { ...obj, ...obj2 };

//3
newObj = {
  ...obj,
  grades: {
    math: 55,
    history: 80,
  },
};

//4
let obj6 = { namesd: "gdsd", aged: 45, phonde: "050500050" };
const { aged, ...rest1 } = obj6;
newObj = { name };
console.log(newObj);
console.log(rest1);

//5
const originalObject = {
  name: "Alice",
  age: null,
  occupation: "Designer",
  location: undefined,
  hobby: "Reading",
};
const filteredObject = Object.fromEntries(
  Object.entries(originalObject).filter(([key, value]) => value != null)
);

console.log(filteredObject);

//6

//7
let obj7 = { namesd: "gdsd", aged: 45, phonde: "050500050" };
const { phonde, ...rest3 } = { ...obj6, ...obj };
newObj = { phonde };
console.log(newObj);
console.log(rest3);

//8
newObj = {
    ...obj,
    grades: {
      math: 55,
      history: 80,
    },
  };

  let newObj2 = {...newObj, grades:{...newObj.grades , math:100}}
  console.log(newObj2);

  //9


  //10
  let user = {age: 20, name: "kjohi"}
  let hh = {kk: "kjh" , jyg:"jyg"}

  newObj= {...user , ...hh , age:60}
  console.log(newObj);
  
  