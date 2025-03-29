document.addEventListener("DOMContentLoaded", function () {
  // Load Header
  fetch("./header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
    })
    .catch((error) => console.error("Header load failed:", error));

  // Load Footer
  fetch("./footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    })
    .catch((error) => console.error("Footer load failed:", error));

  // Load Products
  loadProducts();

  // shop page products navigation function call
  shopPageProductsNavigation();
  updateActiveButton();

});

// shop page product navigation functions
const shopPageProductsNavigation = () => {
  const products_navigation = document.querySelectorAll(
    ".product_navigation_btn"
  );
  let currentIndex = 0;
  // manually button click navigation
  products_navigation.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (button.innerText !== "Next") {
        currentIndex = index;
      }
      updateActiveButton();
    });
  });

  // next button click navigation
  const nextbtn = document.getElementById("nextbtn");

  nextbtn.addEventListener("click", function () {
    if (currentIndex < products_navigation.length - 2) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateActiveButton();
  });

  const updateActiveButton = () => {
    products_navigation.forEach((btn) => btn.classList.remove("active"));
    products_navigation[currentIndex].classList.add("active");
  };
};

// products data
const products = [
  {
    id: 1,
    name: "Syltherine",
    offer: "-30%",
    desc: "Stylish cafe table",
    price: "Rp 2,500.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    offer: "-30%",
    desc: "Stylish cafe chair",
    price: "Rp 2,500.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_2.png",
  },
  {
    id: 3,
    name: "Lolito",
    offer: "-30%",
    desc: "Luxury big sofa",
    price: "Rp 7,000.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_3.png",
  },
  {
    id: 4,
    name: "Respira",
    offer: "New",
    desc: "Outdoor bar table & stool",
    price: "Rp 500.00",
    image: "./Images/Products_img/product_4.png",
  },
  {
    id: 1,
    name: "Syltherine",
    offer: "-30%",
    desc: "Stylish cafe table",
    price: "Rp 2,500.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    offer: "-30%",
    desc: "Stylish cafe chair",
    price: "Rp 2,500.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_2.png",
  },
  {
    id: 3,
    name: "Lolito",
    offer: "-30%",
    desc: "Luxury big sofa",
    price: "Rp 7,000.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_3.png",
  },
  {
    id: 4,
    name: "Respira",
    offer: "New",
    desc: "Outdoor bar table & stool",
    price: "Rp 500.00",
    image: "./Images/Products_img/product_4.png",
  },
  {
    id: 1,
    name: "Syltherine",
    offer: "-30%",
    desc: "Stylish cafe table",
    price: "Rp 2,500.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    offer: "-30%",
    desc: "Stylish cafe chair",
    price: "Rp 2,500.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_2.png",
  },
  {
    id: 3,
    name: "Lolito",
    offer: "-30%",
    desc: "Luxury big sofa",
    price: "Rp 7,000.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_3.png",
  },
  {
    id: 4,
    name: "Respira",
    offer: "New",
    desc: "Outdoor bar table & stool",
    price: "Rp 500.00",
    image: "./Images/Products_img/product_4.png",
  },
  {
    id: 1,
    name: "Syltherine",
    offer: "-30%",
    desc: "Stylish cafe table",
    price: "Rp 2,500.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_1.png",
  },
  {
    id: 2,
    name: "Leviosa",
    offer: "-30%",
    desc: "Stylish cafe chair",
    price: "Rp 2,500.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_2.png",
  },
  {
    id: 3,
    name: "Lolito",
    offer: "-30%",
    desc: "Luxury big sofa",
    price: "Rp 7,000.00",
    oldPrice: "Rp 13,000.00",
    image: "./Images/Products_img/product_3.png",
  },
  {
    id: 4,
    name: "Respira",
    offer: "New",
    desc: "Outdoor bar table & stool",
    price: "Rp 500.00",
    image: "./Images/Products_img/product_4.png",
  },
];



// Load products dynamically
function loadProducts() {
  const productContainer = document.getElementById("products");
  productContainer.innerHTML = ""; // Clear existing content

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");

    // Check if the offer is "New" and apply the "new" class
    const offerClass = product.offer === "New" ? "offer_respira" : "offer";

    productDiv.innerHTML = `
          <div class="single_product_card">
          
              <div class="${offerClass}">
                   <small>${product.offer}</small>
              </div>
              <div class="product_img">
                  <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="flex product_text">
                  <h3>${product.name}</h3>
                  <small>${product.desc}</small>
                  <div class="flex price">
                      <p>${product.price}</p>
                      ${
                        product.oldPrice
                          ? `<small>${product.oldPrice}</small>`
                          : ""
                      }
                  </div>
              </div>
              <div class="flex product_hover_details">
                  <div class="add_to_cart_btn">
                      <button class="btn">Add to cart</button>
                  </div>
                  <div class="flex emotion_btns">
                      <div class="flex e_btn">
                          <img src="./Images/Products_img/share.png" alt="Share">
                          <p>Share</p>
                      </div>
                      <div class="flex e_btn">
                          <img src="./Images/Products_img/compare.png" alt="Compare">
                          <p>Compare</p>
                      </div>
                      <div class="flex e_btn">
                          <img src="./Images/Products_img/Heart.png" alt="Heart">
                          <p>Heart</p>
                      </div>
                  </div>
              </div>
          </div>
      `;

    productContainer.appendChild(productDiv);
  });
}


// Product details page related products 




