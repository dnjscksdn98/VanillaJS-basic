// forEach
const superHeroes = ["아이언맨", "캡틴 아메리카", "토르"];

function print(hero) {
    console.log(hero);
}
superHeroes.forEach(print);

superHeroes.forEach(function (hero) {
    console.log(hero);
});

superHeroes.forEach(hero => {
    console.log(hero);
});

// map
const array = [1, 2, 3, 4, 5, 6, 7, 8];

const square = n => n * n;
const squared = array.map(square);  // 배열의 각 원소를 하나씩 함수로 전달
console.log(squared);

const items = [
    {
        id: 1,
        text: "hello"
    },
    {
        id: 2,
        text: "bye"
    }
];
const texts = items.map(item => item.text);
console.log(texts);

// indexOf
const index = superHeroes.indexOf("토르");  // 해당 값의 인덱스 위치를 반환
console.log(index);

const todos = [
    {
        id: 1,
        text: "Java",
        done: true
    },
    {
        id: 2,
        text: "function",
        done: true
    },
    {
        id: 3,
        text: "array",
        done: true
    },
    {
        id: 4,
        text: "inner function",
        done: false
    }
];

// findIndex
// 조건에 맞는 객체의 인덱스를 반환
const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);

// find
// 조건에 맞는 객체를 반한
const todo = todos.find(todo => todo.id === 3);
console.log(todo);

// filter
// 특정 조건에 맞는 원소를 새로운 리스트로 반환
const tasksNotDone = todos.filter(todo => todo.done === false);
// const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);

// splice & slice
const numbers = [10, 20, 30, 40];
const index3 = numbers.indexOf(30);

console.log(index3);
const spliced = numbers.splice(index3, 2); // 해당 인덱스부터 n개의 원소 삭제
console.log(spliced);
console.log(numbers);  // 원본 배열이 변한다

const sliced = numbers.slice(0, 2);  // 해당 인덱스부터 n개의 원소 꺼내기
console.log(sliced);
console.log(numbers); // 원본 배열은 변하지 않는다

// shift, pop, unshift, push
const numbers2 = [10, 20, 30, 40];

const value = numbers2.shift(); // 첫 번째 원소 꺼내기
console.log(value);
console.log(numbers2); // 원본 배열에 영향을 준다

const value2 = numbers2.pop(); // 마지막 원소 꺼내기
console.log(value2);
console.log(numbers2); // 원본 배열에 영향을 준다

numbers2.unshift(5); // 맨 앞에 원소 삽입
numbers2.push(50); // 맨 뒤에 원소 삽입

// concat
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concated = arr1.concat(arr2);  // 두 배열을 합치기
console.log(concated);

// join
// separator 을 기준으로 문자열로 분리
const arr3 = [1, 2, 3, 4, 5];
console.log(arr3.join());
console.log(arr3.join(" "));
console.log(arr3.join(", "));

// reduce
// example - 1
const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers3.reduce((accumulator, current) => accumulator + current, 0); // 함수, 초기값(=accumulator)
console.log(sum);

const average = numbers3.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current; // 이 결과가 다음 accumulator 로 변경
}, 0);
console.log(average);

// example - 2
const alphabets = ["a", "a", "a", "b", "c", "c", "d", "e"];
const counts = alphabets.reduce((acc, cur) => {
    if (acc[cur]) {
        acc[cur] += 1;
    } else {
        acc[cur] = 1;
    }
    return acc;
}, {});  // {} : 빈 객체

console.log(counts);
