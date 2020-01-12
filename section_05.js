// 객체 선언
// 키: 값
const dog = {
    name: "멍멍이",
    age: 2,
    cute: true
};
console.log(dog);
console.log(dog.name);
console.log(dog.age);

//

const ironMan = {
    name: "토니 스타크",
    actor: "로버트 다우니 주니어",
    alias: "아이언맨"
};
console.log(ironMan);

function print(hero) {
    const text = `${hero.alias}(${hero.name}) 역할을 맡은 배우는 ${
        hero.actor
        } 입니다.`;
    console.log(text);
}
print(ironMan);

// 비구조화 할당
function print2(hero) {
    const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

function print3({ alias, name, actor }) {
    const text = `${alias}(${name}) 역할을 맡은 배우는 ${actor} 입니다.`;
    console.log(text);
}

const { name } = ironMan;
console.log(name);

// 객체 안에 함수 넣기
// 화살표 함수는 불가
const cat = {
    name: "야옹이",
    sound: "야옹",
    say() {
        console.log(this.sound);
    }
};
cat.say();

// Getter & Setter
const numbers = {
    a: 1,
    b: 2,
    get sum() {
        console.log("sum 함수가 실행됩니다");
        return this.a + this.b;
    }
};
console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

const dog2 = {
    _name: "멍멍이",
    set name(name) {
        console.log("이름이 바뀝니다.");
        this._name = name;
    }
};
console.log(dog2._name);
dog2.name = "몽몽이";
console.log(dog._name);

const numbers2 = {
    _a: 1,
    _b: 2,
    sum: 3,
    calculate() {
        console.log("calculate");
        this.sum = this._a + this._b;
    },
    get a() {
        return this._a;
    },
    get b() {
        return this._b;
    },
    set a(value) {
        this._a = value;
        this.calculate();
    },
    set b(value) {
        this._b = value;
        this.calculate();
    }
};

console.log(numbers2.sum);
numbers2.a = 5;
numbers2.b = 7;
console.log(numbers2.sum);
console.log(numbers2.sum);
