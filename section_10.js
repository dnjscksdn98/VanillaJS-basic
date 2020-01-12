// 삼항 연산자
// 조건 ? 참 : 거짓
const array = [];
let text = array.length === 0
    ? "배열이 비어있습니다."
    : "배열이 비어있지 않습니다.";
console.log(text);


// Falsy
// 조건문에서 false 로 간주한다
console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!"");
console.log(!NaN); // Not a Number

// Truthy
// Falsy 한 값을 제외한 모든 값들
console.log(!3);
console.log(!"Hello");
console.log(!["array"]);
console.log(![]);
console.log(!{});

const value = {};
const truthy = !!value; // Truthy 한 값이면 true
console.log(truthy);


// 단축 평가 논리 계산법
// Short-circuit evaluation
const dog = {
    name: "멍멍이"
};

function getName(animal) {
    // if (animal) {
    //   return animal.name;
    // }
    // return undefined;
    return animal && animal.name;
}

const name = getName(dog);
// const name = getName(); -> undefined
console.log(name);

// 문장이 참이면 결과는 오른쪽 값이다
// 문장이 거짓이면 결과는 Falsy 한 값이다
console.log(true && "hello");
console.log(false && "hello");
console.log("hello" && "bye");
console.log(null && "hello");
console.log(undefined && "hello");
console.log("" && "hello");
console.log("hello" && 0);
console.log("hello" && 1);

// 문장이 거짓이면 결과는 오른쪽 값이다
// 문장이 참이면 결과는 Truthy 한 값이다
console.log(false || "hello");
console.log(null || undefined);
console.log(undefined || null);
console.log(0 || "");
