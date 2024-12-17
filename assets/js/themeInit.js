const htmlElement = document.documentElement;

const theme = localStorage.getItem("theme");

if (!theme) {
  localStorage.setItem("theme", "light");
  htmlElement.classList.remove("dark-theme");
  htmlElement.removeAttribute("data-bs-theme");
} else if (theme === "light") {
	htmlElement.classList.remove("dark-theme");
  htmlElement.removeAttribute("data-bs-theme");
} else if (theme === "dark") {
  htmlElement.classList.add("dark-theme");
  htmlElement.setAttribute("data-bs-theme", "dark");
}
