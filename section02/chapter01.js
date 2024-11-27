// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

// 위 값들은 조건문에서 거짓으로 평가가 됨


// 2. Truthy한 값
// -> 7가지 Falsy한 값을 제외한 나머지 모든 값

let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 3. 활용 사례

function printName(person) {
    if (person === undefined || person === null) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}

// 3-1. 매개변수로 객체를 받을것이라고 예상했는데 undefined가 들어오는 경우 에러 발생!
let person;
printName(person);

// 3-2. 조건문을 통해 undefined와 null값을 걸러줌 > 복잡한 코드
// 3-3. Falsy를 활용, !person > 간결해진 코드

function printNameTwo(person) {
    if (!person) {
        console.log("person의 값이 없음");
        return;
    }
    console.log(person.name);
}