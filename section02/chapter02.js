function returnFalse() {
    console.log("False 함수");
    return false;
}

function returnTrue() {
    console.log("True 함수");
    return true;
}

// 첫번째 피연산자에서 조건문 결과가 나오면 두번째 피연산자는 안봄 > 단락평가
// returnFalse와 returnTrue의 위치에 따라 콘솔에 찍히는 로그값이 다름 > 왜? 단락평가 때문에
console.log(returnFalse() && returnTrue());


// 단락 평가 활용 사례

function printName(person) {
    if (!person) {
        console.log("person에 값이 없음");
        return;
    }
    console.log(person.name);
}

// 위 코드를 간결하게 만들 수 있음

function printNameTwo(person) {
    const name = person && person.name
    console.log(name || "person에 값이 없음");
}
