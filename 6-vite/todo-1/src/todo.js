import { addBtnHandler } from "./app/handler";
import { addBtn } from "./app/selectors";

const listener = () => {
    addBtn.addEventListener("click",addBtnHandler)
}


const initTodo = () => {

    console.log("Todo Start");

    listener();
    
}

export default initTodo;