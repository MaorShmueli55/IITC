// 1
let arr = [1, 2, 3, 4, 5];
arr.forEach((num)=>{
    console.log(num);
})

//2
arr.forEach((num)=>{
    console.log(num*num);
})

//3
let newArr = []; 
arr.forEach((num)=>{
    newArr.push(num*num)
})
console.log(newArr);

//4
let sum = 0;
arr.forEach((num)=>{
    sum+=num
})
console.log(sum);

//5 
const strArr = ['Hello', ' ', 'World', '!'];
let str = "";
strArr.forEach((Word)=>{
    str += Word
})
console.log(str);

//6
newArr = arr.map((num)=>{
    return num*2;
})
console.log(newArr);

//7
const fruits = ['תפוח', 'בננה', 'דובדבן'];
newArr=fruits.map((fruit)=>{
    return fruit.length
});
console.log(newArr);

//8
arr = [1, 4, 9, 16, 25];
newArr = arr.map((num)=>{
    return Math.sqrt(num)
})
console.log(newArr);

//9
arr = ['Hello', 'World'];
newArr = arr.map((str)=>{
    return str.toUpperCase();
})
console.log(newArr);

//10
arr = [true, false, true];
newArr = arr.map((bool)=>{
    return !bool
})
console.log(newArr);

//11
arr = [1, 2, 3, 4, 5, 6];
newArr = arr.filter((num)=>{
    return num%2 === 0
})
console.log(newArr);

//12
arr = ['תפוח', 'בננה', 'דובדבן', 'תמר', 'אלדרברי'];
newArr = arr.filter((str)=>{
    return str.length > 5
})
console.log(newArr);

//13
arr = [5, 10, 15, 20, 25];
newArr = arr.filter((num)=>{
    return num > 10
})
console.log(newArr);

//14
arr = ['תפוח', 'בננה', 'תפוז', 'דובדבן'];
newArr = arr.filter((str)=>{
    return str[0] === `ת`
})
console.log(newArr);

//15
arr = [1, 2, 3, 4, 5, 6];
newArr = arr.filter((num, index)=>{
    return index%2 === 0
})
console.log(newArr);

//16
arr = [1, 2, 3, 4, 5];
sum = arr.reduce((total, num)=>{
    return total + num
})
console.log(sum);

//17
arr = [1, 2, 3, 4, 5];
sum = arr.reduce((total, num)=>{
    return total * num
})
console.log(sum);

//18
arr = [10, 5, 15, 20, 25];
sum = arr.reduce((max, num)=>{
    if(max < num){max = num}
    return num
})
console.log(sum);

//19
arr = ['שלום', ' ', 'עולם', '!'];
sum = arr.reduce((total, str)=>{
    return total + str
})
console.log(sum);

//20
arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
sum = arr.reduce((total, num)=>{
    if(total[num]){
        total[num] ++
    }else{
        total[num] = 1
    }
    return total
}, {})
console.log(sum);

//21
arr = [1, 2, 3, 4, 5];
sum = arr.some((num)=>{
    return num > 3
})
console.log(sum);

//22
arr = [2, 4, 6, 8, 10];
sum = arr.every((num)=>{
    return num %2 === 0
})
console.log(sum);

//23
arr = ['תפוח', 'בננה', 'דובדבן'];
sum = arr.some((num)=>{
    return num.length > 5
})
console.log(sum);

//24
const words = ['חתול', 'כלב', 'פיל'];
const consonants = 'אבגדהוזחטיכלמנסעפצקרשת'; 
const allStartWithConsonant = words.every(word => consonants.includes(word[0]));
console.log(allStartWithConsonant); 

//25
arr = [false, false, true, false];
sum = arr.some((num)=>{
    return num
})
console.log(sum);

//26
arr = [1, 2, 3, 4, 5];
sum = arr.find((num)=>{
    return num>3
})
console.log(sum);

//27
arr = [1, 3, 5, 2, 4, 6];
sum = arr.findIndex((num)=>{
    return num%2 === 0
})
console.log(sum);

