// 5가지 배열 변형 메서드

// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 '새로운 배열로' 반환

let arr1 = [
    { name : "강낭콩", hobby : "콩심기" },
    { name : "팥맨", hobby : "팥심기" },
    { name : "완두콩", hobby : "콩심기" }
];

const beanPeople = arr1.filter((item)=>item.hobby === "콩심기");

// console.log(beanPeople);


// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
// forEach 메서드와 동일하게 동작!
// But! map 메서드의 경우 반환값(return)을 설정 가능!
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    //console.log(idx, item);
    return item * 2;
});

// console.log(mapResult1);

// map 메서드 활용!
// 객체 배열에서 특정 값들만 추출해서 새로운 배열 생성
let names = arr1.map((item)=> item.name);
// console.log(names);



// 3. sort
// 배열을 사전순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

// console.log(arr3);

let num = [10, 5, 3];
// 숫자값의 경우 sort 메서드로 정렬이 안됨
// why? 숫자의 대소관계로 정렬한것이 아니라 단순 사전순으로 정렬한것이라서!

num.sort();
// console.log("정렬안됨 : " + num); // 제대로 정렬이 안되는것 확인

// 오름차순 정렬
num.sort((a, b) => {
    if (a > b) {
        return 1; // b, a 배치
    } else if (a < b) {
        return -1; // a, b 배치
    } else { 
        // 두 값의 자리를 바꾸지 마라 (같은 숫자일 경우!)
        return 0;
    }
});

// console.log("정렬됨 : " + num); // 제대로 정렬됨




// 4. toSorted
// 정렬 후 원본 배열은 그대로 두고, 새로운 배열을 반환

let arr5 = ["c", "b", "a"];
const sorted = arr5.toSorted();

// console.log("arr5 : " + arr5);
// console.log("sorted : " + sorted);



// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환함!
let arr6 = ["hi", "im", "orange"];
const joined = arr6.join();
console.log("joined : " + joined);

// 기본 구분자는 ,
// 이를 변경하고 싶다면? join메서드의 인수로 바꾸고 싶은 구분자를 넣어주면 됨
const separator = arr6.join("-");
console.log("separator : " + separator);