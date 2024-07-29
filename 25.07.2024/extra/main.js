// # JavaScript Programming Exercises: BMI 

// let weight = prompt("your weight");
// let height = prompt("your height");
// console.log(weight , height);
// let bmi = weight / (height * height);
// console.log(bmi);
// if(bmi < 18.5) console.log("Underweight");
// else if(18.5 <= bmi > 24.9) console.log("Normal weight");
// else if(25 <= bmi > 29.9) console.log("Overweight");
// else console.log("Obese");

let weight1;
let height1;
let bmi1;

function calculateBMI(weight1 , height1){
    weight1 = Number(prompt("put your weight (kg)"));
    height1 = Number(prompt("put your height (m)"));
}
calculateBMI(weight1 , height1);

function getBMICategory(weight1 , height1){
    bmi1 = Number(weight1 / (height1 * height1));
}
getBMICategory(weight1 , height1);
alert("Your BMI is: " + bmi1);

let isNAN1 = false;
while(isNAN1){
    getBMICategory();
    if(weight1 === isNAN() && height1 === isNAN() && weight1 > 0 && height1 > 0){
        isNAN1 = true
    }
    else{
    console.log(" input is invalid, try agin");
    
    }

}




