// math 모듈 (ESModule)
export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// math모듈을 대표하는 기본값 설정 default
export default function multiply(a, b) {
    return a * b;
}

// CJS (CommonJS)
// module.exports = {
//     // 키와 밸류값이 같을경우는 주석처럼 쓸 필요 X
//     // add : add,
//     // sub : sub
//     add,
//     sub
// };

// ESModule
// export { add ,sub };