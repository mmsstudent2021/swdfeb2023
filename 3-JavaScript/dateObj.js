console.log("date lesson");

// console.log(typeof Date);
// const d = new Date("2019-07-22");
const d = new Date();
// console.log(d.getHours() + 300);

// ပြင်တာ
// d.setHours(d.getHours() + 300)
// d.setMonth(d.getMonth() + 4);
d.setDate(d.getDate()+(50/2))
// console.log(d);
console.log(d.toDateString());
console.log(d.toTimeString());

// console.log(d.getDate()); 
// console.log(d.getMonth()); 
// console.log(d.getFullYear());
// // console.log(d.getYear());

// console.log(d.getHours(),d.getMinutes());
// const days = ["sun","mon","tue","web","thu","fri","sat"];
// console.log(days[d.getDay()]);