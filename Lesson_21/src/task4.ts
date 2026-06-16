// Розробити Класи

class Item {
  left: number = 0;
  top: number = 0;
  imageElement!: HTMLImageElement;
  constructor(
    public xPosition: number,
    public yPosition: number,
    public image: string,
    public interval: number,
  ) {
    this.render();
    this.generatePosition();
    this.intervalUpdate();
  }
  generatePosition() {
    this.imageElement.style.left = this.xPosition + "px";
    this.imageElement.style.top = this.yPosition + "px";
  }
  // checkPosition() { 
  //   if (this.xPosition < 0) {
  //     this.xPosition = 0;
  //   }
  //   if (this.xPosition > window.innerWidth) {
  //     this.xPosition = window.innerWidth - this.imageElement.width;
  //   }
  //   console.log(this.xPosition);
  //    console.log(window.innerWidth);
  //   if (this.yPosition < 0) {
  //     this.yPosition = 0;
  //   }
  //   if (this.yPosition > window.innerHeight) {
  //     this.yPosition = window.innerHeight - this.imageElement.height;
  //   }
  // }
  intervalUpdate() {
    setInterval(() => {}, this.interval);
  }
  createImage() {
    const divEl = document.createElement("div");
    divEl.className = "image";
    const imageEl = document.createElement("img");
    imageEl.src = this.image;
    this.imageElement = imageEl;
    divEl.append(imageEl);
    return divEl;
  }
  render() {
    const container = document.querySelector(".container-images");
    if (container) container.append(this.createImage());
  }
}

class House extends Item {
  isScaled: boolean = false;
  constructor(
    public xPosition: number,
    public yPosition: number,
    public image: string,
    public interval: number,
  ) {
    super(xPosition, yPosition, image, interval);
  }
 
  intervalUpdate() {
    setInterval(() => {
      if (this.isScaled) {
        this.imageElement.style.transform = "scale(1)";
        this.isScaled = false;
      } else {
        this.imageElement.style.transform = "scale(1.3)";
        this.isScaled = true;
      }
    }, this.interval);
  }
}
class Dog extends Item {
  newPosition: number = 0;
  vx:number = Math.random() * 100 - 50;
  constructor(
    public xPosition: number,
    public yPosition: number,
    public image: string,
    public interval: number,
  ) {
    super(xPosition, yPosition, image, interval);
  }
   checkPosition() { 
    const container = document.querySelector('.container-images') as HTMLDivElement

    if (this.xPosition < 0) {
      this.xPosition = 0;
      this.vx =- this.vx
    }
    if (this.xPosition > container.clientWidth) {
      this.vx =- this.vx
      this.xPosition = container.clientWidth
    }

  }
  intervalUpdate() {
    setInterval(() => {
      this.xPosition = this.xPosition + this.vx
      this.checkPosition();
      this.imageElement.style.left = this.xPosition + "px";
    }, this.interval);
  }
}
class Bird extends Item {
  newXPosition: number = 0;
  newYPosition: number = 0;
  vx:number = Math.random() * (40-20)
  vy:number =Math.random() * 40-20
  constructor(
    public xPosition: number,
    public yPosition: number,
    public image: string,
    public interval: number,
  ) {
    super(xPosition, yPosition, image, interval);
  }
  checkPosition() { 
    const container = document.querySelector('.container-images') as HTMLDivElement
    if (this.xPosition < 0) {
      this.xPosition = 0;
     this.vx=-this.vx
    }
    if (this.xPosition >container.clientWidth) {
      this.vx=-this.vx
      this.xPosition = container.clientWidth
    }
    if (this.yPosition < 0) {
      this.yPosition = 0;
      this.vy=-this.vy
    }
    if (this.yPosition > container.clientHeight) {
     this.vy=-this.vy
     this.yPosition = container.clientHeight
    }
  }
  intervalUpdate() {
    setInterval(() => {
      this.xPosition = this.xPosition + this.vx;;
      this.yPosition = this.yPosition + this.vy;
      this.checkPosition();
     
      this.imageElement.style.left = this.xPosition + "px";
      this.imageElement.style.top = this.yPosition + "px";
    }, this.interval);

    
  }
}
const hImage = "images/house.png";
const dImage = "images/dog.png";
const bImage = "images/bird.png";
window.onload = function () {
  const house = new House(50, 50, hImage, 1000);
  const dog = new Dog(50, 250, dImage, 500);
  const bird = new Bird(250, 100, bImage, 1000);
};
