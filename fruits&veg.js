let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    { name: "Apples", price: 70.00, image: "images/fruits/apple.jpg.jpeg", quantity: 0 },
    { name: "Bananas", price: 40.00, image: "images/fruits/bananna.jpg.jpeg", quantity: 0 },
    { name: "Oranges", price: 60.00, image: "images/fruits/orange.jpg.jpeg", quantity: 0 },
    { name: "Carrots", price: 30.00, image: "images/fruits/carrot.jpg", quantity: 0 },
    { name: "Broccoli", price: 55.00, image: "images/fruits/broccoli.jpg", quantity: 0 },
    { name: "Beetroot", price: 25.00, image: "images/fruits/beetroot.jpg", quantity: 0 },
    { name: "Brinjal", price: 20.00, image: "images/fruits/brinjal.jpg", quantity: 0 },
    { name: "Potato", price: 40.00, image: "images/fruits/potato.jpg", quantity: 0 },
    { name: "Cauliflower", price: 15.00, image: "images/fruits/cauliflower.jpg", quantity: 0 },
    { name: "Guava", price: 50.00, image: "images/fruits/gauva.jpg", quantity: 0 },
    { name: "Watermellon", price: 75.00, image: "images/fruits/watermellon.jpg.jpeg", quantity: 0 },
    { name: "Dragan Fruit", price: 100.00, image: "images/fruits/dragonfruit.jpg", quantity: 0 },
    { name: "Grapes", price: 80.00, image: "images/fruits/grapes.jpg", quantity: 0 },
    { name: "Custard Apple", price: 150.00, image: "images/fruits/capple.jpg", quantity: 0 },
    { name: "Kiwi", price: 120.00, image: "images/fruits/kiwi.jpg", quantity: 0 },
    { name: "Strawberry", price:100.00, image: "images/fruits/strawberry.jpg.jpeg", quantity: 0 },
    { name: "Papaya", price: 45.00, image: "images/fruits/papple.jpg", quantity: 0 },
    { name: "Pear", price: 30.00, image: "images/fruits/pear.jpg", quantity: 0 },
    { name: "Pine Apple", price: 90.00, image: "images/fruits/papple.jpg", quantity: 0 },
    { name: "Tomatoes", price: 50.00, image: "images/fruits/tomatoes.jpg", quantity: 0 },
    { name: "Radish", price: 35.00, image: "images/fruits/radish.jpg", quantity: 0 },
    { name: "Onion", price: 40.00, image: "images/fruits/onions.jpg", quantity: 0 },
    { name: "Cabbage", price: 20.00, image: "images/fruits/cabbage.jpg", quantity: 0 },
    { name: "Pumpkin", price: 40.00, image: "images/fruits/pumpkins.jpg", quantity: 0 },
    { name: "Cucumbers", price: 60.00, image: "images/fruits/cucumbers.jpg", quantity: 0 },
];

let listCards = []
function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img class="image" src="${value.image}" />
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCart(${key})">Add to Cart</button>
        `;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCart(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCart();
}

function reloadCart(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="${value.image}"/> </div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>
            <button onclick="changeQuantity(${key}, ${value.quantity-1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeQuantity(${key}, ${value.quantity+1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}
