import { Drawer } from "flowbite";
import {
  createContactForm,
  drawer,
  drawerUi,
  rows,
  updateContactForm,
} from "../core/selectors";
import { baseUrl } from "../core/variables";

const formDisabled = (status) => {
  createContactForm.querySelector("[name='name']").disabled = status;
  createContactForm.querySelector("[name='number']").disabled = status;
  createContactForm.querySelector("button").disabled = status;
  createContactForm.querySelector("button").innerText = status
    ? "Loading"
    : "Add";
};

export const contactCreateFormHandler = async (event) => {
  event.preventDefault();

  console.log("hello");

  const formData = new FormData(createContactForm);

  formDisabled(true);

  // start sending data

  // console.log(formData.get("name"));
  // console.log(formData.get("number"));
  // data send - post

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: formData.get("name"),
    phone: formData.get("number"),
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const res = await fetch(`${baseUrl}/contacts`, requestOptions);
  const data = await res.json();

  rows.append(createContactRow(data));

  formDisabled(false);
  createContactForm.reset();
};

export const createContactRow = ({ id, name, phone }) => {
  const row = document.createElement("tr");
  row.className = "bg-white border-b dark:bg-gray-900 dark:border-gray-700";
  row.setAttribute("contact-id", id);
  row.innerHTML = `
    <td class="px-6 py-4">${id}</td>
    <td class="px-6 py-4 name-cell">${name}</td>
    <td class="px-6 py-4 phone-cell">${phone}</td>
    <td class="px-6 py-4">
    <button type="button" class="edit-btn px-3 py-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      Edit
    </button>
    <button type="button" class="del-btn px-3 py-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      Del
    </button>
    
    </td>
  `;

  const nameCell = row.querySelector(".name-cell");
  nameCell.addEventListener("dblclick", () => {
    const currentText = nameCell.innerText;
    const currentId = nameCell.closest("tr").getAttribute("contact-id");

    const input = document.createElement("input");
    input.className = "border border-blue-600 p-2";
    input.value = currentText;

    nameCell.innerHTML = "";

    nameCell.append(input);

    input.addEventListener("blur", () => {
      const currentInputValue = input.value;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        name: currentInputValue,
      });

      var requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(baseUrl + "/contacts/" + id, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        });

      nameCell.innerText = currentInputValue;
    });
  });

  const phoneCell = row.querySelector(".phone-cell");
  phoneCell.addEventListener("dblclick", () => {
    const currentText = phoneCell.innerText;
    const currentId = phoneCell.closest("tr").getAttribute("contact-id");

    const input = document.createElement("input");
    input.className = "border border-blue-600 p-2";
    input.value = currentText;

    phoneCell.innerHTML = "";

    phoneCell.append(input);

    input.addEventListener("blur", () => {
      const currentInputValue = input.value;

      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        phone: currentInputValue,
      });

      var requestOptions = {
        method: "PATCH",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(baseUrl + "/contacts/" + id, requestOptions)
        .then((response) => response.text())
        .then((result) => {
          console.log(result);
        });

      phoneCell.innerText = currentInputValue;
    });
  });

  return row;
};

export const renderContact = (contacts) => {
  rows.innerHTML = "";
  contacts.forEach((el) => {
    rows.append(createContactRow(el));
  });
};

export const fetchContact = (url) => {
  fetch(baseUrl + url)
    .then((res) => res.json())
    .then((data) => renderContact(data));
};

export const removeContact = (id) => {
  const currentRow = document.querySelector(`[contact-id='${id}']`);
  currentRow.classList.add("opacity-20");

  fetch(baseUrl + "/contacts/" + id, {
    method: "DELETE",
  }).then((res) => {
    if (res.status === 204) {
      currentRow.remove();
    }
  });
};

export const updateContact = async (id) => {
  const currentRow = document.querySelector(`[contact-id='${id}']`);

  drawer.toggle();

  const res = await fetch(baseUrl + "/contacts/" + id);
  const data = await res.json();

  updateContactForm.querySelector("#contactId").value = data.id;
  updateContactForm.querySelector("#name").value = data.name;
  updateContactForm.querySelector("#phone").value = data.phone;
  updateContactForm.querySelector("button").disabled = false;
};

export const updateContactFormHandler = (event) => {
  event.preventDefault();
  const formData = new FormData(updateContactForm);

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    id: formData.get("id"),
    name: formData.get("name"),
    phone: formData.get("number"),
  });

  var requestOptions = {
    method: "PUT",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(baseUrl + "/contacts/" + formData.get("id"), requestOptions)
    .then((response) => response.text())
    .then((result) => {
      fetchContact("/contacts");
      drawer.toggle();
    });
};

export const rowsHandlers = (event) => {
  if (event.target.classList.contains("del-btn")) {
    removeContact(event.target.closest("tr").getAttribute("contact-id"));
  } else if (event.target.classList.contains("edit-btn")) {
    updateContact(event.target.closest("tr").getAttribute("contact-id"));
  }
};
