import { products } from "./data";
import { cost } from "./functions";
import { recordsTotal } from "./selectors";

export const createRecord = (productId, quantity) => {
  const { id, name, price } = products.find(({ id }) => id == productId);

  const tableRow = document.createElement("tr");
  tableRow.classList.add("record-row");
  tableRow.setAttribute("product-id", productId);
  tableRow.innerHTML = `
            <td class='record-no'></td>
            <td class="text-start record-product">${name}</td>
            <td class="text-end record-price">${price}</td>
            <td class="text-end ">
            <span>
              <i class=" record-quantity-control record-quantity-decrement bi bi-dash"></i>
            </span>
            <span class='record-quantity'>
            ${quantity}
            </span>
            <span>
              <i class=" record-quantity-control record-quantity-increment bi bi-plus"></i>
            </span>
            </td>
            <td class="text-end position-relative">
            <span class='record-cost'>${cost(price, quantity)}</span>
            <button class=" d-print-none btn btn-sm btn-primary record-row-del position-absolute">
              <i class=" bi bi-trash3"></i>
            </button>
            </td>
        `;

  tableRow
    .querySelector(".record-row-del")
    .addEventListener("click", deleteRecord);

  tableRow
    .querySelector(".record-quantity-increment")
    .addEventListener("click", incrementRecordQuantity.bind(null, productId));

  tableRow
    .querySelector(".record-quantity-decrement")
    .addEventListener("click", decrementRecordQuantity.bind(null, productId));

  return tableRow;
};

export const deleteRecord = (event) => {
  if (confirm("Are U sure to remove product ?")) {
    const tableRow = event.target.closest("tr");
    tableRow.classList.add("animate__animated", "animate__fadeOut");
    tableRow.addEventListener("animationend", () => {
      tableRow.remove();
      calculateTotal();
    });
  }
};

export const incrementRecordQuantity = (productId, max = 1000) => {
  updateRecord(productId, 1);
};

export const decrementRecordQuantity = (productId, min = 1) => {
  const currentRecord = document.querySelector(`[product-id='${productId}']`);
  const currentQuantity = currentRecord.querySelector(".record-quantity");

  if (currentQuantity > min) {
    updateRecord(productId, -1);
  }
};

export const updateRecord = (productId, quantity) => {
  const currentRecord = document.querySelector(`[product-id='${productId}']`);

  const currentPrice = currentRecord.querySelector(".record-price");
  const currentQuantity = currentRecord.querySelector(".record-quantity");
  const currentCost = currentRecord.querySelector(".record-cost");

  let newQuantity =
    parseFloat(currentQuantity.innerText) + parseFloat(quantity);

  let newCost = currentPrice.innerText * newQuantity;

  currentQuantity.innerText = newQuantity;

  currentCost.innerText = newCost;
};

export const calculateTotal = () => {
  recordsTotal.innerText = [
    ...document.querySelectorAll(".record-cost"),
  ].reduce((pv, cv) => pv + parseFloat(cv.innerText), 0);
};