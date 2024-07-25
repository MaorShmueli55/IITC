// Task_1

let firstName = "Maor";
console.log (firstName)
let lastName = "Shmueli";
console.log (lastName)
let age = 21;
console.log (age)
let isStudent = true;
console.log (isStudent)

let isAdult = age > 18;
console.log(isAdult)

let isJohn = (firstName==="john")
console.log(isJohn)

//Task_2

function greet(firstName , lastName){
   let fullName = firstName + " " + lastName;

    return "Hello, " + fullName.toUpperCase() + "! Welcome to the IITC Bootcamp."
}

console.log(greet("maor" , "shmueli"));

//Task_3

function checkAge(age){
    if(age < 13) return ("You are a child.")
    else if(age >= 13 && age <= 17) return ("You are a teenager.")
    else if (age >= 18 && age <= 64) return ("You are an adult.")
    else return ("You are a senior")
}
console.log (checkAge(64));

function getDayMessage(dayOfWeek){
    switch(dayOfWeek){
        case("Sunday" || "Monday"): 
          return ("Start of the work week!")
          break;
        case("Tuesday"):
          return ("A middle of the week.")
          break;
        case("Wednesday"):
          return ("Tomorrow you say tomorrow")
          break;
        case("Thursday"):
          return ("Last day of the work week!")
          break;
        case("Friday" || "Saturday"):
          return("Its the weekend") 
          break; 
        default:
            return("Invalid day!")

    }
    
}
console.log(getDayMessage("baba"));

// Complex Conditions:

function checkEligibility(age , isStudent){
    if(age < 18 && isStudent) return("You are a minor student.")
    else if(age < 18 && !isStudent) return("You are a minor not-student.")
    else if(18 < age > 24 && isStudent) return("You are a young adult student")
    else if(18< age > 24 && !isStudent) return("You are a young adult not-student.")
    else if(age >= 25 && isStudent) return("You are an adult student.")
    else if(age >= 25 && ! isStudent) return("You are an adult not-student.")    

}
 console.log(checkEligibility(25 , false));

 //String Comparison and Manipulation:

 function formatName(name){
    return (name = name.trim().toLowerCase())
        
 }

let name_1 = "  MAOR   "
name_1 = formatName(name_1);

if( name_1 === "admin") console.log ("Welcome, Admin!");
console.log ("Hello, " + name_1 + "!");



// Nested If Statements:

function checkDiscount(age , isMember){
    if(age < 18)
    {
        if(isStudent) return("You get a 20% discount.")
        else return "You get a 10% discount."
    }
   else if( age >= 65)
   {
      if(isMember) return "You get a 30% discount."
       else return "You get a 20% discount."
   }
    else
    {   
       if(isMember) return "You get a 10% discount."
       else return "No discount available."
    }

   }
console.log(checkDiscount(14 , true));

// Login Validation:

function validateLogin(username , password){
  let storedUsername = "Maor123"
  let storedPassword = "Maorsh12764"
  if(username === storedUsername && password === storedPassword) return "Login successful."
  else return "Invalid username or password."
}

console.log(validateLogin("Maor123" , "Maorsh12764"));

// Substring Extraction:

function extractInitials (firstName  , lastName){
  firstName=firstName.toUpperCase();
  lastName=lastName.toUpperCase();
  return (firstName.charAt(0)+"."+lastName.charAt(0));
}

console.log(extractInitials("maor" , "shmueli"));


// String Replacement:

function maskEmail(email)
{
 let indexG=email.indexOf("@");
 let removeC = email.substring(0 , indexG);
 return email.replace(removeC , "***********");

}

console.log(maskEmail("maorshmueli@gmail.com"));

// Nested If-Else:

function gradeCalculator (score){

if(score >= 90) return "A";
else if(score >= 80) return "B";
else if(score >= 70) return "C";
else if(score >= 60) return "D";
else return "F";
}

console.log(gradeCalculator(100));

// Complex Boolean Conditions:

function canVote(age , isCitizen){
  if(age >= 18 && isCitizen) return "You are eligible to vote.";
  else return "You not are eligible to vote.";
}

console.log(canVote(21 , true));

// String and Number Conversion:

function convertToUpperCaseAndAddAge(name_2 , age){
  age = age.toString();
  return(name_2.toUpperCase() + age);
}
console.log(convertToUpperCaseAndAddAge("maor" , 21));

// Capitalize First Letter:

function capitalize(word){
  return word.charAt(0).toUpperCase() + word.substring(1);
}

console.log(capitalize("maor"));

//Check Substring:

function containsSubstring(mainString , subString){
  if(mainString.includes(subString)) return "true";
  else return "false";
}

console.log(containsSubstring("maorshmueli" , "maor"));