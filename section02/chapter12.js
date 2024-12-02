function task() {
    setTimeout(() => {
        console.log("하이")
    }, 1000)
}


function add1(a, b) {
    setTimeout(() => {
        const sum = a + b;
        console.log("add1 sum : " + sum)
    }, 3000);
}

// 콜백함수 이용
function add2(a, b, callback) {
    setTimeout(() => {
        const sum = a + b;
        callback(sum);
    }, 2000);
}

task()

add1(1,2);

add2(3,4, (value) => {
    console.log("add2 sum : "+ value);
});




// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 4000);
}


function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownedFood);
    }, 1000);
}


function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    }, 1000);
}


orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);


        freezeFood(food, (freezedFood) => {
            console.log(freezedFood);
        });
    });
});

// 콜백함수를 계속 추가하면 인덴트가 계속 깊어짐
// Promise라는 객체를 이용하면 해결 가능!