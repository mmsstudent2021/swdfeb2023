// console.log(window);

// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
// });

// window.addEventListener("resize", () => {
//   console.log(window.innerWidth, window.innerHeight);
//   console.log(window.outerWidth, window.outerHeight);
// });

// window.addEventListener("load", () => {
//   console.log("one");
// });

// console.log("two");
// console.log("three");

// window.addEventListener("online",() => {
//     console.log("U are online");
// })

// window.addEventListener("offline",() => {
//     console.log("U are offline");
// })

// window.setTimeout(() => {
//     console.log("settimeout");
// },5000)

// window.setInterval(() => {
//     // console.log("set interval")
//     console.log(Date());
// },1000)

// const clock = document.querySelector(".clock");
// const stopBtn = document.querySelector("#stopBtn");

// const currentTime = () => {
//     const date = new Date();
//     const result = date.getHours()+" : "+ date.getMinutes()+" : "+date.getSeconds();
//     return result;
// }

// const runClock = setInterval(() => {
//     clock.innerText = currentTime()
// },1000)

// stopBtn.addEventListener("click",() => {
//     clearInterval(runClock);
// })

// const run = setTimeout(() => {
//   console.log("Time Out Function");
// }, 5000);

// const run = setInterval(() => {
//     console.log("Interval Function");
//   }, 1000);

// console.log(run);

// const openMdn = document.querySelector("#openMdn");
// openMdn.addEventListener("click", () => {
//   window.open("https://www.mozilla.org/", "mozillaTab");

// //   const windowFeatures = "left=100,top=100,width=320,height=320";
// //   const handle = window.open(
// //     "https://www.mozilla.org/",
// //     "mozillaWindow",
// //     windowFeatures
// //   );

//   const windowFeatures2 = "right=0,top=0,width=640,height=1000";
//   const handle2 = window.open(
//     "https://mms-it.com/",
//     "mozillaWindow",
//     windowFeatures2
//   );
// });


const closeBtn = document.querySelector("#closeBtn");
const h1 = document.querySelector("h1");
const end = document.querySelector("#end");


document.body.prepend(Math.random())


closeBtn.addEventListener("click",() => {
    // window.close()
    // window.resizeTo(500, 500);
    // console.log(end.getBoundingClientRect());
    // window.scrollTo(0,end.getBoundingClientRect().y - 300);
    // setTimeout(() => {
    //     window.scrollTo(0,end.getBoundingClientRect().y + 300);
        
    // },2000)

    // setTimeout(() => {
    //     location.href = "https://mms-it.com"   
    // },5000)


    // location.reload()
})