// 산술 연산자
let a = 1 + 2;
console.log(a);

a++;
console.log(a);
++a;
console.log(a);

a--;
--a;
console.log(a);

a += 1;
a -= 1;
console.log(a);

// 대입 연산자 =
let value = 1;

// 논리 연산자
// 우선 순위  ->  NOT > AND > OR

// NOT !
const b = true;
console.log(b);
const c = !true;
console.log(c);

// AND &&
const d = true && true;
console.log(d);

// OR ||
const e = true || false;
console.log(e);

// 비교 연산자
const v1 = 1;
const v2 = 2;
const equals = v1 === v2;
console.log(equals);

// == 와 === 의 차이
// == : 타입을 비교하지 않음
// === : 타입을 비교한다
// === 을 사용하는 것을 권장 !!

const v3 = "a";
const v4 = "b";
const notEquals = v3 !== v4;
console.log(notEquals);

const val1 = 10;
const val2 = 15;
console.log(val1 > val2);
console.log(val1 < val2);
console.log(val1 >= val2);
console.log(val1 <= val2);

// 문자열 붙이기
const s1 = "안녕";
const s2 = "하세요";
console.log(s1 + s2);
