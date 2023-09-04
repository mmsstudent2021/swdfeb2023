export const createItem = (name, price) => {
  const div = document.createElement("div");
  div.className =
    "item-list border border-2 p-3 mb-3 d-flex justify-content-between";
  div.innerHTML = `
    <p class=" mb-0 item-name">${name}</p>
    <p class="text-black-50 mb-0 item-price">${price} mmk</p>
    `;
  return div;
};

export const itemRender = (products) => {
  products.forEach(({ id, name, price }) => {
    inventories.append(createItem(name, price));
  });
};
