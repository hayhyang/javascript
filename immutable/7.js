// const vs Object.freeze
// const 은 이름을 불변, Object.freeze 는 속성의 값을 불변

const o1 = { name: "kim" };
const o2 = { name: "kim" };

o1.name = "seo";
// const 이름으로 지정된 것 외의 다른 것으로 바꾸는 것은 불가능
// o1 = o2;

//Object.freeze의는 그 안의 값을
// Object.freeze(o1);
// o1.name = "seo"; >> 이 코드는 에러

console.log(o1 === o2);
