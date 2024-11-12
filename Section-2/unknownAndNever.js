"use strict";
let userInput;
let userName2;
userInput = 5;
userInput = "Max";
userName2 = userInput;
let a;
let k;
k = a;
// console.log(typeof k);
function generateError(message, code) {
    throw { message: message, code: code };
}
const result = generateError("An Erro!", 500);
console.log(result);
