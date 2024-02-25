/*const userName = document.querySelector("#name-input");
const userText = document.querySelector("#name-output");

userName.addEventListener("input", handleInput);

function handleInput(event) {
  //console.log("поле змінено");
  //console.log(event.currentTarget);

  console.log(event.currentTarget.value);
}*/
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  let name = input.value.trim();
  output.textContent = name ? name : "Anonymous";
});
