import { addBtnHandler } from "./app/handlers";
import { addBtn } from "./app/selectors";

class Todo {

    listener(){
        
        addBtn.addEventListener("click",addBtnHandler);
    }

    init(){

        console.log("Todo App Start");

        this.listener();

    }

}

export default Todo;