const numbers = [4, 2, 5, 3, 2, 7, 1, 4];
// let sum = 0;

// for(num of numbers){
//     // console.log(num);
//     sum += num;
// }
// console.log(sum);

// const arraySum = (arr) => {
//     let sum = 0
//     for(el of arr){
        
//         sum += el;
//     }
//     return sum;
// }
// console.log(arraySum(numbers));

// loop

// const resultArray = [];

// for(num of numbers){
//     console.log(num);
//     if(! resultArray.includes(num) ){
//         resultArray.push(num)

//     }
// }

// console.log(resultArray);

// let sum = 0;

// for(let num of numbers){
//     let double = num * 2;
//     sum += double;
// }

// console.log(sum);

// const total = numbers.reduce((pv, cv) => pv + cv, 0);
// console.log(total);

// const uniqueArr = new Set(numbers);
// console.log(uniqueArr);

// const sumOfDouble = numbers.map((el) => el * 2).reduce((pv, cv) => pv + cv, 0);
// console.log(sumOfDouble);



class Person {
    constructor(name,gender,age){
        this.name = name;
        this.gender = gender;
        this.age = age;
    }
    eat(){
        return `${this.name} can eat`;
    }

    sleep(){
        return `${this.name} can sleep`;
    }
}


class Student extends Person {
    constructor(name,gender,age,subject){
        super(name,gender,age);
        this.subject = subject
    }

    learn(){
        return `${this.name} can learn ${this.subject}`;
    }
}


class Monitor extends Student {
    constructor(name,gender,age,subject,room){
        super(name,gender,age,subject);
        this.room = room
    }

    lead(){
        return `${this.name} can lead room ${this.room}`;
    }
}

// const m1 = new Monitor("Zaw Zaw","male",21,"Web Dev","A");
// console.log(m1);
// console.log(m1.eat());
// console.log(m1.sleep());
// console.log(m1.learn());
// console.log(m1.lead());

// const st1 = new Student("su su","female",20,"Web Dev");
// console.log(st1);
// console.log(st1.eat());
// console.log(st1.sleep());
// console.log(st1.learn());

// const p1 = new Person("kyaw kyaw","male",15);
// console.log(p1);

// const myName = new String("hein htet zan");
// const myName = "hein htet zan";
// console.log(myName);
// console.log(myName[10]);
// console.dir(myName.toUpperCase());


class BankAccount {

    #balance = 0;
    transition = [];

    constructor(name){
        this.name = name;
    }

    deposit(amount){
        this.transition.push({
            amount,
            type : "deposit"
        })
        this.#balance += amount;
    }

    checkBalance(){
        return this.#balance;
    }

    withdraw(amount){
        if(amount <= this.#balance){
            this.transition.push({
                amount,
                type : "withdraw"
            })
            this.#balance -= amount;
        }else{
            console.log("Not Enough Money");
        }
    }

    //getter,setter

    // getBalance(){
    //     return this.#balance;
    // }

    // setBalance(amount){
    //     this.#balance = amount;
    // }
}

const mine = new BankAccount("hein htet zan",100);
// mine.deposit(100);
// mine.deposit(50);
// mine.deposit(120);
// console.log(mine.checkBalance());
// mine.withdraw(300);
// console.log(mine.checkBalance());
// mine.withdraw(100);

// console.table(mine.transition);
// console.log(mine.checkBalance());




// mine.#balance = 100
// mine.setBalance(100);
// console.log(mine.getBalance());

function factorial(n) {
    console.log(n);
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
console.log(factorial(5));