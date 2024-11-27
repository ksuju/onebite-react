// 상수 객체
const animal = {
    type : "강아지",
    name : "하늘",
    color : "white"
};

animal.name = "하늘이" // 수정
animal.age = "4살" // 추가
delete animal.color; // 삭제

// animal 객체 자체를 변경하려고 하면 안됨
animal = {
    type : "고양이"
}

console.log(animal);


// 메서드 (객체의 동작을 정의할 때 사용)
// 객체 안에 함수가 저장됨
const person = {
    name : "사마귀",
    sayHi() {
        console.log("하이루");
    }
};