// # JavaScript Conditional Statements Exercises

//1 
let age = 21;
if(age >= 18) canVote = true;
console.log(canVote);
//2 
let temperature = -10;
if (temperature < 0) weather = "freezing";
else weather = "not freezing";
console.log(weather);
//3 
let score = 100;
if (score >= 60) result = "pass";
else result = "fail";
console.log(result);
//4
let grade = 95;
if(grade >= 90) letterGrade = "A";
else if (grade >= 80) letterGrade = "B";
else letterGrade = "C";
console.log(letterGrade);
//5 
let number_2 = 9;
if(number_2 % 2 === 0) isEven = true;
// else isEven = false;
// console.log(isEven);
//6 
let year = 7;
if(year % 4 === 0) isLeapYear = true;
else isLeapYear = false;
console.log(isLeapYear);
//7
let hour = 3;
if(hour < 12) period = "Am";
else period = "Pm";
console.log(period);
//8 
let dayNumber = 4;
if(dayNumber === 1) dayName = "sunday";
else if(dayNumber === 2) dayName = "monday";
else if(dayNumber === 3) dayName = "Tuesday";
else if(dayNumber === 4) dayName = "Wednesday";
else if(dayNumber === 5) dayName = "Thursday";
else if(dayNumber === 6) dayName = "Friday";
else if(dayNumber === 7) dayName = "Saturday";
console.log(dayName);
//9
let name_3 = "";
if(name_3.length === 0) haseNmae = false;
console.log(haseNmae);
//10
let amount = 999;
if(amount > 100) shipping = 0;
else shipping = 5;
console.log(shipping);
//11
let password = "maor123";
if(password === "secret123") isLoggedIn = true;
else isLoggedIn = false;
console.log(isLoggedIn);
//12
let month = 8;
if(month === 1 || month === 2 || month === 12) season = "Winter";
else if(month === 3 || month === 4 || month === 5) season = "Spring";
else if(month === 6 || month === 7 || month === 8) season = "Summer";
else season = "Fall";
console.log(season);
//13
let income = 5500;
let creditScore = 750;
if(income > 5000 && creditScore > 700) loanApproved = true;
console.log(loanApproved);
//14 
let age_1 = 21;
if(18 > age_1 || age_1 > 65) discount = 0.2;
else discount = 0;
console.log(discount);
//15 
let number_3 = 8;
if(number_3 >= 1 && number_3 <= 10) inRage = true;
else inRage = false;
console.log(inRage);
//16
let dayNumber_1 = 4;
let day = "";
switch(dayNumber_1){
    case 1: 
      day = "sunday";
      break;
    case 2:
        day = "Monday";
        break;
    case 3:
        day = "Tuesday";
        break;
    case 4:
        day = "Wednesday";
        break;
    case 5:
        day = "Thursday";
        break;
    case 6:
        day = "Friday";
        break;
    case 7:
        day =  "Saturday";
}
console.log(day);
//17
let grade1 = "B"
switch(grade1){
    case "A":
        description = "Excellent"
        break;
    case "B":
        description = "Good";
        break;
    case "C":
        description = "Enough";
        break;
    case "D":
        description = "Barely enough";
        break;
    case "F":
        description = "Fails"
}
console.log(description);
//18
let number_4 = -3;
if(number_4 < 0) sign = "negative";
else if(number_4 === 0) sign = "zero";
else sign = "positive";
console.log(sign);
//19
let year_1 = 2024;
if(year_1 % 100 === 0 && year % 400 === 0) isCenturyLeapYear = "true";
else isCenturyLeapYear = false;
//20
let month_1 = 8;
switch(month_1){
    case 1:
        daysInMonth = 31;
        break;
    case 2:
         daysInMonth = 28;
         break;
    case 3:
         daysInMonth = 31;
        break;
     case 4:
        daysInMonth = 30;
        break;
    case 5:
        daysInMonth = 31;
        break;
    case 6:
        daysInMonth = 30;
        break;
    case 7:
        daysInMonth = 31;
        break;
  case 8:
        daysInMonth = 31;
        break;
    case 9:
        daysInMonth = 30;
        break;
     case 10:
        daysInMonth = 31;
        break;
    case 11:
        daysInMonth = 30;
        break;
    case 12:
        daysInMonth = 31;
        break;
            
    }

