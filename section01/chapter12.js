
// 1. 함수 표현식
function func() {
    return 1;
}

// func 이라는 함수를 funA 라는 변수에 저장
let funcA = func;

funcA();

// 이렇게 간략하게 만들기도 가능
let varA = function() {
    return 1;
};


// 2. 화살표 함수

// 추가적인 작업이 있을 때
let varB = (value) => {
    console.log(value);
    return value + 1;
} 

// 값을 반환하기만 할 때
let varC = (value) => value + 1;