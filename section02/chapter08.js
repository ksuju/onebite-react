// 5가지 요소 순회 및 탐색 메서드

// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
// forEach 메서드를 호출한 다음, 인수로 콜백함수를 넣어줌
// item => 현재 요소의 값
// idx => 반복 카운트
// arr => 배열의 길이
// 콜백함수의 매개변수는 정해진 형식에 따라 제공!
// But! item을 제외한 나머지 매개변수는 선택적으로 사용 가능!

// 1번 예제 : 기본 형태
let arr1 = [1, 2, 3];

arr1.forEach(function(item, idx, arr) {
    // console.log(idx, item * 2);
});


// 2번 예제 : 화살표 함수와 push 활용, 빈 배열에 새로운 값 담기
let doubledArr = [];

arr1.forEach((item) => {
    doubledArr.push(item * 2);
});

// console.log("2번 예제 : " + doubledArr);




// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(10);
// console.log(isInclude); // false 반환


// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환해주는 메서드
let arr3 = [10, 20, 30];
let index = arr3.indexOf(3); // 3이라는 요소의 인덱스를 찾아서 반환 > 근데 없네? -1 반환!
let indexHave = arr3.indexOf(30); // 30의 인덱스 2를 반환!
// console.log("index : " + index);
// console.log("indexHave : " + indexHave);


// 4. findIndex
// 특정 요소의 인덱스(위치)를 반환하는 메서드!
// 근데? 모든 요소를 순회하면서, 콜백함수를 만족하는!

let arr4 = [1, 2, 3];
const notFindedIndex = arr4.findIndex((item) => {
    if (item === 10) {
        return true;
    }   // arr4에 10없음 => -1 반환
});

const findedIndex = arr4.findIndex((item) => item % 2 === 0); // 조건식을 리턴하도록
// arr4 배열의 요소가 2로 나누어 떨어질 때의 인덱스를 반환 => 1

// console.log("notFindedIndex : " + notFindedIndex);
// console.log("findedIndex : " + findedIndex);


// indexOf는 객체값이 저장된 배열에서는 인덱스를 찾지 못함! 왜? 얕은비교로 동작해서!
// findIndex는 특정 프로퍼티를 기준으로 비교 가능하기 때문에 객체값도 찾을 수 있음



// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾은 후 요소를 그대로 반환

let arr5 = [
    { name : "토끼" },
    { name : "거북이" }
];

const notFinded = arr5.find(
    (item) => item.name === "강아지"
);

const finded = arr5.find(
    (item) => item.name === "거북이"
);

console.log("notFinded");
console.log(notFinded);
console.log("finded");
console.log(finded);