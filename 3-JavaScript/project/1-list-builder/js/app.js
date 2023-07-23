// selectors

const app = document.querySelector("#app");
const dataInput = document.querySelector("#dataInput");
const textInput = document.querySelector("#textInput");
const createForm = document.querySelector("#createForm");
const addBtn = document.querySelector("#addBtn");
const listTotalCount = document.querySelector("#listTotalCount");
const doneCount = document.querySelector("#doneCount");
const lists = document.querySelector(".lists");
const allDone = document.querySelector("#allDone");

let listIndex = 0;

// functions

const countList = () => {
  // counting list
  let total = document.querySelectorAll(".list").length;
  // ui update
  listTotalCount.innerText = total;

  return total;
};

const countDone = () => {
  // counting list
  let total = document.querySelectorAll(".form-check-input:checked").length;
  // ui update
  doneCount.innerText = total;

  return total;
};

const randomId = (length=5) => {
  let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const createList = (text) => {
  const list = document.createElement("div");
  const id = "list"+listIndex++;

  // list.className="list";
  list.classList.add("list");
  list.innerHTML = `
    <div class=" border border-2 p-3 d-flex justify-content-between align-items-center mb-3 animate__animated animate__zoomInLeft">
        <div class=" form-check">
            <input type="checkbox" id='${id}' class=" form-check-input">
            <label for="${id}" class=" form-check-label">
                ${text}
            </label>
        </div>

        <div class="controls">
            <button class=" btn btn-sm btn-primary list-edit-btn">
                <i class=" bi bi-pencil"></i>
            </button>
            <button class=" btn btn-sm btn-primary list-del-btn">
                <i class=" bi bi-trash3 pe-none"></i>
            </button>
        </div>
    </div>
    `;

  const listDelBtn = list.querySelector(".list-del-btn");
  listDelBtn.addEventListener("click", (e) => {
    // console.log(list);
    // if (confirm("Are U sure to delete list ?")) {

    // }

    // console.log(list.children[0]);
    list.children[0].classList.replace(
      "animate__zoomInLeft",
      "animate__zoomOutLeft"
    );

    list.children[0].addEventListener("animationend", () => {
      list.remove();
      countList();
      countDone();
    });
  });

  const listEditBtn = list.querySelector(".list-edit-btn");
  const label = list.querySelector(".form-check-label");

  listEditBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.classList.add("form-control");
    input.value = label.innerText;
    // input.autofocus = true;
    // input.setAttribute("autofocus","true")
    
    label.innerHTML = null;
    label.append(input);

    input.focus();

    input.addEventListener("blur", () => {
      label.innerText = input.value;
    });

    // console.log(list);
  });

  const check = list.querySelector(".form-check-input");
  check.addEventListener("click", () => {
    countDone();
    label.classList.toggle("text-decoration-line-through");
    list.querySelector(".list-edit-btn").toggleAttribute("disabled");
  });

  return list;
};

// process

// addBtn.addEventListener("click", () => {
//   // console.log(textInput.value);
//   lists.append(createList(textInput.value));
//   textInput.value = null;
//   countList();
//   countDone();
// });

// textInput.addEventListener("keyup", (e) => {
//   if (e.key === "Enter") {
//     lists.append(createList(textInput.value));
//     textInput.value = null;
//     countList();
//     countDone();
//   }
// });

createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  lists.append(createList(textInput.value));
  textInput.value = null;
  countList();
  countDone();
});


allDone.addEventListener("click",() => {
  const allList = document.querySelectorAll(".list");
  allList.forEach(list => {
    list.querySelector(".form-check-input").click()
  });
})