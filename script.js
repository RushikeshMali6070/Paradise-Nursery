const plants = [
  { id:1, name:"Aloe Vera", price:150, img:"https://cdn.pixabay.com/photo/2016/07/23/10/38/aloe-vera-1538860_1280.jpg" },

  { id:2, name:"Snake Plant", price:200, img:"https://cdn.pixabay.com/photo/2017/08/07/08/23/sansevieria-2594314_1280.jpg" },

  { id:3, name:"Money Plant", price:120, img:"https://cdn.pixabay.com/photo/2017/06/25/12/28/money-plant-2439982_1280.jpg" },

  { id:4, name:"Spider Plant", price:180, img:"https://cdn.pixabay.com/photo/2016/10/13/09/06/spider-plant-1735923_1280.jpg" },

  { id:5, name:"Peace Lily", price:250, img:"https://cdn.pixabay.com/photo/2017/01/20/00/30/spathiphyllum-1996342_1280.jpg" },

  { id:6, name:"Rubber Plant", price:300, img:"https://images.unsplash.com/photo-1593691509543-c55fb32e7355?q=80&w=800" },

  { id:7, name:"Areca Palm", price:350, img:"https://images.unsplash.com/photo-1524593166156-312f362cada0?q=80&w=800" },

  { id:8, name:"Fern", price:170, img:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800" },

  { id:9, name:"Bonsai", price:500, img:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800" },

  { id:10, name:"Cactus", price:90, img:"https://images.unsplash.com/photo-1459156212016-c812468e2115?q=80&w=800" },

  { id:11, name:"Rose Plant", price:200, img:"https://images.unsplash.com/photo-1496062031456-07b8f162a322?q=80&w=800" },

  { id:12, name:"Hibiscus", price:210, img:"https://images.unsplash.com/photo-1597848212624-a19eb35e2651?q=80&w=800" },

  { id:13, name:"Sunflower", price:130, img:"https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=800" },

  { id:14, name:"Lavender", price:250, img:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=800" },

  { id:15, name:"Tulsi", price:100, img:"https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=800" },

  { id:16, name:"Mint Plant", price:80, img:"https://images.unsplash.com/photo-1628556270448-4d4e4148e5f8?q=80&w=800" },

  { id:17, name:"Neem Plant", price:150, img:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800" },

  { id:18, name:"Jade Plant", price:220, img:"https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=800" },

  { id:19, name:"Orchid", price:400, img:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=800" },

  { id:20, name:"Bamboo Plant", price:260, img:"https://images.unsplash.com/photo-1497250681960-ef046c08a56e?q=80&w=800" }
];

let cart = JSON.parse(localStorage.getItem("cart")) || {};

const container = document.getElementById("products");

if(container){
  plants.forEach(p=>{
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id){
  let item = plants.find(p => p.id === id);

  if(cart[id]) cart[id].qty++;
  else cart[id] = {...item, qty:1};

  localStorage.setItem("cart", JSON.stringify(cart));

  alert(item.name + " added to cart");
}