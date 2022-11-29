// 중첩된 객체의 복사
const o1 = {
  name: "kim",
  score: [1, 2, 3],
};

const o2 = Object.assign({}, o1);
// 중첩된 객체의 값은 원본과 동일하다.
// 아래와 같이 새로운 배열로 복제하면 됨
o2.score = o2.score.concat();
o2.score = [1, 2];

console.log(o1, o2, o1 === o2, o1.score === o2.score);
