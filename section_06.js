// 배열 선언
const array = [1, 'blabla', {}, [1, 2, 3]];
console.log(array);
console.log(array[0]);

const objects = [{ name: '멍멍이' }, { name: '야옹이' }];
console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

// 새로운 항목 추가
objects.push({ name: '짹짹' });
console.log(objects);
console.log(objects[2]);

// 배열의 길이
console.log(objects.length);
