// 5. 가변과 불변 API 비교
const o1 = [1, 2, 3];
const a = o1;
const b = o1;
// o1.push(4);

const o2 = o1.concat(4);

console.log(o1, a, b, o2);
