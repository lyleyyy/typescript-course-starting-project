function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  return cb(result);
}

// printResult(add(5, 12));
// console.log(printResult(add(5, 12)));

let combineValues: (a: number, b: number) => number;

combineValues = add;
// combineValues = printResult;

// console.log(combineValues(8, 8));

// addAndHandle(10, 20, (result) => {
//   return result;
// });

console.log(
  addAndHandle(10, 20, (result) => {
    return result;
  })
);

function sendRequest(data: string, cb: (response: any) => void) {
  // ... sending a request with "data"
  return cb({ data: "Hi there!" });
}

const waya = sendRequest("Send this!", (response) => {
  console.log(response);
  return true;
});

console.log(waya);
