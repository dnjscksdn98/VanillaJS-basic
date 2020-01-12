// 함수의 기본 파라미터
function calculateCircleArea(r = 1) {
    // 1
    // const radius = r || 1;
    // return Math.PI * radius * radius;
    // 2
    return Math.PI * r * r;
}

// 화살표 함수
const calculateCircleArea2 = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea(4);
console.log(area);

const area2 = calculateCircleArea();
console.log(area2);

console.log(calculateCircleArea2());
