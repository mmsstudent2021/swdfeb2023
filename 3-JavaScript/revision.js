// // class X {
// //     a = "aaa";
// //     b = "bbb";
// // }

// // class Y extends X{
// //     c = "ccc";
// //     d = "ddd";
// // }

// // const x = new X();
// // console.log(x);

// // const y = new Y();
// // console.log(y);

// const h1 = document.createElement("h1");
// h1.title = "san kyi tar";
// h1.innerText = "Heading Element"
// h1.offsetLeft = 100

// // console.dir(h1);


// const img = new Image(300,300);
// // const img = document.createElement("img");
// // img.width = 300;
// img.src = "https://i.pinimg.com/originals/b4/a9/a3/b4a9a3a0af90bbd33158fcd1ffb76f1e.jpg";
// img.title = "hello"
// // console.dir(img);


// document.body.append(img)
// document.body.append(h1);



// const clickMe = document.querySelector("#clickMe");
// console.log(clickMe);

// clickMe.addEventListener("click",(event) => {
//     // event.preventDefault()
//     console.log(event);
// })

// // window.addEventListener("load",(event) => {
// //     console.log(event);
// // })


// const h1 = document.querySelector("#h1");
// const btn = document.querySelector("#btn");

// function showConsole(){
//     console.log(h1.innerHTML);

// }

// h1.addEventListener('click',showConsole)

// btn.addEventListener("click",() => {
//     h1.removeEventListener("click",showConsole);
//     console.log("h1 event clear");
// })

const box = document.querySelector(".box");
const test = document.querySelector(".test");
const click = document.querySelector(".click");



// box.addEventListener("click",() => {
//     console.log(1,"box");
// },true)
// test.addEventListener("click",() => {
//     console.log(2,"test");
// },true)
// click.addEventListener("click",(e) => {
//     // e.stopPropagation()
//     console.log(3,"click");
// })

// click.addEventListener("mouseover",(e) => {
//     // e.stopPropagation()
//     console.log(3,"mouse hover");
// })


// click.addEventListener("mouseout",(e) => {
//     // e.stopPropagation()
//     console.log(3,"mouse out");
// })

// ["click","mouseover","mouseout"].forEach(el => {
//     click.addEventListener(el,(e) => {
//         console.log(e);
//     })
// })

const ul = document.querySelector("ul");
const input = document.querySelector("input");
// console.log(ul.children);
const lis = document.querySelectorAll("li");
// console.log(lis);
// lis.forEach(li => {
//     // console.log(li);
//     li.addEventListener("click",() => {
//         console.log(li.innerText);
//     })
// })

// [...ul.children].forEach(li  => {
//     li.addEventListener('click',() => {
//         console.log(li.innerText);
//     })
// })

input.addEventListener("keyup",e=>{
    if(e.key === "Enter"){
        // console.log(input.value);
        const li = document.createElement("li");
        li.className = "list-group-item"
        li.innerHTML = `
        <button class='btn btn-danger del'>Del</button>
        ${input.value}
        `
        ul.append(li)

        input.value = null
    }
})

ul.addEventListener("click",(e) => {
    // console.log(e.target);
    if(e.target.classList.contains("del")){
        if(confirm("are U sure to delete ?")){
            e.target.closest("li").remove()
        }
    }
})