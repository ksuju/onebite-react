// 1. async
// 함수 앞에 붙이는 키워드!
// 어떤 함수를 비동기 함수로 만들어줌
// 함수가 프로미스를 반환하도록 변환해주는 키워드!

// 1-1. 객체 반환 함수
function getData() {
    return {
        name : "콩",
        id : "bean",
    };
}

//console.log(getData());


// 1-2. 원래 promise 객체를 반환하는 함수
function promiseData() {
    return new Promise((resolve, reject) => {
        console.log("Promise 상태: pending");
        setTimeout(() => {
            console.log("Promise 상태: fulfilled");
            resolve({
                name: "슈퍼콩",
                id: "superBean",
            });
        }, 1500);
    });
}

// 호출 및 결과 출력

//console.log(promiseData()); // { name: '슈퍼콩', id: 'superBean' }



// 1-3. async를 사용한 promise 객체 반환 함수
async function getAsyncData() {
    return {
        name : "async 슈퍼콩",
        id : "asyncSuperBean",
    };
}

// 호출 및 결과 출력
//console.log(getAsyncData());





// 2. await 키워드
// async 함수 내부에서만 사용이 가능

// 기존 then메서드를 통한 호출
function printData() {
    getAsyncData().then((result) => {
        console.log("기존");
        console.log(result)
    });
};
printData();


// await 키워드를 통한 호출
async function awaitPrintData() {
    const data = await getAsyncData();
    console.log("await");
    console.log(data)
};
awaitPrintData();