//data

const config = {
  min: 1,
  max: 5,
  defaultItemQuantity: 1,
};
// categories.unshift("All")

// selectors

const app = document.querySelector("#app");
const search = document.querySelector("#search");
const cartButton = document.querySelector("#cartButton");
const categoriesList = document.querySelector("#categoriesList");
const productList = document.querySelector("#productList");
const cartCounterBadge = document.querySelectorAll(".cart-counter-badge");
const carts = document.querySelector("#carts");
const totalCost = document.querySelector("#totalCost");
const order = document.querySelector("#order");
const myCart = new bootstrap.Offcanvas("#mycart");

// function

const calculateTotalCost = () => {
  totalCost.innerText = [...document.querySelectorAll(".item-in-cart-cost")]
    .reduce((pv, cv) => pv + parseFloat(cv.innerHTML), 0)
    .toFixed(2);
};

const cartCounter = () => {
  cartCounterBadge.forEach((el) => (el.innerText = carts.children.length));
};

const createItemInCart = ({ id, title, image, price }) => {
  const itemInCart = document.createElement("div");
  itemInCart.classList.add("item-in-cart");
  itemInCart.setAttribute("item-in-cart-id", id);
  itemInCart.innerHTML = `
      <div class="mb-3">
        <img class="item-in-cart-img ms-3" src="${image}" alt="">
        <div class="border border-primary bg-white overflow-hidden p-3">
          <div class="text-end">
            <div class="item-in-cart-delete " >
              <i class=" bi bi-trash3 text-danger "></i>
            </div>
          </div>
          <p class=" mb-0 text-truncate mb-2">${title}</p>
          <div class=" d-flex justify-content-between align-items-end">
            <p class=" text-black-50 mb-0">$ 
              <span class="item-in-cart-cost fs-5">${
                price * config.defaultItemQuantity
              }</span>
            </p>
            <div class="input-group item-in-cart-control" >
              <button class="btn btn-sm btn-primary item-decrement">
                <i class=" bi bi-dash"></i>
              </button>
              <input type="number" class=" form-control form-control-sm text-end item-quantity"  value="${
                config.defaultItemQuantity
              }" min="1">
              <button class="btn btn-sm btn-primary item-increment">
                <i class=" bi bi-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

  const itemInCartDelete = itemInCart.querySelector(".item-in-cart-delete");

  itemInCartDelete.addEventListener("click", removeFromCart.bind(null, id));

  const itemIncrement = itemInCart.querySelector(".item-increment");
  const itemDecrement = itemInCart.querySelector(".item-decrement");
  const itemQuantity = itemInCart.querySelector(".item-quantity");
  const itemInCartCost = itemInCart.querySelector(".item-in-cart-cost");

  const updateCost = () => {
    itemInCartCost.innerText = (itemQuantity.valueAsNumber * price).toFixed(2);
    calculateTotalCost();
  };

  itemIncrement.addEventListener("click", () => {
    itemQuantity.valueAsNumber < config.max &&
      (itemQuantity.valueAsNumber += 1);
    updateCost();
  });

  itemDecrement.addEventListener("click", () => {
    itemQuantity.valueAsNumber > config.min &&
      (itemQuantity.valueAsNumber -= 1);
    updateCost();
  });

  return itemInCart;
};

const categorize = (title, li) => {
  console.log(title);
  // must remove old active category
  // const oldActiveCategory = document.querySelector(".category-item.active");

  // console.log(oldActiveCategory);

  // // active shi hma remove mal
  // if(oldActiveCategory){
  //   oldActiveCategory.classList.remove("active")
  // }

  document.querySelector(".category-item.active")?.classList.remove("active");

  // add active class to current clicked category
  li.classList.add("active");

  fetch(`http://localhost:3000/products?category=${title}`)
    .then((res) => res.json())
    .then((products) => productRender(products));

  // if (title === "all") {
  //   productRender(products)
  // } else {
  // }

  // productRender(
  //   products.filter((product) => title === "all" || product.category === title)
  // );
};

