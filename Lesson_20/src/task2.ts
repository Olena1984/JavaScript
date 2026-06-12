// Байрактар. З верхньої частини екрану у випадковій позиції по горизонталі з’являються танки, які їдуть вниз. При кліку на танк він вибухає і зникає з екрану.

class Bayraktar {
  tank: HTMLDivElement;
  constructor(public speed: number) {
    this.tank = this.createTank();
    this.speed = Math.random() * this.speed;
  }

  createTank() {
    const divEl = document.createElement("div");
    divEl.className = "tank";
    const imgEl = document.createElement("img");
    imgEl.src = "images/tank.png";
    divEl.append(imgEl);
    return divEl;
  }
  tankPosition() {
    const leftPosition = Math.floor(Math.random() * 90);
    this.tank.style.left = String(`${leftPosition}%`);
  }
  moveTank() {
    let topPosition = -30;
    const interval = setInterval(() => {
      const newTopPosition = topPosition + this.speed;
      topPosition = newTopPosition;
      this.tank.style.top = String(`${topPosition}%`);

      if (topPosition > 90) {
        console.log(topPosition);
        
        this.tank.remove();
        clearInterval(interval);
      }
    }, 16);
  }
  shotTank() {
    this.tank.onclick = () => {
      const imgEl = this.tank.querySelector("img") as HTMLImageElement;
      console.log(imgEl);
      imgEl.src = "images/fire.png";
      console.log(imgEl.src);
      setTimeout(() => {
        this.tank.remove();
      }, 400);
    };
  }
  render() {
    const container = document.querySelector(".tanks") as HTMLDivElement;
    if (container) container.append(this.tank);
    this.tankPosition();
    this.moveTank();
    this.shotTank();
  }
}
window.onload = function () {
  for (let tank = 0; tank < 20; tank++) {
    const bayraktar = new Bayraktar(0.1);
    bayraktar.render();
  }
};
