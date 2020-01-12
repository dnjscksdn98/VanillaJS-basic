// spread 연산자(...)
// 기존의 객체를 복사
const slime = {
    name: "슬라임"
};

const cuteSlime = {
    // name: "슬라임",
    ...slime,
    attribute: "cute"
};

const purpleCuteSlime = {
    // name: "슬라임",
    // attribute: "cute",
    ...cuteSlime,
    color: "purple"
};

// 배열에서도 사용 가능
const animals = ["개", "고양이", "참새"];
const anotherAnimals = [...animals, "비둘기"];
console.log(anotherAnimals);

// 여러번 사용 가능
const numbers = [1, 2, 3, 4, 5];
const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers);

// rest 연산자(...)
const greenCuteSlime = {
    name: "슬라임",
    attribute: "cute",
    color: "green"
};
const { color, ...rest } = greenCuteSlime;
console.log(color);
console.log(rest); // color 를 제외한 나머지 값을 가짐

// 배열에서도 사용 가능
const numbers2 = [1, 2, 3, 4, 5];
const [one, ...rest2] = numbers2;
console.log(one);
console.log(rest2);

// 함수 파라미터에서의 rest
function sum(...params) {
    // 배열 형태로 저장됨
    return params.reduce((acc, cur) => acc + cur, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// 함수 인자에서의 spread
const numbers3 = [1, 2, 3, 4, 5];
console.log(sum(...numbers3));

// 연습
function max(...nums) {
    return nums.reduce((acc, cur) => (cur > acc ? cur : acc), nums[0]);
}
const nums = [1, 2, 3, 4, 10, 5, 6, 7];
const result = max(...nums);
console.log(result);
