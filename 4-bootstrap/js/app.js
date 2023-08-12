const slides = new bootstrap.Carousel("#carouselExampleIndicators");
const modal = new bootstrap.Modal("#exampleModal", {
  backdrop: "static",
  keyboard: false,
});

const show= document.querySelector("#show");

show.addEventListener('click',() => {
    Swal.fire({
        title: "San Kyi Tar Par Byar",
        text: "hello hello testing 123",
        icon: "question",
        confirmButtonText: "Confirm",
        showCancelButton: true,
      });
})


const veno = new VenoBox({
    selector: '.hhz',
    overlayColor : '#ffffff99',
    share : true,
    titleattr : 'data-title'
  });

//   veno.open()

// confirm("hello")
// let isShow = false;

// console.log(slides);

// document.addEventListener("keyup",(e) => {
//     // console.log(e);
//     if(e.keyCode === 13){
//         slides.next()
//     }
// })

// window.addEventListener("scroll",e => {
//     console.log(window.scrollY);
//     if(window.scrollY > 1000 && isShow === false){
//         modal.show()
//         isShow = true
//     }
// })
