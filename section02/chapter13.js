// Promise란?
// 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

// 대기(Pending) : 아직 작업이 완료되지 않은 상태
// 성공(Fulfilled) : 비동기 작업이 성공적으로 마무리 된 상태
// 실패(Rejected) : 비동기 작업이 실패한 상태

// 대기 > 성공 : 해결 (Resolve)
// 대기 > 실패 : 거부 (Reject)

// Promise 생성자의 인수로는 비동기작업을 진행할 콜백함수를 넣어줌
const promise = new Promise((resolve, reject) => {
    // 비동기 작업 실행하는 함수
    // executer : resolve, reject의 두가지 매개변수를 받는다
    // resolve : executer 비동기 작업을 성공으로 바꿈
    // reject : executer 비동기 작업을 실패로 바꿈
    // 둘 다 인수로 promise의 결과값을 전달 가능

    setTimeout(() => {
        const num = 10;

        if(typeof num === "number") {
            resolve(num + 10);
        } else {
            reject("num이 숫자가 아닙니다.")
        }
    }, 500);

});

// setTimeout(() => {
//     console.log(promise);
// },3000);



// then 메서드
// -> 그 후에
promise.then((value) => {
    console.log("then : " + value);
});

// catch 메서드
promise.catch((error) => {
    console.log("catch : " + error);
})


// 두 메서드를 이어붙일수도 있음 (Promise Chaining)
// Promise Chaining의 핵심 동작 (결과 전달, 다음 처리 연결)
promise
    .then((value) => {
        console.log("Chaining : " + value);
    })
    .catch((error) => {
        console.log("Chaining : " + error);
    });



// 함수 안에서 promise 객체 활용
function add10(num) {
    const fnPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // const num = 10; > 인수로 받음
    
            if(typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.")
            }
        }, 1000);
    });

    return fnPromise;
}

// 객체 p에 함수 반환된 결과 저장
const p = add10(0);

p.then((result) => {
    console.log("fn, p :" + result);

    //then 내부에서 반환한 결과를 가지고 다시 then 사용 > 콜백지옥...
    const newP = add10(result);
    newP.then((result) => {
        console.log("fn, newP :" + result);
    });
});


// 개선
// p = add(10)
p 
.then((result) => {
    console.log("개선, fn, p :" + result);

    return add10(result); // 1번 then의 결과를 새로운 2번 then메서드의 매개변수로 사용

})
.then((result) => {    
    console.log("개선, fn, newP :" + result);

    return add10(result);
})
.then((result) => {    
    console.log("개선, fn, newP :" + result);
})
.catch((error) => { // Java Catch문 사용하듯이 사용
    console.log(error);
});

