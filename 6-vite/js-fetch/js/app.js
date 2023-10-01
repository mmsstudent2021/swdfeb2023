// try {
//   const x = 5;
//   x = 10;
// } catch (error) {
//   console.dir(error.message);
//   console.dir(error.stack);
// }finally{
//     console.log("run finish");
// }

// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/products/2")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/products/3")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/products/4")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/products/5")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://fakestoreapi.com/products/6")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// async function run(){

// }

// const run = async function(){

// }

const fetchAll = async () => {
  const data1 = await fetch("https://fakestoreapi.com/products/1");
  const res1 = await data1.json();
  console.log(res1);

  const data2 = await fetch("https://fakestoreapi.com/products/2");
  const res2 = await data2.json();
  console.log(res2);

  const data3 = await fetch("https://fakestoreapi.com/products/3");
  const res3 = await data3.json();
  console.log(res3);
};

// fetchAll()

// const f = showOpenFilePicker();

// console.log(f);

document.querySelector("#open").addEventListener("click", async () => {
//   const fp = await showOpenFilePicker();
//   console.log(fp[0]);

const bt = await navigator.getBattery()
console.log(bt.level);
});
