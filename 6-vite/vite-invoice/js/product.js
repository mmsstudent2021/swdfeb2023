import { products } from "./data";
import { productSelect } from "./selectors";

export const productRender = (products) => {
  productSelect.innerHTML = null
  products.forEach(({ id, name, price }) => {
    productSelect.append(new Option(name, id));
  });
};

export const addProduct = (name, price) => {
  const id = products[products.length - 1].id + 1;
  products.push({
    id,
    name,
    price,
  });
};
