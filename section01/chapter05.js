// Number Type

let num1 = 28;
let num2 = 1.1;
let num3 = -33;

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN;


// String Type

let myName = "고기";
let myLocation = "시흥";
let introduce = myName + myLocation;


// 템플릿 리터럴 문법 `` (백틱) 사용!!!!
let introduceText = `${myName}는 ${myLocation}에 거주합니다.`;

console.log(introduceText);


// Undifined Type

let none;
console.log(none);

console.log("안녕"*16);
// undifined와 null의 차이점
// null은 개발자가 직접 명시적으로 이 변수에 어떠한 값도 없다는 것을 표기할 때 사용.
// undifined는 변수를 미처 초기화하지 못했거나 존재하지 않는 값을 가져오려고 할 때 발생.