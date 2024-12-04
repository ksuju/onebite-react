//const moduleData = require("./math");


// console.log("add : " + moduleData.add(1,2));
// console.log("sub : " + moduleData.sub(1,2));

// 구조분해할당 응용

// const { add, sub } = require("./math");

// console.log("응용 add : " + add(1,2));
// console.log("응용 sub : " + sub(1,2));

// import {add, sub} from "./math.js"; // 확장자 꼭 명시해야됨!
// import mul from "./math.js"; // 대표 함수이기 때문에 이름 아무거나 적어도 됨

// 동일한 경로에서 값을 불러오는 임포트문이 여러개라면 아래처럼 합치기 가능!
import mul, {add, sub} from "./math.js";
import randomColor from "randomcolor";

// console.log("ES 모듈 add : " + add(1,2));
// console.log("ES 모듈 sub : " + sub(1,2));
// console.log("ES 모듈 default -> multiply : " + mul(1,2));

const color = randomColor();
console.log(color);