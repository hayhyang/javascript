// Object.freeze
// 중첩된 객체에는 적용되지 않으므로 한번 더 처리해줘야함
const o1 = {
  name: "kim",
  score: [1, 2],
};

Object.freeze(o1);
Object.freeze(o1.score);
o1.name = "lee";
// o1.score.push(3);

console.log(o1);
