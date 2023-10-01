import { taskLists } from "./app/selectors";

const tasks = new Proxy([], {
  // get(target, property, receiver) {
  //   console.log("U access proxy");

  //   return Reflect.get(target, property, receiver);
  // },
  set(target, property, value, receiver) {
    // console.log("U change proxy");

    taskRender(getTask())

    return Reflect.set(target, property, value, receiver);
  },
});

export const getTask = () => {
  return tasks;
};

export const addTask = (job) => {
  tasks.push(job);
};

export const removeTask = (index) => {
  tasks.splice(index, 1);
};

// view (UI)

export const createTaskUi = (text, index) => {
  const li = document.createElement("li");
  li.setAttribute("data-index", index);
  const delBtn = document.createElement("button");
  delBtn.innerText = "del";
  const jobText = document.createTextNode(text);
  li.append(delBtn);
  li.append(jobText);

  delBtn.addEventListener("click", deleteTask);

  return li;
};

export const deleteTask = (event) => {
  const currentIndex = event.target.closest("li").getAttribute("data-index");
  removeTask(currentIndex);
  // taskRender(getTask());
};

export const taskRender = (lists) => {
  taskLists.innerHTML = "";
  lists.forEach((list, index) => taskLists.append(createTaskUi(list, index)));
};
