// 함수 선언
function add(a, b) {
    return a + b;
}

const sum = add(1, 2);
console.log(sum);

// Template Literal
function hello(name) {
    return `Hello ${name}!`;
}

const result = hello('Alex');
console.log(result);

// 연습
function getGrade(score) {
    if (score === 100) {
        return 'A++';
    } else if (score >= 90) {
        return 'A';
    } else if (score === 89) {
        return 'B++';
    } else if (score >= 80) {
        return 'B';
    } else if (score === 79) {
        return 'C++';
    } else if (score >= 70) {
        return 'C';
    }
}

const grade = getGrade(100);
console.log(grade);

// 화살표 함수
const addNum = (a, b) => {
    return a + b;
};
// const addNum = (a, b) => a + b;
const r = addNum(1, 2);
console.log(r);
