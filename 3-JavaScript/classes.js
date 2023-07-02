// console.log("hello");


// class Student {
//     // name, major, age, gender

//     // properties
//     name = "Mg Mg";
//     major = "SWD";
//     age = 18;
//     gender = "male";

//     learn(){
//         return this.name + "can learn "+ this.major;
//     }

//     constructor(x){
//         console.log("I'm constructor",x);
//     }

//     //methods
//     eat(){
//         return this.name + "can eat";
//     }

    
// }

// const st = new Student("xxx");
// // // console.log(st);

// // console.log(st.name);
// console.log(st.learn());

// const stA = {
//     name : "",
//     age : 15,
// }


// const stB = {
//     name : "",
//     age : 15,
// }


// const stC = {
//     name : "",
//     age : 15,
// }


class Student {

    static Uniform = "green and white";
    static try(){
        return "Student must try";
    }

    // male = Mr, female Mis
    #languages = {
        SWD : ["html","css","js"],
        WAD : ["php","sql"]
    }

    prefixes = {
        male : "Mr ",
        female : "Mis "
    }

    constructor(inputName,inputAge,inputGender,inputMajor){
        this.name = inputName;
        this.age = inputAge;
        this.gender = inputGender;
        this.major = inputMajor;

        this.genderPrefix = this.prefixes[this.gender];
        this.fullName = this.genderPrefix + this.name;
    }

    learn(){
        return `${this.name} can learn ${this.major} including ${this.#languages[this.major]} `;
    }

    introduction(){
        return `My name is ${this.fullName} and ${this.age} year${this.age > 1 && "s"} old. Now I'm learning about ${this.major} including ${this.#languages[this.major]}`;
    }

}

// const st1 = new Student("Mg Mg",16,"male","SWD");

// const st2 = new Student("Su Su",18,"female","WAD");

// const st3 = new Student("Hla Hla",17,"female","SWD");

// console.log(Student.Uniform);
// console.log(Student.try());

// console.log(st1.#languages);

// console.log(st1.fullName);
// console.log(st1.genderPrefix);
// console.log(st1.learn());
// console.log(st1.introduction());

// console.log(st1.learn());
// console.log(st2.learn());
// console.log(st3.learn());

// class Monitor extends Student {

//     section = "Weekday"

// }

// const mt1 = new Monitor("Kaung Kaung",19,"male","SWD");
// console.log(mt1);


class Test {
    #x = 5;

    //encapsulation

    getX(){
        return this.#x + 10;
    }

    setX(newX){
        this.#x = newX + 10;
        return this.#x;
    }
}

const test = new Test;

// console.log(test.#x);
// test.x = 10;
// console.log(test.x);

console.log(test.getX());
console.log(test.setX(10));
console.log(test.getX());
