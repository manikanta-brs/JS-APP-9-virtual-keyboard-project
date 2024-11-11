// Define default theme color if not in local storage
const defaultColor = "#1a3d5d"; // Replace with your preferred color or hex code

function setTheme(theme) {
  document.documentElement.style.setProperty("--primary-color", theme);
  localStorage.setItem("iss-theme", theme);
}

// Apply theme from local storage or default
setTheme(localStorage.getItem("iss-theme") || defaultColor);

// Keyboard script
const keys = document.querySelectorAll(".keys");
const textarea = document.querySelector("textarea");
const deleteBtn = document.getElementById("delete");
const spaceBtn = document.getElementById("space");
const shiftbtn = document.getElementById("shift");
const clearBtn = document.getElementById("clear");

let chars = [];

// Add both click and touchstart events for mobile compatibility
keys.forEach((btn) => {
  btn.addEventListener("click", () => addCharacter(btn));
  btn.addEventListener("touchstart", () => addCharacter(btn));
});

deleteBtn.addEventListener("click", deleteCharacter);
deleteBtn.addEventListener("touchstart", deleteCharacter);

spaceBtn.addEventListener("click", addSpace);
spaceBtn.addEventListener("touchstart", addSpace);

shiftbtn.addEventListener("click", toggleShift);
shiftbtn.addEventListener("touchstart", toggleShift);

clearBtn.addEventListener("click", clearText);
clearBtn.addEventListener("touchstart", clearText);

function addCharacter(btn) {
  textarea.value += btn.innerText;
  chars = textarea.value.split("");
}

function deleteCharacter() {
  if (chars.length > 0) {
    chars.pop();
    textarea.value = chars.join("");
  }
}

function addSpace() {
  textarea.value += " ";
  chars = textarea.value.split("");
}

function toggleShift() {
  keys.forEach((btn) => {
    btn.classList.toggle("upper");
  });
}

function clearText() {
  textarea.value = "";
  chars = [];
}
