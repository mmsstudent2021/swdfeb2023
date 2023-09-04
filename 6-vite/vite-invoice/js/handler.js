import { products } from "./data";
import { createItem } from "./items";
import { addProduct, productRender } from "./product";
import { calculateTotal, createRecord, updateRecord } from "./record";
import { inventories, newItem, newRecord, recordRows } from "./selectors";

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

  calculateTotal()

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