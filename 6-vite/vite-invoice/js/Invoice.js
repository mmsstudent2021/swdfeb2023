import { products, userConfig } from "./data";
import { handleAddRecordFrom, handleMic, handleNewItemFrom } from "./handler";
import { itemRender } from "./items";
import { productRender } from "./product";
import { createRecord, observerOptions, recordRowObserver } from "./record";
import { newItem, newRecord, recordRows } from "./selectors";

class Invoice {
  constructor(options = null) {
    if (typeof options === "object") {
      for (let option in options) {
        userConfig[option] = options[option];
      }
    }
  }

  static config(property,defaultValue){
    return userConfig.hasOwnProperty(property) ? userConfig[property] : defaultValue
  }

  initialRender() {
    // 1. product render
    productRender(products);
    itemRender(products);
    localStorage.getItem("rows") &&
      JSON.parse(localStorage.getItem("rows")).forEach(
        ({ productId, quantity }) =>
          recordRows.append(createRecord(productId, quantity))
      );
  }

  listener() {
    // 2. event listen
    newRecord.addEventListener("submit", handleAddRecordFrom);
    newItem.addEventListener("submit", handleNewItemFrom);
    mic.addEventListener("click", handleMic);
  }

  observer() {
    recordRowObserver.observe(recordRows, observerOptions);
  }

  init() {
    console.log("Invoice App Start");

    this.observer();

    this.initialRender();

    this.listener();
  }
}

export default Invoice;
