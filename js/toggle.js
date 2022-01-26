const body = document.body;
const ball = document.querySelector(".ball");
const theme = {
  value: "light",
};

const changeTheme = () => {
  if (theme.value == "light") {
    body.style.backgroundColor = "var(--dark)";
    body.style.color = "var(--light)";
    theme.value = "dark";
  } else if (theme.value == "dark") {
    body.style.backgroundColor = "var(--light)";
    body.style.color = "var(--dark)";

    theme.value = "light";
  }
};

ball.addEventListener("click", () => {
  ball.classList.toggle("active");
  changeTheme();
});
