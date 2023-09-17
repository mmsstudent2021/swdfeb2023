import { products } from "./data";
import { createItem } from "./items";
import { addProduct, productRender } from "./product";
import { calculateTotal, createRecord, updateRecord } from "./record";
import { inventories, mic, newItem, newRecord, recordRows } from "./selectors";

export const handleAddRecordFrom = (e) => {
  e.preventDefault();

  const formData = new FormData(newRecord);

  const isExistedRow = document.querySelector(
    `[product-id='${formData.get("productSelect")}']`
  );

  if(isExistedRow){

    updateRecord(formData.get("productSelect"),formData.get("quantity"))

  }else{
    recordRows.append(
        createRecord(formData.get("productSelect"), formData.get("quantity"))
      );
    
  }


  newRecord.reset();


};


export const handleNewItemFrom = (event) => {
    event.preventDefault()
    const formData = new FormData(newItem);
    inventories.append(
        createItem(formData.get("newItemName"),formData.get("newItemPrice"))
    );;
    addProduct(formData.get("newItemName"),formData.get("newItemPrice"));
    productRender(products)
    newItem.reset()
}

export const handleMic = () => {
  console.log("U click mic");
  const recognition = new webkitSpeechRecognition();
  // console.log(recognition);

  const loaderUi = document.createElement("div");
  loaderUi.classList.add("spinner-border","spinner-border-sm");

  recognition.addEventListener("start",() => {
    console.log("record start");
    mic.before(loaderUi)
  })

  recognition.addEventListener("end",() => {
    loaderUi.remove()
    console.log("record end");
  })

  recognition.addEventListener("result",(event) => {
    console.log("record result",event.results[0][0].transcript);
  })

  recognition.start();

}