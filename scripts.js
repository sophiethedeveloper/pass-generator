const h3 = document.querySelector("h3");
const button = document.querySelector("button");
const input = document.querySelector("input");
const p = document.querySelector("p");

button.addEventListener("click", () => {
  input.value = GeneratePassword(16);
  console.log(input.value);
  h3.innerText = "Click here to copy password" + input.value;
});

const GeneratePassword = (length = 16) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghjklmnopkrstuvwxyz123456789";

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
  let passText = input.value;
  navigator.clipboard.writeText(passText);
  alert(passText);
};
