const products = [
  {
    name: "تيشيرت أسود كلاسيك",
    price: "250 جنيه",
    image: "https://via.placeholder.com/300x250?text=T-Shirt+Black"
  },
  {
    name: "تيشيرت أبيض سادة",
    price: "230 جنيه",
    image: "https://via.placeholder.com/300x250?text=T-Shirt+White"
  },
  {
    name: "تيشيرت أزرق كاجوال",
    price: "270 جنيه",
    image: "https://via.placeholder.com/300x250?text=T-Shirt+Blue"
  },
  {
    name: "تيشيرت رياضي رمادي",
    price: "300 جنيه",
    image: "https://via.placeholder.com/300x250?text=T-Shirt+Gray"
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
    <a href="https://wa.me/201234567890" class="btn" target="_blank">اطلب عبر واتساب</a>
  ;
  grid.appendChild(div);
});
