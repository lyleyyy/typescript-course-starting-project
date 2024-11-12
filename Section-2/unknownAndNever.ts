let userInput: unknown;
let userName2: any;

userInput = 5;
userInput = "Max";
userName2 = userInput;

let a: any;
let k: unknown;

k = a;
// console.log(typeof k);

function generateError(message: string, code: number): never {
  throw { message: message, code: code };
}

const result = generateError("An Erro!", 500);
console.log(result);
