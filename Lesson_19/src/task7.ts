// Відобразити падаючий сніг. Сніжинка з’являється у верхній частині екрану (top =0) і з випадковою швидкістю рухається вниз (у setInterval викликати метод, у якому додавати крок до top). Як тільки сніжинка досягає нижньої частини екрану (top>maxTop) вона знову повинна з’явитись у верхній частині екрану (top=0).


function snowFlakes() {
  const parentDivEl = document.querySelector(".snowflakes") as HTMLBaseElement;
  for (let i = 0; i < 100; i++) {
    const divSnowflake = document.createElement("div");
    divSnowflake.className = "snowflake";
    divSnowflake.innerHTML = "&#10052;";

    const randPositionLeft = Math.floor(Math.random() * 100);
    divSnowflake.style.left = randPositionLeft + "%";
    parentDivEl.appendChild(divSnowflake);

    const maxTop = parentDivEl.clientHeight;
    let topPosition = -50;
    let speedSnowflake = 1 + Math.random() * 1;
    setInterval(() => {
      topPosition += speedSnowflake;
      divSnowflake.style.top = topPosition + "px";
      if (topPosition > maxTop) topPosition = 0;
    }, 16);
  }
}
// const newSnowflake= snowFlakes()
window.onload = snowFlakes;
