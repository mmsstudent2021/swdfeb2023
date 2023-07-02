console.log("Standard Build in Object");

// const s = new String("Min Ga Lar Par Byar");

// console.log(typeof s.valueOf());

// console.log(s.length);
// console.log(s[0]);
// console.log(s[5]);
// console.log(s.substring(0,10));
// console.log(s.substr(0,10));

// console.log(s.search("ko"));
// console.log(s.search("Ga"));
// console.log(s.search("Min"));

// console.log(s.replace("Lar","xxx"));

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// console.log(s.trim().length);

// const x = new String("Hello");

// console.log(x.padStart(15,"X"));
// console.log(x.padEnd(15,"X"));

// // string to array

// // console.log(s.split(" "));
// // console.log(s.split(""));
// console.log(s.split("a"));

// const obj = {
//     x : "xxx",
//     y : "yyy",
//     a(){},
//     b(){}
// }

// console.log(obj);

// class Test {
//     x = "xxx";
//     y = "yyy";
//     a(){}
//     b(){}
// }

// const test = new Test;
// console.log(test);

// const d = new Date();
// console.log(typeof d);

// const n = new Number(1994.743536);
// console.log(n);
// console.log(typeof n);
// console.log(n.toString());
// console.log(n.toFixed(3));
// console.log(n.toExponential());
// console.log(typeof n.valueOf());
// console.log(n.toPrecision(2));

// console.log(Number("210.56lb"));
// console.log(parseInt("210.56lb"));
// console.log(parseFloat("210.56lb"));

// console.log(Math.floor("123.5"));
// console.log(Math.ceil("123.1"));
// console.log(Math.pow(2,20));
// console.log(Math.random());

// const obj = {
//     x : "xxx",
//     y : "yyy",
//     z : "zzz"
// }
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// console.log( eval("5+6*7") );

// console.log(isNaN(Number("210")));

// console.log(isFinite(1000/0));

// const a = function(){
//     return "this is a fun";
// }

// const b = function(x,y,...para){
//     // console.log(arguments);
//     // return `${x} * ${y} is ${x*y}`;
//     console.log(para);
//     let total = 0;
//     for(x of para){
//         total += x;
//     }
//     return total;
// }

// console.log(b(2,3,4,5,6));

// console.log(b(2,3));
// console.log(b.bind(null,2,3).apply());
// console.log(b.call(null,2,3));

// const c = b.bind(null,5,10);
// console.log(c.apply());

// const run = new Function(" return 'this is run fun' ");

// console.log(a())

// const run = new Function('x','y', "return 'run fun '+ x * y");
// console.log(run(2,3));
// console.log(typeof run)
// console.dir(run);

// console.dir(a)
// console.log(a.name);
// console.log(a.length);

// console.log(a());

// console.log(a.apply());

const fruits = ["apple", "orange", "mango", "banana", "lime", "lemon", "kiwi"];

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.toString());
// console.log(fruits.join("-"));
// fruits.push("aaa");
// fruits.push("bbb");
// fruits.push("ccc");

// fruits.unshift("xxx");
// fruits.unshift("yyy");
// fruits.unshift("zzz");

// fruits.pop();
// fruits.pop();
// fruits.pop();

// fruits.shift();
// fruits.shift();
// fruits.shift();

// fruits.reverse()

// console.log(fruits);

// for(fruit of fruits){
//     console.log(fruit);
// }

// function greeting(){
//     return "min ga lar par";
// }

// function intro(callback){
//     console.log(callback());
//     console.log("my name is hhz");
//     return "finish intro";
// }

// console.log(intro(greeting));

// function a(x){
//     console.log(x.length,x,x.toUpperCase());
// }

// fruits.forEach(a)

// const x = fruits.forEach(function(element,index,array){
//     console.log(element,index,array);
// })

// console.log(x);

// ` loop : ${fruits.forEach(function(el,index){console.log(el,index);})} `;

// ` loop : ${ for(x of fruits){ console.log(x); } }`

// const run = function(){
//     return "I 'm run";
// }

// const run = _ =>  "this is run";

// const run = () =>  "this is run";

// const run = function(name){
//     return "I 'm "+name;
// }

// const run = name => "I' m "+name;

// const run = function(x,y){
//     return x+y;
// }

// const run = (x,y) => x+y;

// const run = function(birthYear){
//     const d = new Date();
//     const currentYear = d.getFullYear();
//     const result = currentYear - birthYear;
//     return "your age is  "+result;
// }

// const run = birthYear => {
//     const d = new Date();
//     const currentYear = d.getFullYear();
//     const result = currentYear - birthYear;
//     return "your age is  "+result;
// }

// console.log(run(1994));

// let x = {};

// console.log(Array.isArray(x));

// console.log(fruits.includes("Apple"));

// console.log(fruits.indexOf("mango"));

// console.log(fruits.splice(2,3,"aaa","bbb","ccc"));

// console.log(fruits);

// console.log(fruits.slice(2,5));

// console.log(fruits);

// const firstName = "hein";
// const lastName = "htet";

// console.log(firstName.concat(lastName));
// console.log(firstName + lastName);

// const nums = [1,5,26,6];
// const chars = ["a","c","e","d"];

// const arr = nums.concat(chars).concat(fruits).concat(nums);

// console.log(arr);

// console.log(fruits.join().toUpperCase().substring(0,10));

// const arr = ["aaa",...nums,...fruits, ...chars,"zzz"];

// console.log(arr);

// console.table(products);

// const result = fruits.map((el) => {
//   console.log(el);
//   return el.toUpperCase() + " -- "
// });

console.log(products);

// const r = products.map(el=>{
//     // console.log(el);
//     // el.price += 5;
//     // el.title = "HHZ - "+el.title;
//     return {
//         title : el.title,
//         price : el.price
//     };
// })

// const r = products.filter((el) => {
// //   return el.id === 5 || el.id === 7 || el.id === 10;
// return el.rating.rate > 4 && el.price < 50
// });

// const r = products.filter(el => el.price < 50).map(el => el.title )

const r = products.findIndex(el => el.id === 5)
// // const r = fruits.filter(el => el.length === 4);

// const r = fruits.reduce)

// console.log(r);

const nums = [1, 2, 3, 4, 5];

// console.log(
//   nums.reduce((pv, cv) => {

//     console.log(pv, cv);

//     return pv + cv;
//   },0)
// );

// const r = products.reduce((pv,cv) => pv+ cv.price , 0)

console.log(r);
