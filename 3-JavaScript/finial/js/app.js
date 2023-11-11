function currentYear() {
  const date = new Date();
  return date.getFullYear();
}

let x = 5;
const y = 10;
a = 12;

let myBd = "1994-07-22";

function findAge(bdDateString) {
  const bdDate = new Date(bdDateString);
  const bdYear = bdDate.getFullYear();
  return currentYear() - bdYear;
}


let myName = "Hein Htet Zan";

function intro(){
    return `My name is ${myName} and ${findAge(myBd)} years old.`;
}

console.log(intro());