const createCategoryItem = (title) => {
  const li = document.createElement("li");
  li.className = "category-item border border-primary p-2 me-2 text-capitalize";
  li.innerText = title;

  li.addEventListener("click", categorize.bind(null, title, li));

  return li;
};

const rateStar = (rate) => {
  let result = "";
  for (let i = 1; i <= 5; i++) {
    result +=
      i <= rate
        ? `<i class='bi me-2 bi-star-fill'></i>`
        : `<i class='bi me-2 bi-star'></i>`;
  }
  return result;
};

const handleAddToCart = (productId) => {
  const currentProductCard = document.querySelector(
    `[product-id='${productId}']`
  );

  const currentAddToCartBtn =
    currentProductCard.querySelector(".add-to-cart-btn");

  currentAddToCartBtn.classList.contains("active")
    ? removeFromCart(productId)
    : addToCart(productId);

  // console.log(id,btn);

  // if (currentAddToCartBtn.classList.contains("active")) {
  //   // remove
  //   removeFromCart(productId)
  // } else {
  //   // add to cart
  //   addToCart(productId)

  // }
};

const addToCart = (productId) => {
  const currentProductCard = document.querySelector(
    `[product-id='${productId}']`
  );

  const currentProductImg = currentProductCard.querySelector(".product-img");

  // console.log(currentProductImg.getBoundingClientRect().height);

  const tempImg = new Image();
  tempImg.src = currentProductImg.src;
  tempImg.height = currentProductImg.getBoundingClientRect().height;
  tempImg.style.position = "fixed";
  tempImg.style.top = currentProductImg.getBoundingClientRect().top + "px";
  tempImg.style.left = currentProductImg.getBoundingClientRect().left + "px";
  tempImg.style.zIndex = 2000;
  // tempImg.style.scale = 0.6;
  tempImg.style.transition = 500 + "ms";

  //new place
  setTimeout(() => {
    tempImg.style.top =
      cartButton.querySelector(".bi-cart").getBoundingClientRect().y + "px";
    tempImg.style.left =
      cartButton.querySelector(".bi-cart").getBoundingClientRect().x + "px";
    // tempImg.style.scale = 0.2;
    tempImg.style.height = 10 + "px";
  }, 100);

  tempImg.addEventListener("transitionend", () => {
    tempImg.remove();
    cartButton.classList.add("animate__tada");
    cartButton.addEventListener("animationend", () => {
      cartButton.classList.remove("animate__tada");
    });
  });

  app.prepend(tempImg);

  const currentAddToCartBtn =
    currentProductCard.querySelector(".add-to-cart-btn");

  currentAddToCartBtn.innerText = "Added";
  currentAddToCartBtn.classList.add("active");

  carts.append(
    createItemInCart(products.find((product) => product.id === productId))
  );

  cartCounter();
  calculateTotalCost();

  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-start",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: "success",
    title: "Item is added",
  });
};

const removeFromCart = (productId) => {
  // element
  const currentItemInCart = document.querySelector(
    `[item-in-cart-id = '${productId}']`
  );

  const currentProductCard = document.querySelector(
    `[product-id='${productId}']`
  );

  const currentAddToCartBtn =
    currentProductCard.querySelector(".add-to-cart-btn");

  Swal.fire({
    title: "Are you sure?",
    text: "It will remove Item from cart",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Remove",
  }).then((result) => {
    if (result.isConfirmed) {
      currentItemInCart.classList.add("animate__animated", "animate__hinge");

      currentItemInCart.addEventListener("animationend", () => {
        currentItemInCart.remove();

        cartCounter();
        calculateTotalCost();

        currentAddToCartBtn.innerText = "Add to Cart";
        currentAddToCartBtn.classList.remove("active");

        const Toast = Swal.mixin({
          toast: true,
          position: "bottom-start",
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "success",
          title: "Your item has been removed.",
        });
      });
    }
  });
};

