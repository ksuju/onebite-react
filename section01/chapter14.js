// 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {};          // 객체 리터럴 (대부분 사용)

// 객체 프로퍼티 (객체 속성)
// 키 값으로는 문자열 or 숫자만 가능
let person = {
    name : "삼계탕",
    age : 1,
    job : "음식",
    "one two" : true // 띄어쓰기의 경우 쌍따옴표로 감싸줘야함
}

// 사용법 (점 표기법, 괄호 표기법), 존재하지 않는 프로퍼티에 접근하면 undefined
let name = person.name; 

let age = person["age"];

let ageage = "age";
let age2 = person[ageage];


// 새로운 프로퍼티 추가하는 방법, 수정 방법도 동일함
person.ex = "뭐적지";
person["ex2"] = "여기는 뭐적지...";

console.log(person);


// 프로퍼티 삭제하는 방법
delete person.ex2;


// 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "바나나" in person;

console.log(result1); // 프로퍼티 존재하기에 true 반환
console.log(result2); // 프로퍼티 존재하지 않기에 false 반환