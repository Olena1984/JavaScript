// Створити генератор, який би випадковим чином поступово генерував вказану кількість парних чисел.

function* generateEvenNumbers(quantity: number, count: number) {
  while (quantity > 0) {
    const randNum: number = Math.floor(Math.random() * count);
    if (randNum % 2 === 0) {
      yield randNum;
      quantity--;
    }
  }
}
for (const element of generateEvenNumbers(15, 20)) {
  document.write(` ${element}`);
}
