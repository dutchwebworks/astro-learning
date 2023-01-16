const darkModeButton = document.getElementById("toggleDarkMode");
const themeModeCookieName = "theme";
const themeModeCookieValue = "dark";

function setCookie(name, value) {
  document.cookie = name + "=" + value + "; Path=/;";
}

function getCookie(name) {
  let match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  if (match) return match[2];
}

function deleteCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

darkModeButton.addEventListener("click", () => {
  const currentMode = getCookie(themeModeCookieName);

  if (currentMode == undefined) {
    setCookie(themeModeCookieName, themeModeCookieValue);
  } else {
    deleteCookie(themeModeCookieName);
  }

  location.reload();
});