//28
arr = ['תפוח', 'בננה', 'דובדבן'];
sum = arr.find((num)=>{
    return num.length>5
})
console.log(sum);

//29
arr = ['תפוח', 'בננה', 'דובדבן', 'תמר'];
sum = arr.findIndex((num)=>{
    return num === 'דובדבן'
})
console.log(sum);

//30
arr = [1, 2, 3, -4, 5, -6];
sum = arr.find((num)=>{
    return num < 0
})
console.log(sum);

//31
arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
sum = arr.sort((a , b)=>{
    return a - b;
})
console.log(sum);

//32
arr = ['בננה', 'דובדבן', 'תפוח', 'תמר'] ;
sum = arr.sort((a , b)=>{
    return a - b;
})
console.log(sum);

//33
arr = [3, 1, 4, 1, 5, 9, 2, 6, 5] ;
sum = arr.sort((a , b)=>{
    return b-a;
})
console.log(sum);

//34
arr =  ['בננה', 'דובדבן', 'תפוח', 'תמר'];
sum = arr.sort((a , b)=>{
    return a.length - b.length;
})
console.log(sum);

//35
arr = [{name: 'יוחנן', age: 25}, {name: 'יעל', age: 30}, {name: 'בועז', age: 20}];
sum = arr.sort((a , b)=>{
    return a.age - b.age;
})
console.log(sum);

//36
arr =  [1, [2, 3], [4, [5, 6]]];
sum = arr.flat(3)
console.log(sum);

//37
arr =  [1, [2, [3, [4]]]];
sum = arr.flat(2)
console.log(sum);

//38
arr = [1, 2, , 4, 5];
sum = arr.flat()
console.log(sum);

//39
arr = ['א', ['ב', 'ג'], 'ד'];
sum = arr.flat()
console.log(sum);

//40
arr = [1, [2, [3, [4, [5]]]]];
sum = arr.flat(Infinity)
console.log(sum);

//41
arr = ['א', 'ב', 'ג', 'ד'];
let obj = {};
arr.forEach((letter , index)=>{
    obj[letter] = index
})
console.log(obj);

//42
arr = [10, 20, 30, 40];
obj = {};
arr.map((num , index)=>{
    obj[num] = index
})
console.log(obj);

//43
arr =['תפוח', 'בננה', 'אבטיח', 'תמר'];
sum = arr.filter((str)=>
    str.includes("א"))
console.log(sum);

//44
arr =['א', 'ב', 'א', 'ג', 'ב', 'א'];
sum = arr.reduce((obj , letter)=>{
   if(obj[letter]){
    obj[letter]++;
   }else{
    obj[letter] = 1;
   }
   return obj
},{})
console.log(sum);

//45
arr = ['שלום', 'עולם', 'אווהסקריפט'];
sum = arr.some((num)=>{
    return num === `ז`
})
console.log(sum);

//46
arr = [2, 4, 6, 8] ;
sum = arr.every((num)=>{
    return num % 2 === 0;
})
console.log(sum);

//47
arr = [{id: 1, status: 'לא פעיל'}, {id: 2, status: 'פעיל'}];
sum = arr.find((obj)=>{
    return obj.status === 'פעיל'
})
console.log(sum);

//48
arr = [3, 7, -2, 9, -5];
sum = arr.findIndex((num)=>{
    return num < 0
})
console.log(sum);

//49
arr =  ['JavaScript', 'Python', 'Ruby', 'Java'];
sum = arr.sort((a , b)=>{
    return b.length - a.length;
})
console.log(sum);

//50
arr = [1, [2, [3]], [4, [5]]];
sum = arr.flat(1)
console.log(sum);

//51
arr =  ['ש', 'ל', 'ו', 'ם'];
str = ""
arr.forEach((letter)=>{
    str += letter
})
console.log(str);

//52
arr = [1, 2, 3, 4, 5];
newArr= arr.map((num)=>{
    return num+10;
})
console.log(newArr);

