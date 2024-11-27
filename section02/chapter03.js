// 배열의 구조 분해 할당
let arr = [1, 2, 3];


// four의 경우에는 undefined, four = 4와 같이 기본값 설정 가능
let [one, two, three, four] = arr;
// console.log(one, two, three);


// 객체의 구조 분해 할당
let person = {
    name : "김치",
    age : 22,
    hobby : "김장"
};

// 객체 또한 아래처럼 할 필요가 없음!
// let name = person.name;
// let age = person.age;
// let hobby = person.hobby;

let {
    name,
    age,
    hobby
} = person;

// *** 배열의 구조분해할당은 [], 객체의 구조분해할당은 {} ***

// 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
// 중괄호를 사용해서 구조분해할당 이라는 것을 명시해 줘야 함
const func = ({name, age, hobby}) => {
    console.log(name, age, hobby);
}

func(person);