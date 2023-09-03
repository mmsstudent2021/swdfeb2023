import inputForm from "./InputForm.js";
import lists from "./Lists.js";
import TitleUI from "./Title.js";
import { app } from "./selectors.js";

class Todo {

    basicUiRender(){
        const title = new TitleUI("Todo App");

        app.append(title);

        app.append(inputForm());

        app.append(lists())
    }

    init(){

        console.log("Todo app start");

        this.basicUiRender()
        
    }

}

export default Todo;