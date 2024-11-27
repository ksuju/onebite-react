// 콜백함수 > 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미
// A 함수의 인자로 다른 B 함수를 사용, A함수 내부에서 B함수를 사용 가능

function main(value) {
    console.log(value);
    value();
}

function sub() {
    console.log("sub");
}


//main(sub);


// 콜백함수의 활용 > 중복코드를 줄일 수 있음
// 1. 중복코드 발생
function repeat(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}


function repeatDouble(count) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx*2);
    }
}

//repeat(5);
//repeatDouble(5);

// 2. 중복코드를 대폭 줄일 수 있음
function repeatEX(count, callback) {
    for (let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}

repeatEX(5, function (idx) {
    // idx = repeat
    // idx * 2 = repeatDouble
    console.log(idx);
})