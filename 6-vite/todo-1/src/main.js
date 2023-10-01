import "./style.css";
import initTodo from "./todo";

initTodo()

const data = ["a", "b", "c"];

// console.log(data[0]);
// console.log(data[1]);

// const dataHandler = {
//   get(target, property, receiver) {
//     console.log("U access proxy");

//     return Reflect.get(target, property, receiver);
//   },
//   set(target, property, value, receiver) {
//     console.log("U change proxy");

//     return Reflect.set(target, property, value, receiver);
//   },
// };

// const dataProxy = new Proxy(data, dataHandler);


// dataProxy[1];//access

// dataProxy[0] = "aa";//change

// console.log(dataProxy);