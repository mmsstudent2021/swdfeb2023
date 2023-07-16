console.log("Dom [Document Object Model]");
// console.log("heinHtetZan");
// console.log("hein-htet-zan");
// console.log("hein_htet_zan");
// console.log("HeinHtetZan");

// console.log("hein htet zan");
// console.log("HEIN HTET ZAN");
// console.log("Hein Htet Zan");

//selectors

const first = document.getElementById("first");

// console.dir(first);

// access properties

// console.dir(first.innerHTML);
// console.dir(first.innerText);
// console.dir(first.title);
// console.dir(first.className);

// console.dir(first.classList);
// console.dir(first.classList[0]);
// console.dir(first.classList[1]);
// console.dir(first.classList[0]);

// console.dir(first.id);

// console.dir(first.style);
// console.dir(first.style.border);
// console.dir(first.style.width);
// console.dir(first.style.textAlign);

// console.dir(first.attributes.myName.name);

// console.log(first.innerHTML);
// first.innerHTML = "San Kyi Tar"
// console.log(first.innerHTML);

// first.title = "san kyi tar"

// first.className = "one two three"


// first.classList.add("aaa")
// first.classList.add("bbb")
// first.classList.add("ccc")

// first.classList.remove("heading")
// first.classList.remove("fw-blod")
// first.classList.remove("color-red")

// console.log(first.classList.contains("color-red"));

// console.log(first.classList.replace("fw-blod","bold"));

// first.classList.toggle("heading")
// first.classList.toggle("heading")
// first.classList.toggle("heading")
// console.log(first.classList);

// first.setAttribute("myName","Sayar");
// console.log(first.getAttribute("myName"));

const img = document.getElementById("img");

// console.dir(img);

// img.src = "./img/download.jpeg"
// img.setAttribute("src","./img/download.jpeg")
// console.log(img.src);
// console.log(img.getAttribute("src"));

// img.width += 400
// console.log(img.width);
// console.log(img.height);

img.style.borderRadius = "20px";
img.style.border = "5px solid black"

first.style.border = "5px solid black"
first.style.borderRadius = "20px"

const input = document.getElementById("input");


// function run(){
//     console.dir(input);
//     console.dir(input.valueAsDate.getFullYear());
//     console.log(input.value);
// }

// input.value = "2022-07-22"
// '2022-07-22'
// input.valueAsDate = new Date()
// Sat Jul 08 2023 15:00:36 GMT+0630 (Myanmar Time)
// let d = new Date();
// undefined
// d.setFullYear(2050)
// 2540881847484
// input.valueAsDate = d
// Fri Jul 08 2050 15:00:47 GMT+0630 (Myanmar Time)

const inputFile = document.getElementById("inputFile");

console.dir(inputFile);