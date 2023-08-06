// selectors

const products = [
  {
    id: 1,
    name: "Apple",
    price: 1200,
  },
  {
    id: 2,
    name: "Orange",
    price: 1400,
  },
  {
    id: 3,
    name: "Lime",
    price: 50,
  },
  {
    id: 4,
    name: "Banana",
    price: 200,
  },
];

let rowCount = 1;

const app = document.querySelector("#app");
const newRecord = document.querySelector("#newRecord");
const product = document.querySelector("#product");
const quantity = document.querySelector("#quantity");
const records = document.querySelector("#records");
const inventories = document.querySelector("#inventories");
const recordRows = document.querySelector("#record-rows");
const recordsTotal = document.querySelector(".records-total");
const newItem = document.querySelector("#newItem");
const newItemName = document.querySelector("#newItemName");
const newItemPrice = document.querySelector("#newItemPrice");

// functions

const createItem = (name, price) => {
  const div = document.createElement("div");
  div.className =
    "item-list border border-2 p-3 mb-3 d-flex justify-content-between";
  div.innerHTML = `
  <p class=" mb-0 item-name">${name}</p>
  <p class="text-black-50 mb-0 item-price">${price} mmk</p>
  `;
  return div;
};

const createRecordRow = (productId, quantity) => {
  // information
  const currentProduct = products.find((el) => el.id == productId);
  let cost = currentProduct.price * quantity.valueAsNumber;

  const tableRow = document.createElement("tr");
  tableRow.classList.add("record-row");
  tableRow.setAttribute("product-id", productId);
  tableRow.innerHTML = `
          <td class='record-no'></td>
          <td class="text-start record-product">${currentProduct.name}</td>
          <td class="text-end record-price">${currentProduct.price}</td>
          <td class="text-end ">
          <span>
            <i class=" record-quantity-control record-quantity-decrement bi bi-dash"></i>
          </span>
          <span class='record-quantity'>
          ${quantity.valueAsNumber}
          </span>
          <span>
            <i class=" record-quantity-control record-quantity-increment bi bi-plus"></i>
          </span>
          </td>
          <td class="text-end position-relative">
          <span class='record-cost'>${cost}</span>
          <button class=" d-print-none btn btn-sm btn-primary record-row-del position-absolute">
            <i class=" bi bi-trash3"></i>
          </button>
          </td>
      `;

  tableRow.querySelector(".record-row-del").addEventListener("click", () => {
    if (confirm("Are U sure to remove product ?")) {
      tableRow.classList.add("animate__animated", "animate__fadeOut");
      tableRow.addEventListener("animationend", () => {
        tableRow.remove();
        calculateTotal();
      });
    }
  });

  const recordQuantityIncrement = tableRow.querySelector(".record-quantity-increment");
  recordQuantityIncrement.addEventListener('click',(e) => {
    // const currentQuantity = tableRow.querySelector(".record-quantity");
    // console.log(currentQuantity);

    // console.log(e.target.parentElement.parentElement.previousElementSibling.previousElementSibling);
    // console.log(e.target.closest("tr").querySelector(".record-quantity"));
    console.dir(e.target.getBoundingClientRect());
  })

  return tableRow;
};

const calculateTotal = () => {
  // console.clear();

  // let total = 0;

  // const allRecords = document.querySelectorAll(".record-cost");
  // console.log(allRecords);

  // allRecords.forEach(el => {
  //     // console.log(el);
  //     total += parseFloat(el.innerText)
  // })

  // recordsTotal.innerText = total;

  recordsTotal.innerText = [
    ...document.querySelectorAll(".record-cost"),
  ].reduce((pv, cv) => pv + parseFloat(cv.innerText), 0);
};

// process

// generate product
products.forEach((el) => {
  // const newOption = document.createElement("option");
  // newOption.innerText = el.name
  // newOption.value = el.id
  product.append(new Option(el.name, el.id));
  inventories.append(createItem(el.name, el.price));
});

// add record
newRecord.addEventListener("submit", (e) => {
  e.preventDefault();

  const isExistedRow = document.querySelector(
    `[product-id='${product.value}']`
  );

  if (isExistedRow) {
    let currentPrice = isExistedRow.querySelector(".record-price");
    let currentQuantity = isExistedRow.querySelector(".record-quantity");
    let currentCost = isExistedRow.querySelector(".record-cost");

    let newQuantity =
      parseFloat(currentQuantity.innerText) + quantity.valueAsNumber;
    let newCost = currentPrice.innerText * newQuantity;

    currentQuantity.innerText = newQuantity;
    currentCost.innerText = newCost;
  } else {
    // create new row
    recordRows.append(createRecordRow(product.value, quantity));
  }

  // clear form
  newRecord.reset();

  // calculate total cost
  calculateTotal();

  // console.log(cost);
  // console.log(product.value);//productId
  // console.log(products.find(el => el.id == product.value));//productDetail
  // console.log(quantity.valueAsNumber);

  // const formData = new FormData(newRecord);
  // console.log(formData.get("product"));
  // console.log(formData.get("quantity"));
});

newItem.addEventListener("submit", (e) => {
  e.preventDefault();

  // products array update
  let newItemId = products[products.length - 1].id + 1;
  const newItemObj = {
    id: newItemId,
    name: newItemName.value,
    price: newItemPrice.valueAsNumber,
  };

  products.push(newItemObj);

  // form reset
  newItem.reset();

  // ui update
  product.append(new Option(newItemObj.name, newItemObj.id));
  inventories.append(createItem(newItemObj.name, newItemObj.price));
});


// const test = document.querySelector(".test");

// test.addEventListener("click",() => {
//   console.log(test.children);
//   const spinner = document.createElement("span");
//   spinner.className = "spinner-border spinner-border-sm me-2";
//   test.childNodes[0].nodeValue = "loading"
//   test.prepend(spinner)
//   // test.childNodes.before(spinner)

//   // test.innerHTML = ``;
// })
