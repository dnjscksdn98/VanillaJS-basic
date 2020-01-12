// for
for (let i = 0; i < 10; i++) {
    console.log(i);
}
for (let i = 10; i > 0; i--) {
    console.log(i);
}

const names = ['멍멍이', '야옹이'];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// while
let i = 0;
while (i < 10) {
    console.log(i++);
}

// for - of
const numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);
}

// 객체 키와 값 가져오기
// 키: 값
const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.keys(doggy));  // 키 
console.log(Object.values(doggy));  // 값
console.log(Object.entries(doggy)); // 배열 형태

// for - in
for (let key in doggy) {
    console.log(key);
}
for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}

// continue & break
for (let i = 0; i < 10; i++) {
    if (i === 2) continue;
    console.log(i);
}
for (let i = 0; i < 10; i++) {
    if (i === 2) break;
    console.log(i);
}

// 연습 & 퀴즈
function sumOf(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);

function biggerThanThree(numbers) {
    let result = [];
    for (let number of numbers) {
        if (number > 3) {
            result.push(number);
        }
    }
    return result;
}
let big = biggerThanThree([1, 2, 3, 4, 5, 6, 7]);
console.log(big);
