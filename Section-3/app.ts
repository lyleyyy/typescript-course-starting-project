console.log("Sending....111");

const a = 5;
let b = 7;

const btn = document.querySelector("button");

function clickHandler(message: string) {
  console.log("Clicked" + message);
}

if (btn) {
  btn.addEventListener("click", () => clickHandler("You are welcome!"));
}
