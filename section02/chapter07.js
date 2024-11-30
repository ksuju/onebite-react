// 6가지의 요소 조작 메서드

// push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1,2,3];
arr1.push(4, 5, 6, 7);
const newLength = arr1.push(8, 9);

// console.log(arr1);
// console.log(newLength);


// pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

// console.log(poppedItem);
// console.log(arr2);
// arr2.pop();
// console.log(arr2);



// shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환


// unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드


// slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1, 2, 3, 4, 5]; // 원본 배열
let sliced = arr5.slice(2); // arr5 배열의 2번 인덱스부터 마지막까지 출력
let sliced2 = arr5.slice(2, 4); // arr5 배열의 2번 인덱스부터 4번 인덱스 '전'까지 출력
let sliced3 = arr5.slice(-3);   // arr5 배열의 뒤에서부터 자름! -
// console.log(sliced);
// console.log(sliced2);
// console.log(sliced3);
// console.log(arr5); // 원본 배열은 변경되지 않음!!!!!!!




// concat
// 두개의 서로 다른 배열을 이어 붙여서 '새로운' 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatArr = arr6.concat(arr7);
console.log(concatArr);