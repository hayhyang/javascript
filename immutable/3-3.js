const o1 = { name: "kim" };
// {}를 첫번째 인자로 넣어주면 두 객체를 합쳐주는 것이기 때문에 새로운 객체가 리턴된다.
const o2 = Object.assign({}, o1);
// 인자를 객체 하나만 넣으면 그 객체와 동일한 복사본이 나온다.
const o3 = Object.assign(o1);
console.log("o1", o1);
console.log("o2", o2);
console.log("o2", o1 === o2);

// 값이 같은경우 제외하고 합쳐진다.
const o4 = Object.assign({ name: "kim", age: 18 }, o1);
