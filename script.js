import { animate, scroll } from "https://cdn.skypack.dev/motion";

animate("body", { opacity: [0, 1] }, { duration: 2 });

scroll(animate(".progress", { scaleX: [0, 1] }));

//Darkmode

let darkModeState = false;

const button = document.querySelector(".dark_mode_button");

function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
  darkModeState = state;
}

// Initial setting
toggleDarkMode(localStorage.getItem("dark-mode") == "true");

button.addEventListener("click", () => {
  darkModeState = !darkModeState;

  toggleDarkMode(darkModeState);
  button.textContent = darkModeState ? "Light Mode" : "Dark Mode";
});
