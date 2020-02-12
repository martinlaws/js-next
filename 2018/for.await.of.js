const promises = [
  new Promise(resolve => resolve(1)),
  new Promise(resolve => resolve(2)),
  new Promise(resolve => resolve(3))
];

// for-of uses regular synchronous iterator
// will not wait for promises to resolve
async function test1() {
  for (const obj of promises) {
    console.log(obj);
  }
}

test1();

// for-await-of uses Async iterator
// waits for each promise to resolve for each loop
async function test2() {
  for await (const obj of promises) {
    console.log(obj);
  }
}

test2();
