import {
  contactCreateFormHandler,
  fetchContact,
  rowsHandlers,
} from "./app/contact";
import { createContactForm, rows } from "./core/selectors";

class App {
  initialRender() {
    fetchContact("/contacts");
  }
  listener() {
    createContactForm.addEventListener("submit", contactCreateFormHandler);
    rows.addEventListener("click", rowsHandlers);
  }
  init() {
    console.log("App is starting");
    this.initialRender();
    this.listener();
  }
}

export default App;
