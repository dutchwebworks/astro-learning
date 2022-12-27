const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
const darkModeClass = "dark-mode";
const darkModeStorageKey = darkModeClass;
let darkMode = localStorage.getItem(darkModeStorageKey);

const enableDarkMode = () => {
  document.body.classList.add(darkModeClass);
  localStorage.setItem(darkModeStorageKey, "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove(darkModeClass);
  localStorage.setItem(darkModeStorageKey, "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleDarkModeBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem(darkModeStorageKey);

  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
