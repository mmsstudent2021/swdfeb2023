// function run(){
//     console.log("one");
//     console.log("two");
//     console.log("three");
// }

// run();

// function createTriangle() {
//   console.log("*");
//   console.log("* *");
//   console.log("* * *");
//   console.log("* * * *");
//   return "I'm triangle";
//   console.log("* * * * *");
// }

// console.log(createTriangle());

// if U know your age, I can find birth year
// 2023 - yourAge = birthYear

// function findBirthYear(age=0) {
//     console.log(age)
//   let birthYear = 2023 - age;
//   return birthYear;
// }

// console.log(findBirthYear(29));
// console.log(findBirthYear(22));
// console.log(findBirthYear(20));
// console.log(findBirthYear(19));
// console.log(findBirthYear(55));
// console.log(findBirthYear(15));
// console.log(findBirthYear());

// let results = [];
// let index = 0;

// function roomArea(width, breadth) {
//   let area = width * breadth;
//   let result = {
//     width: width + "ft",
//     breadth: breadth + "ft",
//     area: area + "sqft",
//   };
//   //store current result in result array
//   results[index++] = result;
//   return result;
// }

// console.log(roomArea(17, 60));
// console.log(roomArea(20, 40));
// console.log(roomArea(50, 50));
// console.log(roomArea(25, 50));
// console.log(roomArea(15, 50));

// console.table(results);

// 1 USD = 2100 MMK

// 150USD = ? MMK
// 79 EUR = ? MMK
// 30 SGD = ? MMK

// let rates = {
//   USD: 2100,
//   SGD: 1574,
//   EUR: 2251,
// };

// function toMMK(amount, fromCurrency) {
//   let currentRate = rates[fromCurrency];
//   return amount * currentRate + " MMK";
// }

// console.log(toMMK(150, "USD"));
// console.log(toMMK(79, "SGD"));
// console.log(toMMK(30, "EUR"));

// // 1450000 MMK to USD
// // 680000 MMK to SGD
// // 89000 MMK to EUR

// function mmkToCurrency(amount, toCurrency) {
//   let currentRate = rates[toCurrency];
//   return amount / currentRate + " " + toCurrency;
// }

// console.log(mmkToCurrency(1450000, "USD"));
// console.log(mmkToCurrency(680000, "SGD"));
// console.log(mmkToCurrency(89000, "EUR"));

// 450 USD = ? EUR
// 500 SGD = ? USD

// let fruits = {
//   apple: 50,
//   orange: 65,
//   mango: 120,
//   banana: 20,
// };

// let records = [];
// let index = 0;
// let total = 0;

// function buy(fruitName, quantity) {
//   let fruitPrice = fruits[fruitName];
//   let cost = fruitPrice * quantity;
//   let record = {
//     name: fruitName,
//     price: fruitPrice,
//     quantity,
//     cost,
//   };
//   records[index++] = record;
//   total += cost;
//   return record;
// }

// function tax(amount, percentage = 5) {
//   return amount * (percentage / 100);
// }

// console.log(buy("apple", 5));
// console.log(buy("mango", 2));
// console.log(buy("banana", 15));

// console.table(records);
// let currentTax = tax(total);

// console.table({
//   total,
//   tax: currentTax,
//   subTotal: total + currentTax,
// });

// fun expression

// let run = function () {
//   return "I'm fun expression";
// };

// console.log(run());

// (function () {
//   console.log("I'm IIFE");
// })();

// let x = function () {
//   return "x";
// };

// let y = function y() {
//   return x() + "y";
// };

// console.log(y());

// variable scoping

// {
//   let x = "x";
// }
// console.log(x);

// {
//   let x = "x";
//   console.log(x);
// }

// console.log(x);
// let x;
// function run() {
//   x = "x";
//   console.log(x);
// }

// // run();
// console.log(x);

// console.log(x());

// function x() {
//   return "x";
// }

// console.log(y());

// let y = function () {
//   return "y";
// };

// console.log(x);
// let x = 5;
