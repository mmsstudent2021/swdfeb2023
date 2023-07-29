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
    name: "Mango",
    price: 900,
  },
  {
    id: 4,
    name: "Lime",
    price: 50,
  },
  {
    id: 5,
    name: "Lemon",
    price: 500,
  },
];

const app = document.querySelector("#app");
const newRecord = document.querySelector("#newRecord");
const product = document.querySelector("#product");
const quantity = document.querySelector("#quantity");
const records = document.querySelector("#records");
const recordRows = document.querySelector("#record-rows");
const recordsTotal = document.querySelector(".records-total");

// functions
const createRecordRow = (productId, quantity) => {
  // information
  const currentProduct = products.find((el) => el.id == productId);
  let cost = currentProduct.price * quantity.valueAsNumber;

  const tableRow = document.createElement("tr");
  tableRow.classList.add("record-row");
  tableRow.innerHTML = `
          <td>1</td>
          <td class="text-start record-product">${currentProduct.name}</td>
          <td class="text-end record-price">${currentProduct.price}</td>
          <td class="text-end record-quantity">${quantity.valueAsNumber}</td>
          <td class="text-end record-cost">${cost}</td>
      `;
  return tableRow;
};

const calculateTotal = () => {
  console.clear();

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
});

// add record
newRecord.addEventListener("submit", (e) => {
  e.preventDefault();

  // create new row
  recordRows.append(createRecordRow(product.value, quantity));

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
