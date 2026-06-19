//  Зберігати у пам’яті список справ, які користувачу треба виконати (зберігати у localStorage). Періодично випадковим чином вибирати якусь з справ і виводити користувачу (з використанням confirm). Якщо користувач натискає на «Ок», то видаляти цю задачу.

class Task {
  constructor(
    public tasksList: string[],
    public time: number,
  ) {}
  setTasks() {
    localStorage.setItem("Tasks", JSON.stringify(this.tasksList));
  }
  randomChoose() {
    const interval = setInterval(() => {
    if (this.tasksList.length === 0) return
      const randomTask = Math.floor(Math.random() * this.tasksList.length);
      if (confirm(this.tasksList[randomTask])) {
        this.tasksList.splice(randomTask, 1);

        localStorage.setItem("Tasks", JSON.stringify(this.tasksList));
        if (this.tasksList.length === 0) clearInterval(interval);
      }
    }, this.time);
  }
}
const tasksList: string[] = [
  "ранкова пробіжка",
  "тренування у залі",
  "сеанс у кінотеатрі",
  "курси по вивченню іноземної мови",
  "поїдка на відповинок",
  "політ на пароплані",
];

window.onload = function () {
  const tasks = new Task(tasksList, 3000);
  tasks.setTasks();
  tasks.randomChoose();
};