console.log(daysInMonth);
//21
let number_5 = 4
if(number_5 > 0){
    if(number_5 % 2 === 0){
        sign = "positive";
        parity = "even";
    }
    else{
        sign = "positive";
        parity = "odd";
    }    
}
else if(number_5 < 0){
    if(number_5 % 2 === 0){
        sign = "negative";
        parity = "even";
    }
    else{
        sign = "negative";
        parity = "odd";
    }
}
else{
    sign = "zero";
    parity = "zero";
}
console.log(sign + ", " + parity);
//22
let score_1 = 70;
let attendance = 75;
if(score_1 >= 90){
    if(attendance > 80){
        grade = "A";
    }
    else{
        grade = "B";
    }
}
else if(score_1 >= 75){
    if(attendance > 80){
        grade = "B";
    }
    else{
        grade = "C";
    }
}
else if(score_1 >= 60){
    if(attendance > 80){
        grade = "C";
    }
    else{
        grade = "D";
    }
}
else if(score_1 < 60){
    if(attendance > 80){
        grade = "D";
    }
    else{
        grade = "F";
    }
}
console.log(grade);
//23
let year_2 = 2600
if(year_2 % 4 === 0 && (year_2 % 100 !== 0 || year_2 % 400 === 0)){
        
    isLeapYear = true;
}
else{
    isLeapYear = false;
}
console.log(isLeapYear);
//24
let age_2 = 21;
let isEmployed = false;
if(18 < age_2 && age_2 < 65){
    if(isEmployed){
        person1 = "Employed Adult";
    }
    else{
        person1 = "Unemployed Adult";
    }
}
else if(age_2 < 18){
    person1 = "Student";
}
else if(age_2 >= 65){
     person1 = "Retiree";
}

console.log(person1);
//25
let month_2 = 11;
switch(month_2){
    case 1:
    case 2:
    case 12:
        seasons = "Winter";
        break;
    case 3:
    case 4:
    case 5:
        seasons = "Spring";
        break;
    case 6:
    case 7:
    case 8:
        seasons = "Summer";
        break;
    default:
        seasons = "Fall";
}
console.log(seasons);
//26
let x = 2;
let y = -8;
if(x > 0 && y > 0) quadrant = 1;
else if(x > 0 && y < 0) quadrant = 4;
else if(x < 0 && y <0) quadrant = 3;
else quadrant = 2;
console.log(quadrant);
//27
let temperature1;
let pressure;
if(pressure === 1){
    if(temperature1 > 100){
        console.log("gas");
    }
    else if(100 > temperature1 > 0){
        console.log("liquid");
    }
    else{
        console.log("solid");
    }
}
else console.log("I dont know");

//28
let month_3 = 11;
let isLeapYear1 = true;
let numberM;
switch(month_3){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        numberM = 31;
        break;
    case 9:
    case 4:
    case 6:
    case 11:
        numberM = 30;
        break;
    case 2:
        if(isLeapYear1)
        numberM = 29;
        else numberM = 28;

}
console.log(numberM);


//29
let a = 3;
let b = 3;
let c = 6
if( a+b > c && a+c > b && b+c > a) {
    console.log("The numbers can form a triangle.");}
else {
    console.log("The numbers can't form a triangle.");}

//30
let a_1;
let b_1;
let c_1;
let x1 = ((b_1 + (b_1 * b_1) - 4*a_1*c_1) / 2*a_1*c_1)
let x2 = ((b_1 - (b_1 * b_1) - 4*a_1*c_1) / 2*a_1*c_1)
if(x1 === x2 && x1 >= 0) console.log("two real roots: " + x1);
else if(x1 !== x2 && x1 >= 0 && x2 >= 0) console.log("tow real roots: " + x1 + ", " + x2);
else console.log("not real root");
//31
let number_6 = 3;
parity_6 = number_6 % 2 === 0 ? "even" : "odd";
console.log(parity_6);
//32
let age_3 = 12;
canVote_3 = age_3 >= 18 ? true : false ;
console.log(canVote_3);