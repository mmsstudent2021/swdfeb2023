import Task from "../Task";


const taskLists = new Task();


export const addBtnHandler =() => {
    taskLists.addTask(textInput.value);
    console.log(taskLists);
    taskLists.taskRender(taskLists.getTasks());

}