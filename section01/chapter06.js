


//명시적 형변환

let str1 = "10";

let strToNum1 = Number(str1);

let str2 = "10개";
let strToNum2 = parseInt(str2);


// parseInt시 문자열이 앞에 있을 경우 변환이 잘 이루어지지 않을 수 있음
let str3 = "ten_10";
let strToNum3 = parseInt(str3);


let num1 = 19;
let numToString = String(num1);

console.log(strToNum1);
console.log(strToNum2);
console.log(strToNum3);
console.log(numToString); 