import { productSelect } from "./selectors";

export const productRender = (products) => {
  products.forEach(({ id, name, price }) => {
    productSelect.append(new Option(name, id));
  });
};
