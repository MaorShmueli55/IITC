// # JavaScript String Methods Exercises

//1
function stringLength(str){
    return str.length;
}
console.log(stringLength("aaaaaa"));
//2
function stringToUpperCase(str1){
    return str1.toUpperCase();
}
console.log(stringToUpperCase("maor"));
//3
function stringToLowerCase(str2){
    return str2.toLowerCase();
}
console.log((stringToLowerCase("MAOR")));
//4
function specifiedCharter(str4 , numChar){
    return str4.charAt(numChar);
}
console.log(specifiedCharter("maor" , 2));
//5
function extractsString(str5 , number1 , number2){
    return str5.substring(number1 , number2);
}
console.log(extractsString("Maor Shmueli" , 3 , 7));
//6
function replaseString(str6 , value1){
    return str6.replace(str6 , value1);
}
console.log(replaceString("Maor " , "Shmueli"));
//7
function removeWhitespace(strW){
    return strW.trim();
}
console.log(removeWhitespace("     hrfhru     "));
//8
function startsWith1(str7 , str8){
    return str7.startsWith(str8);
}
console.log(startsWith1("Hello user" , "He"));
//9
function endsWith(str10 , str11){
    return str10.endsWith(str11)
}
console.log((endsWith("Hello Maor" , "Hel")));
//10
function seardhString(strr , strr2){
    return strr.indexOf(strr2);
}
console.log(seardhString("Hello Maor Shmueli , Shmueli" , "Shmueli"));
//11
function splitString(str_1 , splitStr){
    return str_1.split(splitStr);
}
console.log(splitString("Write a function that split" , "function"));
//12
function repeatString(str_3 , numRepeat){
    return str_3.repeat(numRepeat);
}
console.log(repeatString("Maor" , 3));
//13
function concatenateString(str_4 , str_5){
    return str_4.concat(str_5);
}
console.log(concatenateString("Maor" , " Shmueli"));
//14
function pad(strPad , strPad_2 , numP){
    return strPad.padStart(numP , strPad_2);
}
console.log(pad("maor" , "x" , 59));
//15
function extracts(strE , numE){
    return strE.slice(0 , numE);
}
console.log(extracts("Hello Maor" , 5));
//16
function  replaceString(strR , strR2){
  let numR = strR.indexOf(" ");
  let strr = strR.slice( 0 , numR);
  return strR.replace(strr , strR2);
}
console.log(replaceString("Hello Baba" , "Hey"));
//17
function includesS(strI , srtI2){
    return strI.includes(srtI2);
}
console.log(includesS("Maor Shmueli" , "Mar"));
//18
function lastChar(strL){
    let numL = strL.length;
    let lastC = strL[numL - 1];
    return lastC
}
console.log(lastChar("asdfg"));
//19
function emptyString(strE1){
    numE1 = strE1.length;
    if(numE1 === 0) return "empty string";
    else return "not empty string"; 
}
console.log(emptyString("gg"));
//20
function returnEndString(srrR , numR){
    return srrR.slice(numR);
}
console.log(returnEndString("Hello Maor" , 4));
