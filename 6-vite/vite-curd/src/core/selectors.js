import { Drawer } from "flowbite";

export const app = document.querySelector("#app");
export const createContactForm = app.querySelector("#createContactForm");
export const rows = app.querySelector("#rows");
export const drawerUi = app.querySelector("#drawer-right-example");

export const updateContactForm = app.querySelector("#updateContactForm");

export const drawer = new Drawer(drawerUi, {
  placement: "right",
  backdrop: false,
});
