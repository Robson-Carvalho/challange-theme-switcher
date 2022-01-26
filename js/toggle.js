const body = document.body;
const ball = document.querySelector(".ball");
localStorage.setItem("theme", "light");

const changeTheme = () => {
  if (localStorage.theme == "light") {
    body.style.backgroundColor = "var(--dark)";
    body.style.color = "var(--light)";
    localStorage.setItem("theme", "dark");
  } else if (localStorage.theme == "dark") {
    body.style.backgroundColor = "var(--light)";
    body.style.color = "var(--dark)";
    localStorage.setItem("theme", "light");
  }
};

ball.addEventListener("click", () => {
  ball.classList.toggle("active");
  changeTheme();
});
