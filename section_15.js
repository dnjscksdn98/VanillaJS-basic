// scope

const value = "hello";

// global scope
function myFunction() {
    console.log("myFunction: ");
    console.log(value);
}
// function scope
function otherFunction() {
    console.log("otherFunction: ");
    const value = "bye";
    console.log(value);
}
// block scope
function anotherFunction() {
    const value = "byebye";
    if (true) {
        const value = "hihi";
        console.log("block scope: ");
        console.log(value);
    }
    console.log("function scope: ");
    console.log(value);
}

myFunction();
otherFunction();
anotherFunction();

// global scope
console.log("global scope: ");
console.log(value);

// hoisting - 이러한 스타일은 피해야함

// 함수
hoistFunction(); // 아직 선언되지 않은 함수 호출 가능

function hoistFunction() {
    console.log("hello world");
}

// 변수
// const or let doesn't happen
console.log(number);
var number = 2;
// 이렇게 해석함
// var number;
// console.log(number);
// number = 2;
