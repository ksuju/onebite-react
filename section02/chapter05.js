// 원시타입 : 값 자체로써 변수에 저장되고 복사됨
// > 실제 메모리 공간에 저장된 원본 데이터의 값은 변하지 않음!, 불변! 자바의 String과 같은 느낌

// 객체타입 : 참조값을 통해 변수에 저장되고 복사됨
// > 메모리상에서 원본 데이터의 값이 수정됨, 가변값

// 객체타입 주의사항 1 : 의도치 않게 값이 수정될 수 있다.
let o1 = {name : "김갑환"}; 
let o2 = o1; // 얕은 복사 > 원본 객체가 수정될 수 있기 때문에 위험
let o3 = {...o1}; // 깊은 복사 > 원본 객체가 수정될 일이 없기 때문에 안전!


// 객체타입 주의사항 2 : 객체간의 비교는 기본적으로 참조값을 기준으로 이루어짐
let a1 = {name : "참치마요"};
let a2 = a1; // 얕은 복사 > 기본 참조값을 그대로 참조
let a3 = {...a1}; // 깊은 복사 > 새로운 참조값(객체) 생성

// a1 === a2 > true, 완전히 같음
// a1 === a3 > false, 참조값이 다름 > 연산의 결과 false 출력
// JSON.stringify() 를 사용해서 객체를 문자열로 변환하여 비교하면 true!



// 객체타입 주의사항 3 : 배열과 함수도 사실 객체이다. > 추가적인 프로퍼티나 메서드 가질 수 있음