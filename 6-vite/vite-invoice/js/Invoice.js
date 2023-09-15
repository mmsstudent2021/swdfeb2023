import { products } from "./data";
import { handleAddRecordFrom, handleNewItemFrom } from "./handler";
import { itemRender } from "./items";
import { productRender } from "./product";
import { createRecord, observerOptions, recordRowObserver } from "./record";
import { newItem, newRecord, recordRows } from "./selectors";

class Invoice {
  initialRender() {
    // 1. product render
    productRender(products);
    itemRender(products);
    localStorage.getItem("rows") &&
      JSON.parse(localStorage.getItem("rows"))
      .forEach(({productId,quantity}) =>
        recordRows.append(createRecord(productId,quantity))
      );
  }

  listener() {
    // 2. event listen
    newRecord.addEventListener("submit", handleAddRecordFrom);
    newItem.addEventListener("submit", handleNewItemFrom);
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
