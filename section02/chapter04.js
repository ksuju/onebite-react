// Spread 연산자
// > Spread : 흩뿌리다, 펼치다
// > 객체나 배열에 저장된 여러 값을 개별로 뿌려주는 역할

let arr1 = [1, 2, 3];
let arr2 = [arr1[0], arr1[1], arr1[2], 4, 5, 6];
// Spread 연산자 사용
let arr3 = [...arr1, 4, 5, 6];


// 객체 또한 같음

let obj1 = {
    a : 1,
    b : 2
};

let obj2 = {
    ...obj1,
    c : 3,
    d : 4
};


function funcA(p1, p2, p3) {
    console.log("Spread 연산자 : " + p1, p2, p3);
}

// 함수의 매개변수에도 Spread 연산자 사용 가능!!
funcA(...arr1);




// Rest 매개변수
// Rest는 나머지 > 나머지 매개변수
// 여러 개의 매개변수를 받아야 할 때, 배열 형태로 한방에 받을 수 있음
// Rest 매개변수 뒤에 다른 매개변수가 나올 수 없음!
function funcB(one, two, three, ...rest) {
    console.log("Rest 매개변수 : " + rest);
}

funcB(...arr1)