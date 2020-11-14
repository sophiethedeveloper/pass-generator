const input = document.querySelector("input");
const button = document.querySelector("button");
const p = document.querySelector("p");
const h3 = document.querySelector("h3");

button.addEventListener("click", () => {
  p.classList.add("hide");
  input.value = GeneratePassword(16);

  h3.innerText = "Click here to copy password to clipboard!";
});

const GeneratePassword = (length = 16) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXWZabcdefghijklmnopqrstuvwxyz0123456789";

  let password = "";
  for (let i = 0; i < length; ++i) {
    let at = Math.floor(Math.random() * (charset.length + 1));
    password += charset.charAt(at);
  }
  return password;
};

h3.addEventListener("click", () => {
  copyText();
});

const copyText = () => {
  console.log(input.value);
  let t = input.value;

  navigator.clipboard.writeText(t);
  alert(`pass ${t}`);
};
