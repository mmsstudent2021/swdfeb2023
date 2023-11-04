import { createContactForm, rows } from "../core/selectors";
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

  rows.append(createContactRow(data))

  formDisabled(false);
  createContactForm.reset();
};

export const createContactRow = ({ id, name, phone }) => {
  const row = document.createElement("tr");
  row.className = "bg-white border-b dark:bg-gray-900 dark:border-gray-700";
  row.setAttribute("contact-id", id);
  row.innerHTML = `
    <td class="px-6 py-4">${id}</td>
    <td class="px-6 py-4">${name}</td>
    <td class="px-6 py-4">${phone}</td>
    <td class="px-6 py-4">
    <button type="button" class="del-btn px-3 py-2 text-xs font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
      Del
    </button>
    </td>
  `;

  return row;
};

export const renderContact = (contacts) => {
  contacts.forEach((el) => {
    rows.append(createContactRow(el));
  });
};

export const fetchContact = (url) => {
  fetch(baseUrl + url)
    .then((res) => res.json())
    .then((data) => renderContact(data));
};

export const rowsHandlers = (event) => {
  if (event.target.classList.contains("del-btn")) {
    const currentRow = event.target.closest("tr");
    const currentRowId = currentRow.getAttribute("contact-id");
    currentRow.classList.add("opacity-20")

    fetch(baseUrl + "/contacts/" + currentRowId, {
      method: "DELETE",
    }).then((res) => {
      if(res.status === 204){
        currentRow.remove()
      }
    });
  }
};
