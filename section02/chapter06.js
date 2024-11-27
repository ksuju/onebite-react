// 배열 순회
let arr = [1, 2, 3];

// 배열 인덱스
for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);
}

let arr2 = [4, 5, 6, 7, 8];
for (let i = 0; i < arr2.length; i++) {
    //console.log(arr[i]);
}


// for of 반복문    >>>>   배열에만 사용 가능!
for (let item of arr) { 
    console.log(item);
}



// 객체 순회

let person = {
    name : "디지몬",
    age : 22,
    hobby : "포켓몬"
};

// 1. Object.keys 사용
// > 객체에서 key 값들만 뽑아서 새로운 배열로 변환
let keys = Object.keys(person);

for (let key of keys) {
    const value = person[key];
    console.log(key, value);
}


// 2. Object.values 사용
// > 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);



// 3. for in 사용   >>>   객체에만 사용 가능!
for (let key in person) {
    const value = person[key]; // 키값에 해당하는 value값 뽑아냄
    console.log(key, value); // 키, 밸류 출력
}