const createProduct = (product) => {
  const productDiv = document.createElement("div");
  productDiv.className = "col-12 col-md-6 col-lg-4";
  productDiv.setAttribute("product-id", product.id);

  const isInCart = [...document.querySelectorAll("[item-in-cart-id]")].find(
    (el) => el.getAttribute("item-in-cart-id") == product.id
  );

  const normalBtn = `<button class=" btn btn-outline-primary d-block w-100 add-to-cart-btn">Add to Cart</button>`;
  const activeBtn = `<button class="active btn btn-outline-primary d-block w-100 add-to-cart-btn">Added</button>`;

  // console.log(isInCart ? true : false);

  productDiv.innerHTML = `
    <div class="product-item">
        <img src="${product.image}" class="product-img ms-3"  alt="" />
        <div class="border border-primary p-3">
            <p class="product-title fw-bold text-truncate">${product.title}</p>
            <p class="product-description small text-black-50">${product.description.substring(
              0,
              120
            )}</p>
            <div class=" d-flex justify-content-between">
                <div class="stars">
                    ${rateStar(product.rating.rate.toFixed(0))}
                </div>
                <p>
                    ( ${product.rating.rate} / 5)
                </p>
            </div>
            <hr>
            <p class="product-price fw-bold">
                $ <span class="price">${product.price}</span>
            </p>


            ${isInCart ? activeBtn : normalBtn}
        </div>
    </div>
    `;

  const addToCartBtn = productDiv.querySelector(".add-to-cart-btn");

  addToCartBtn.addEventListener(
    "click",
    handleAddToCart.bind(null, product.id)
  );

  return productDiv;
};

const placeOrder = () => {
  const itemInCart = document.querySelectorAll(".item-in-cart");
  if (itemInCart.length === 0) {
    Swal.fire(
      "Please add any item to cart",
      "You don't have any item selected",
      "warning"
    );
  } else {
    Swal.fire({
      title: "Are you ready to place Order ?",
      text: "It will send order items' information to sellers",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Confirm",
    }).then((result) => {
      const allItemInCart = carts.querySelectorAll(".item-in-cart");
      const items = [];
      const myOrder = {};

      allItemInCart.forEach((el) => {
        // const item = {
        //   productId : el.getAttribute("item-in-cart-id"),
        //   quantity : el.querySelector(".item-quantity").valueAsNumber
        // }
        const item = {};
        item.productId = el.getAttribute("item-in-cart-id");
        item.quantity = el.querySelector(".item-quantity").valueAsNumber;

        items.push(item);
      });

      // add ordered items to myOrder Object
      myOrder.items = items;
      myOrder.total = totalCost.innerText;
      myOrder.user_id = 5;
      myOrder.user_name = "Hein Htet Zan";
      myOrder.order_id = "XG35223DF39";

      console.log(myOrder);

      carts.innerHTML = null;
      cartCounter();
      calculateTotalCost();

      myCart.hide();

      Swal.fire(
        "Order Successful!",
        "Your ordered is taken place to seller.",
        "success"
      );
    });
  }
};

const searchProduct = (keyword) => {
  productRender(
    products.filter((product) => {
      return (
        product.title.search(keyword) != -1 ||
        product.description.search(keyword) != -1
      );
    })
  );
};

const productRender = (productsToRender) => {
  productList.innerHTML = null;
  productsToRender.forEach((product) =>
    productList.append(createProduct(product))
  );
};

const categoryRender = () => {
  fetch("http://localhost:3000/categories")
    .then((res) => res.json())
    .then((categories) => {
      categories.forEach((category) => {
        categoriesList.append(createCategoryItem(category));
        categoriesList.children[0].classList.add("active");
      });
    });
};

// process

(async () => {
  const catRes = await fetch("http://localhost:3000/categories");
  const categories = await catRes.json();

  categoriesList.innerHTML = "";

  categories.forEach((category) => {
    categoriesList.append(createCategoryItem(category));
    categoriesList.children[0].classList.add("active");
  });

  const productRes = await fetch("http://localhost:3000/products");
  const products = await productRes.json();
  productRender(products);

  config.max = 7;

  config.defaultItemQuantity = 3;

  order.addEventListener("click", placeOrder);
})();
