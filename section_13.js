// 비구조화 할당(구조 분해)
const object = { a: 1, b: 2 };
const { a, b } = object;
console.log(a);
console.log(b);

function print({ a, b }) {
    console.log(a);
    console.log(b);
}
print(object);

// 기본 값 지정
const object2 = { a: 1 };
function print2({ a, b = 2 }) {
    console.log(a);
    console.log(b);
}
print2(object2);

// 키명 변경
const animal = {
    name: "멍멍이",
    type: "개"
};
const { name: nickname } = animal;

console.log(nickname);
console.log(animal); // 원본 보존

// 배열 비구조화 할당
const array = [1, 2];

const [one, two] = array;
// const [one, two = 2] = array;

console.log(one);
console.log(two);

// 깊은 객체에서 값 가져오기
const deepObject = {
    state: {
        information: {
            name: "Alex",
            languages: ["english", "korean", "french"]
        }
    },
    value: 5
};

// 1 - 더 선호하는 스타일
// const { name, languages } = deepObject.state.information;
// const { value } = deepObject;

// 2
const {
    state: {
        information: { name, languages }
    },
    value
} = deepObject;

const extracted = {
    name,
    languages,
    value
};
console.log(extracted);
