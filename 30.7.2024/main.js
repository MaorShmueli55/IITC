"use strict"
function pattern(str , num){
     for(let i = 0; i < num; i++){
        console.log(str.repeat(i));
     }
}
// pattern("*" , 9);


function starPattern(str , num){
    for(let i = 1; i <= num; i++){
    let stars = "";
    for(let j = 1; j <= i; j++){
        stars += str;
    }
    console.log(stars);
    }
}
starPattern("j" , 6)


function starPattern_1(str , num){
    let stars = "";
    for(let i = 1; i <= num; i++){
    for(let j = 1; j <= i; j++){
        stars += str;
    }
    stars += "\n"
}
    console.log(stars);
}
starPattern_1("j" , 6);

function makeMultTable(){      // למספר הרוחב j  למספר האורך  i =  - לוח הכפל
    for(let i = 1; i<=10; i++){
        let row = "";
        for(let j = 1; j<=10; j++){
            row += j * i + " ";
        }
        console.log(row);
    }
}
makeMultTable();