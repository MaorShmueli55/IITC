// # JavaScript Function Exercises
//1 
function greet(){
    console.log("Hello, World");
}
greet();
//2
let num = 4;
function square(){
    return num *= num;

}
console.log(square());
//3
let num_2 = 5;
function isEven(){
    if(num_2 % 2 === 0) return true;
    else return false;
}
console.log(isEven());
//4
function getFullName(firstName , lastName){
    return firstName + " " + lastName;
}
console.log("maor" , "shmueli");
//5
function sumTwo(num3 , num4){
    return num3 + num4;
}
console.log(sumTwo(2 , 3));
//6
function multiply(num__1 , num__2){
    return num__1 * num__2;
}
console.log(multiply(3 , 7));
//7
function greetPerson(name_1){
    return "Hello " + name_1;
}
console.log(greetPerson("Maor"));
//8
function getAbsoluteValue(numA){
    if(numA > 0) return numA;
    else return numA / -1;
}
console.log(getAbsoluteValue(-9));
//9
function calculateAverage(num9 , num10){
    return (num9 + num10)/2
}
console.log(calculateAverage(9 , 3));
//10
function convertToUppercase(str){
    return str.toUpperCase();
}
console.log(convertToUppercase("maor"));
//11
function isPositive(num11){
    if(num11 > 0) return true;
    else return false;
}
console.log(isPositive(-5));
//12
function getFirstChar(str1){
    return str1[0];
}
console.log(getFirstChar("baba"));
//13
function areaOfRectangle(width , height){
    return width * height
}
console.log(areaOfRectangle(7 , 6));
//14
function remainderDivision(fnum , snum){
    return fnum % snum;
}
console.log(remainderDivision(9 , 5));
//15
function logType(value){
    console.log(typeof value);
}
logType(true);
//16
function invertBoolean(boolValue){
    return !boolValue;
}
console.log(invertBoolean(false));
//17
function concatenateStrings(str2 , str3){
    return str2 + str3;
}
console.log(concatenateStrings("Maor" , "Shmueli"));
//18
function findSmaller(numb , numb3){
    if(numb > numb3) return numb;
    else return numb3;
}
console.log(findSmaller(5 , 8));
//19
function greetWithDefault(name5){
    if(name5 === undefined) return "Guest"
    else return "Hello " + name5;
}
console.log(greetWithDefault("Maor"));
//20
function isLongString(string3){
    if(string3.length > 10) return true;
    else return false;
}
console.log(isLongString("nnnnnnnnnnn"));
