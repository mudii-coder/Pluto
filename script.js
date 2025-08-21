const products = [
  {
    name: "تيشيرت أسود كلاسيك",
    price: "250 جنيه",
    image: "images/tshirt1.jpg"
  },
  {
    name: "تيشيرت أبيض سادة",
    price: "230 جنيه",
    image: "images/tshirt2.jpg"
  },
  {
    name: "تيشيرت أزرق كاجوال",
    price: "270 جنيه",
    image: "images/tshirt3.jpg"
  },
  {
    name: "تيشيرت رياضي رمادي",
    price: "300 جنيه",
    image: "images/tshirt4.jpg"
  }
];

const grid = document.getElementById("grid");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = 
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <a href="https://wa.me/201125278228" class="btn" target="_blank">ORDER NOW</a>
  ;
  grid.appendChild(div);
});
