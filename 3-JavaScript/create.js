// console.log("Create Elements");

// const createLi = (text) => {
//   const li = document.createElement("li");
//   li.innerText = text;
//   return li;
// };

// h1 element

// const h1 = document.createElement("h1");
// h1.innerText = "Min Ga Lar par";

// const p = document.createElement("p");
// p.innerHTML = "I'm <b>Hein Htet Zan</b> from MMS IT";

// const ul = document.createElement("ul");

// const li2 = document.createElement("li");
// li2.innerText = "Orange";

// const li3 = document.createElement("li");
// li3.innerText = "Mango";

// ul.append(li1);
// ul.append(li2);
// ul.append(li3);

// const fruits = ["apple","orange","mango","banana"];
// fruits.forEach(fruit => ul.append(createLi(fruit)))

// ul.append(createLi("Apple"))
// ul.append(createLi("Orange"))
// ul.append(createLi("Mango"))
// ul.append(createLi("Banana"))

// document.body.append(h1);
// document.body.append(p);
// document.body.append(ul);

const createNewTd = (content) => {
  const td = document.createElement("td");
  td.innerText = content;
  return td;
};

const createNewTr = (id,productName,productPrice) => {
  const tr = document.createElement("tr");
  

  tr.append(createNewTd(id));
  tr.append(createNewTd(productName));
  tr.append(createNewTd(productPrice));

  return tr;
};

const app = document.querySelector("#app");

const h1 = document.createElement("h1");
app.append(h1);
h1.innerText = "Product List";
h1.classList.add("text-primary","bg-primary-subtle","p-4")
h1.title = "My Product List";

const img = document.createElement("img");
img.src = "./img/download.jpeg";
img.classList.add("m-2","rounded-4","shadow")
app.append(img)

const table = document.createElement("table");
table.classList.add("table");

const thead = document.createElement("thead");
table.append(thead);

const tr1 = document.createElement("tr");
thead.append(tr1);

const td1 = document.createElement("td");
td1.innerText = "#";
tr1.append(td1);

const td2 = document.createElement("td");
td2.innerText = "Product Name";
tr1.append(td2);

const td3 = document.createElement("td");
td3.innerText = "Price";
tr1.append(td3);

const tbody = document.createElement("tbody");
table.append(tbody);

tbody.append(createNewTr(1,"apple",500))
tbody.prepend(createNewTr(2,"Orange",300))
tbody.prepend(createNewTr(3,"Mango",750))
tbody.prepend(createNewTr(4,"Banana",200))



app.append(table);
