// Date 객체를 생성하는 방법
let date1 = new Date(); // 생성자
//console.log(date1);

let date2 = new Date("1993-01-09");
//console.log(date2);

// 타임 스탬프
// 특정 시간이 (UTC)"1970.01.01 00시 00분 00초"로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log("타임 스탬프 : " + ts1);


let date3 = new Date(ts1);
//console.log(date3); //console.log(date1); 와 같음, 현재시간


// 시간 요소들을 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth() + 1; //    자바스크립트의 월(month)은 0부터 11까지임, 따라서 +1 해줘야함
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

console.log(
    "시간 요소 추출 : " +
    year,
    month,
    date,
    hour,
    minute,
    seconds
);



// 시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(56);
date1.setSeconds(22);


// 시간을 여러 포맷으로 출력하기
console.log("toDateString : " + date1.toDateString());
console.log("toLocaleString : " + date1.toLocaleString());
