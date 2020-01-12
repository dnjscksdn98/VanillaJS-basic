// if
const a = 1;
if (a + 1 === 2) {
    console.log("a + 1 이 2 입니다.");
}

if (a + 1 === 2) {
    const a = 2;
    console.log("if 문 안의 a 값은 " + a);
}
console.log("if 문 밖의 a 값은 " + a);

// if - else
const b = 10;
if (b > 15) {
    console.log("a 가 15보다 큽니다.");
} else {
    console.log("a 가 15보다 크지 않습니다.");
}

// if - else if
if (b === 5) {
    console.log("5입니다.");
} else if (b === 10) {
    console.log("10입니다");
} else {
    console.log("5도 아니고 10도 아닙니다.");
}

// switch - case
const device = "iphone";
switch (device) {
    case "iphone":
        console.log("아이폰");
        break;
    case "ipad":
        console.log("아이패드");
        break;
    default:
        console.log("모르겠네요");
}
