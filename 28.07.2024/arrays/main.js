//# JavaScript Arrays Practice Exercises
//1
let favoriteFoods = ["banana" , "mango" , "pizza" , "hamburger" , "pasta"];
console.log(favoriteFoods);
//2
console.log(favoriteFoods[2]);
//3
favoriteFoods[1] = "falafel";
console.log(favoriteFoods);
//4
favoriteFoods.push("mango");
console.log(favoriteFoods);
//5
favoriteFoods.shift();
console.log(favoriteFoods);
//6
for(i = 0; i < favoriteFoods.length; i++){
    console.log(favoriteFoods[i]);
}
//7
console.log(favoriteFoods.indexOf("pizza"));

//8
number = [1 ,2 , 3 , 5 , 6];
let sum = 0;
for(i=0; i < number.length; i++){
    sum += number[i];
}
console.log(sum);



//JavaScript Array Exercises
//1
let fruit =["banana" , "apple" , "mango" , "kiwi"];
//2
fruit.push("orenge");
console.log(fruit);
//3
let lastsFruit = fruit.pop();
console.log(fruit);
console.log(lastsFruit);
//4
let numbers = [1 , 2 , 3 , 4 , 5];
console.log(numbers[2]);
//5
fruit[1]= "kiwi";
console.log(fruit);
//6
let colors = [];
colors.push("red" , "green" , "blue");
console.log(colors);
//7
colors.shift();
console.log(colors);
//8
colors.unshift("yellow");
console.log(colors);
//9
let numbers1 = [1 , 2 , 3 , 4];
let sum1 = 0;
for(i=0; i<numbers1.length; i++){
    sum1 += numbers1[i];
}
console.log(sum1);
//10
console.log(colors.indexOf("green"));
//11
let randomNumberArray = [Math.random() , Math.random() , Math.random() , Math.random() , Math.random()];
let biggestNum = 0;
for(i = 0; i < randomNumberArray.length; i++){
    if (biggestNum < randomNumberArray[i]) {
        biggestNum === randomNumberArray[i];
    }
}
console.log(randomNumberArray);
console.log(biggestNum);
console.log(randomNumberArray[0]);
//12
console.log(fruit.slice(1 , 3));
//13
// number11 = [1 , 2 ,3 ,4 ,5];
// let newnum[] = number11.filter(number11 % 2 !== 0);
// console.log(newnum);

//14
console.log(colors.join());
//15 
let array1 = [1 ,2 , 3, 4];
let array2= [5 , 6, 7 , 8];
let array3 = array1.concat(array2);
console.log(array3);
//16
console.log(fruit.reverse());
//17
// let name3 = ["nanan" , "bananan", "namabab"];
// name3 = name3.map(" Hello");
// console.log(name3);

//18
let numbers4 = [9 , 8 , 10 , 17];
function greater(u){
    if(u > 0) return true;
}
console.log(numbers4.every(greater));
//19
function greater10(o){
    if( o > 10) return true;
}
console.log(numbers4.find(greater10));
//20
function banana(b) {
    if (b === "banana") {
        return true
    }
}
console.log(fruit.some(banana));
//21
let numbers7 = [1 , 2 , 3]
function calculators(p , summ){
    return summ + p;
}
let g = numbers7.reduce(calculators);
console.log(g);
//22
let squaresArray = [];
for(i=1; i <= 10; i++){
    squaresArray.push(i*i);
}
console.log(squaresArray);
//23







// # 100+ Array Exercises for JavaScript
//1
let fruit1=[];
//2
let number2 = [1 , 2 ,3, 4 ,5];
//3
let colors100 = ["red" , "green" , "blue"];
//4
let mixArray = [1, true , "hello"];
//5
let season = ["summer" , "winter" , "spring" , "fall"];
//6
console.log(number2.length);
//7
let emptyCheck = [];
if(emptyCheck.length === 0) console.log("empty array");
//8
let dynamic = [1 ,2 ,3 ,4 ,5];
console.log(dynamic.length);
//9
dynamic.push(6);
console.log(dynamic);
//10
dynamic.shift();
console.log(dynamic);
//11
console.log(colors[0]);
//12
console.log(season.length-1);
//13
let middle = Math.floor(number2.length / 2);
console.log(number2[middle]); 
//14
console.log(fruit[9]);
//15
console.log(`The second is ${colors[1]}`);
//16
fruit1[0]="apple"
console.log(fruit1);
//17
number2[number2.length - 1] = 10;
console.log(number2);
//18
let r = (number2[2])*2;
console.log(r);
number2[2]= r;
console.log(number2);
//19
for(i = 0; i<colors100.length; i++){
    colors100[i] = colors100[i].toUpperCase();
}
console.log(colors100);
//20
let w = season[0];
let w1 = season[season.length-1];
season[0] = w1;
season[season.length-1] = w;
console.log(season);
//21
fruit1.push("orange");
//22
numbers7.pop();
//23
colors100.push("pink" , "brown" , "silver");
//24
// let emArray = [];
// for(i=1; i = 6; i++){
//     emArray.push(i);
// }
// //25
// for(i=0; i = 5; i++){
//     console.log(emArray.pop(i));
// }

//26
fruit1.unshift("mango");
//27
numbers7.shift();
//28
numbers7.unshift(1 ,2 ,3);
console.log(numbers7);
//29
// let tt = [];
// for(i = 0; i = 6; i++){
//     tt = tt.unshift(i);
// }
// console.log(tt);
// //30
// for(i=0; i = 6; i++){
//      console.log(tt.shift(i));
//  }


//31
console.log(colors.indexOf("green"));
//32
season = ["winter" , "summer"]
if(season.indexOf("winter" === -1)){
     console.log("winter dosent exists");
}
//33
let colo = ["orange" , "yellow" , "blue"];
colo.push("red");
console.log(colo);
console.log(colo.lastIndexOf("red"));
//34
//35


//36
console.log(fruit.includes("apple"));
//37
console.log(number2.includes(10));
//38
console.log(colo.includes("blue" , 0));

