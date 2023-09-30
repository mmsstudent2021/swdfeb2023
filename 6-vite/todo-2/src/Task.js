import { taskLists } from "./app/selectors";

class Task {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
  }

  getTasks() {
    return this.tasks;
  }

  // View ( UI )

  createTaskUi = (text, index) => {
    const li = document.createElement("li");
    li.setAttribute("data-index", index);
    const delBtn = document.createElement("button");
    delBtn.innerText = "del";
    const jobText = document.createTextNode(text);
    li.append(delBtn);
    li.append(jobText);

    delBtn.addEventListener("click", this.deleteTask);

    return li;
  };

  taskRender = (lists) => {
    taskLists.innerHTML = "";
    lists.forEach((list, index) =>
      taskLists.append(this.createTaskUi(list, index))
    );
  };

  deleteTask = (event) => {
    const currentIndex = event.target.closest("li").getAttribute("data-index");
    this.removeTask(currentIndex);
    this.taskRender(this.getTasks());

    console.log(this.getTasks());
  };

}

export default Task;
