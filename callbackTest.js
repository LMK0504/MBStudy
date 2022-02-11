//

function run() {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }
 
  run();
  console.log('Done !!!');


/*
//두번쨰
function run() {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
  }, 1000);
}

run();
console.log('Done !!!');
*/

//세번째 콜백사용
/*function run(callback) {
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + 'ms');
    callback();
  }, 1000);
}

run(() => {
  console.log('Done !!!');
});
*/

/*
//4번째 Promise 생성자 활용 resolve -> 정상 작동 (값), reject ->실행 실패 (이유)-->예외처리
function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

run().then(() => {console.log('Done !!!');});
run().then(() => {return run()}).then(() => {console.log('Done !!!');});
*/

//5번째
function run() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          const start = Date.now();
          for (let i = 0; i < 1000000000; i++) {}
          const end = Date.now();
          console.log(end - start + 'ms');
          resolve();
      }, 1000);
  });
}

async function process() {
  await run();
  await run();
  console.log('Done !!!');
}

process();