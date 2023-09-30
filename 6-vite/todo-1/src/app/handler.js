import { addTask, getTask, taskRender } from "../task";
import { taskLists, textInput } from "./selectors";


export const addBtnHandler =() => {
    // console.log(textInput.value);
    addTask(textInput.value);
    taskRender(getTask());
    textInput.value = null;
}