//53
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
newArr= arr.filter((num)=>{
    return num%3 === 0;
})
console.log(newArr);

//54
arr = ['קצר', 'בינוני', 'הכי ארוך', 'ארוך יותר'];
newArr= arr.reduce((max, str)=>{
    if(max < str.length){
        max = str.length
    }
    return max
},0)
console.log(newArr);

//55
arr = [1, 3, 5, 7, 9];
sum = arr.some((num)=>{
    return num % 2 === 0
})
console.log(sum);

//56
arr = ['תפוח', 'תפ', 'תפוז'];
sum = arr.every((str)=>{
    return str.startsWith(`תפ`)
})
console.log(sum);

//57
arr = [{id: 1, completed: false}, {id: 2, completed: true}];
sum = arr.find((obj)=>{
    return obj.completed === true
})
console.log(sum);

//58
arr = ['תפוח', 'בננה', 'דובדבן'];
sum = arr.findIndex((str)=>{
    return str === 'בננה'
})
console.log(sum);

//59
const people = [
    { name: 'יוחנן', age: 25 },
    { name: 'יעל', age: 30 },
    { name: 'בועז', age: 20 }
  ];
  people.sort((a, b) => a.name.localeCompare(b.name));
  console.log(people);

//60
arr =  [1, [2, 3], [4, [5, 6]]] ;
sum = arr.flat(2)
console.log(sum);

//61
str = 'שלום';
str.split('').forEach(char => {
  console.log(char);
});

//62

//63

//64

//65
arr = ['שלום', 'עולם', 'גאווהסקריפט'];
sum = arr.some((str)=>{
    return str.length > 10
})
console.log(sum);

//66
arr = [10, 20, 30, 40, 50] ;
sum = arr.every((num)=>{
    return num > 5
})
console.log(sum);

//67
arr = ['ספר', 'דלת', 'חלון'];
sum = arr.find((str)=>{
    return str.includes(`ו`)
})
console.log(sum);

//68
arr = [5, 10, 15, 20];
sum = arr.findIndex((num)=>{
    return num > 10
})
console.log(sum);

//69
arr =  ['אאא', 'בב', 'ג'] ;
sum = arr.sort((a , b)=>{
    return a.length -b.length;
})
console.log(sum);

//70
arr = [1, [2, [3, [4]]]];
sum = arr.flat(3)
console.log(sum);

//71
arr =  [1, 4, 9, 16];
newArr= []
arr.forEach((num)=>
    newArr.push(Math.sqrt(num))
)
console.log(newArr);

//72
const letters = ['א', 'ב', 'ג'];
const doubledLetters = letters.map(letter => letter.repeat(2));
console.log(doubledLetters); 

//73
const numbers = [5, 10, 15, 20, 25];
const filteredNumbers = numbers.filter(num => num >= 10 && num <= 20);
console.log(filteredNumbers);

//74
const array = [{א: 1}, {ב: 2}, {ג: 3}];
const mergedObject = array.reduce((acc, obj) => {
  return { ...acc, ...obj };
}, {});
console.log(mergedObject);

//75
arr = [{x: 1}, {y: 2}, {z: 3}];
sum = arr.some((obj)=>{
    return obj['y']
})
console.log(sum);

//76
const strings = ['א1', 'ב2', 'ג3'];
const allContainLetterAndNumber = strings.every(str => /[א-ת]/.test(str) && /\d/.test(str));
console.log(allContainLetterAndNumber); 

//77
arr = [{מחיר: 60}, {מחיר: 40}, {מחיר: 70}];
sum = arr.find((obj)=>{
    return obj.מחיר < 50
})
console.log(sum);

//78
arr = [1, '', true, 0, null, 'שלום'];
sum = arr.findIndex((str)=>{
    return str === null
})
console.log(sum);

//79
arr = [3.14, 2.71, 1.41, 1.73];
sum = arr.sort((a , b)=>{
    return a-b;
})
console.log(sum);

//80
arr =  [1, [2, 3], [4, [5, 6]]] ;
sum = arr.flat(Infinity)
console.log(sum);