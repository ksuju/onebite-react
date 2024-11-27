// null 병합 연산자
// null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;

// 두 변수 모두 null 또는 undifined가 아닐때
// 앞에 있는 변수가 출력됨.
let var5 = var2 ?? var3;

// 활용 예시
let userName = "낑깡";
let userNickName = "orange";

let displayName = userName ?? userNickName;

// >>>>> 유저네임이 없으면 닉네임 표시, 있으면 유저네임 표시
1

// 삼항 연산자
// let ex = (식) ? a값 : b값 ;