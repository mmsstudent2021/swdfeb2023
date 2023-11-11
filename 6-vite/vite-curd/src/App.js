import {
  contactCreateFormHandler,
  fetchContact,
  rowsHandlers,
  updateContactFormHandler,
} from "./app/contact";
import { createContactForm, rows, updateContactForm } from "./core/selectors";

class App {
  initialRender() {
    fetchContact("/contacts");
  }
  listener() {
    createContactForm.addEventListener("submit", contactCreateFormHandler);
    rows.addEventListener("click", rowsHandlers);
    updateContactForm.addEventListener("submit", updateContactFormHandler);
  }
  init() {
    console.log("App is starting");
    this.initialRender();
    this.listener();
  }
}

export default App;
