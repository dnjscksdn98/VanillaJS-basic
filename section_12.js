// 조건문 더 스마트하게 쓰기

// 배열을 사용
function isAnimal(text) {
    const animals = ["cat", "dog", "turtle", "bird"];
    return animals.includes(text);
}

const isAnimal2 = text => ["cat", "dog", "turtle", "bird"].includes(text);

console.log(isAnimal("cat"));
console.log(isAnimal("computer"));
console.log(isAnimal2("dog"));

// 객체를 사용
function getSound(animal) {
    const sounds = {
        dog: "멍멍",
        cat: "야옹",
        bird: "짹짹"
    };
    return sounds[animal] || "...?";
}

console.log(getSound("dog"));
console.log(getSound("human"));

//
function makeSound(animal) {
    const tasks = {
        dog: () => {
            console.log("멍멍");
        },
        cat() {
            console.log("야옹");
        },
        // 이 방법은 선호하지 않음
        bird: function () {
            console.log("짹짹");
        }
    };
    const TASK = tasks[animal];
    if (!TASK) {
        console.log("...?");
        return;
    }
    TASK();
}

makeSound("dog");
makeSound("turtle");
