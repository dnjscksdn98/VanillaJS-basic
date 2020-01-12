// 객체 생성자
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    // this.say = function() {
    //   console.log(this.sound);
    // };
}
// 매번 공통되는 함수를 생성하는 것은 비효율적이므로 프로토타입을 사용
// 함수 또는 값의 재사용성 증가
Animal.prototype.say = function () {
    console.log(this.sound);
};

// const dog = new Animal("개", "멍멍이", "멍멍");
// console.log(dog);
// dog.say();

// 객체 생성자 상속
function Dog(name, sound) {
    Animal.call(this, "개", name, sound);
}
Dog.prototype = Animal.prototype;

const dog = new Dog("멍멍이", "멍멍");
dog.say();

// 클래스
class Animal2 {
    // 생성자 역할
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    // 자동으로 프로토타입 등록
    say() {
        console.log(this.sound);
    }
}
// 클래스 상속
class Cat extends Animal2 {
    constructor(name, sound) {
        super("고양이", name, sound);
    }
}

const cat = new Cat("야옹이", "야옹");
cat.say();
