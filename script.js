// Array of products
const products = [
  {
    name: "تيشيرت أسود كلاسيك",
    price: "250 EGP",
    image: "https://via.placeholder.com/300x250?text=T-Shirt+Black"
  },
  {
    name: "تيشيرت أبيض سادة",
    price: "230 EGP",
    image: "https://via.placeholder.com/300x250?text=T-Shirt+White"
  },
  {
    name: "تيشيرت أزرق كاجوال",
    price: "270 EGP",
    image: "https://via.placeholder.com/300x250?text=T-Shirt+Blue"
  },
  {
    name: "تيشيرت رياضي رمادي",
    price: "300 EGP",
    image: "https://via.placeholder.com/300x250?text=T-Shirt+Gray"
  }
];

// Inject products into the grid
const grid = document.getElementById("grid");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = 
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <a href="#" class="btn">اشترِ الآن</a>
  ;
  grid.appendChild(div);
});
