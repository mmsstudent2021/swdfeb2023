const addListBtn = document.querySelector("#addListBtn");
const runTaskBtn = document.querySelector("#runTaskBtn");
const listGroup = document.querySelector("#listGroup");

// console.dir(Worker);

const worker = new Worker("js/worker.js");

// console.log(worker);

const createList = () => {
    const li = document.createElement("li");
    li.innerText = "List - "+Math.random()
    return li;
}


const addListBtnHandler = () => {
    listGroup.append(createList())
}

runTaskBtn.addEventListener("click",() => {
    worker.postMessage("haha")
})

worker.addEventListener("message",(message) => {
    console.log(message.data);
})

addListBtn.addEventListener("click",addListBtnHandler)