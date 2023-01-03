const cakes = [
  {
      id: 0,
      image: 'images/brownie.jpg',
      title: 'Brownie',
      price: 15,
  },
  {
      id: 1,
      image: 'images/red.jpg',
      title: 'Red Velvet Cake',
      price: 60,
  },
  {
      id: 2,
      image: 'images/cupchoc.jpg',
      title: 'Chocolate Cupcake',
      price: 8,
  },
  {
      id: 3,
      image: 'images/macaron.jpg',
      title: 'Macaron',
      price: 9,
  },
  {
    id: 4,
    image: 'images/nutella.jpg',
    title: 'Nutella Cake',
    price: 40,
  },
  {
    id: 5,
    image: 'images/cakes.jpg',
    title: 'Special Cake',
    price: 75,
  }
];

let i = 0;
const products = [...new Set(cakes.map(function(item) {
return item;
}))];
const bakeryElement = document.getElementById('bakery');
bakeryElement.innerHTML = products
.map((item) => {
  const { image, title, price } = item;
  return `
    <div class='box'>
      <div class='img-box'>
        <img class='images' src=${image}></img>
      </div>
      <div class='bottom-img'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>
        <input class='amount' type="number" min="1" value="1">
        <button onclick='addToOrder(${i++})'>Add to cart</button>
      </div>
    </div>
  `;
  
})
.join('');

const order =[];

function addToOrder(index) {
const item = products[index];
const quantityInput = document.getElementsByClassName("amount")[index];
const quantity = parseInt(quantityInput.value);
const cost = quantity * item.price;
order.push({
  title: item.title,
  quantity: quantity,
  price: item.price,
  cost: cost,
  
});
orderDetail();
}

function delElement(a){
  order.splice(a, 1);
  orderDetail();
}

function orderDetail() {
  let j = 0;
  let total = 0;
  
  if (order.length == 0) {
    document.getElementById("cartItem").innerHTML = "Your cart is empty";
    document.getElementById("quantity").innerHTML = "0";
    document.getElementById("total").innerHTML = "$ 0.00";
    document.getElementById("cost").innerHTML = "$ 0.00";
  } else {
    document.getElementById("cartItem").innerHTML = order.map((items) => {
      const { title, quantity, price, cost} = items;

      // Update the total price by adding the price of the current item
      total += cost;
      
      document.getElementById("total").innerHTML = "$ " + total + ".00";

      return (
          `<div class='cart-item'>
          <p style='font-size:13px;'>${title}</p>
          <p style='font-size:12px;'>${quantity}</p>
          <h2 style='font-size: 13px;'>$ ${price}.00</h2>
          <p style='font-size:12px;'>$ ${cost}</p>
          <button onclick='delElement("+(j++)+")'>Remove</button>
        </div>`
      );
    }).join("");
  }
}





