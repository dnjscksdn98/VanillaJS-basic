// 비동기 처리
// 동기적(Synchronous) 처리: 하나의 작업이 끝난후에 다른 작업 실행 가능
// 비동기적(Asynchronous) 처리: 동시에 여러가지 작업 실행 가능

function work(callback) {
    // 백그라운드에 실행
    setTimeout(() => {
        const start = Date.now();
        for (let i = 0; i < 1000000000; i++) { }
        const end = Date.now();
        console.log(end - start + "ms");
        callback(end - start);
    }, 0);
}
console.log("작업 시작");
work(ms => {
    console.log("작업이 끝났어요");
    console.log(ms + "ms 걸렸다고 해요");
});
console.log("다음 작업");

// Promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("result"); -> 성공
        reject(new Error()); // -> 실패
    }, 1000);
});

myPromise
    .then(result => {
        console.log(result);
    })
    .catch(e => {
        console.error(e);
    });

//
function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const value = n + 1;
            if (value === 5) {
                const error = new Error();
                error.name = "ValueIsFiveError";
                reject(error);
                return;
            }
            console.log(value);
            resolve(value);
        }, 1000);
    });
}

increaseAndPrint(0).then(n => {
    console.log("result: ", n);
});
