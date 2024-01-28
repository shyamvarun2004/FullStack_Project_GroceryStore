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
    { name: "Cloves", price: 353.00, image: "images/oil&spices/cloves.jpg", quantity: 0 },
    { name: "Bay Leaf", price: 125.00, image: "images/oil&spices/bayleaf.jpg", quantity: 0 },
    { name: "Cardamom", price: 401.00, image: "images/oil&spices/cardamom.jpg", quantity: 0 },
    { name: "Cinnamon", price: 85.00, image: "images/oil&spices/cinnamon.jpg", quantity: 0 },
    { name: "Turmeric", price: 165.00, image: "images/oil&spices/turmeric.jpg", quantity: 0 },
    { name: "Cashew", price: 750.00, image: "images/oil&spices/cashew.jpg", quantity: 0 },
    { name: "Black Pepper", price: 110.00, image: "images/oil&spices/blackpepper.jpg", quantity: 0 },
    { name: "Almond", price: 780.00, image: "images/oil&spices/almond.jpg", quantity: 0 },
    { name: "Salt", price: 49.00, image: "images/oil&spices/salt.jpg", quantity: 0 },
    { name: "Poppy Seeds", price: 465.00, image: "images/oil&spices/poppyseeds.jpg", quantity: 0 },
    { name: "Sesame", price: 441.00, image: "images/oil&spices/sesame.jpg", quantity: 0 },
    { name: "Star Anise", price: 140.00, image: "images/oil&spices/star anise.jpg", quantity: 0 },
    { name: "Coriander Seed", price: 250.00, image: "images/oil&spices/corianderseed.jpg", quantity: 0 },
    { name: "Garlic", price: 160.00, image: "images/oil&spices/garlic.jpg", quantity: 0 },
    { name: "Ginger", price: 95.00, image: "images/oil&spices/ginger.jpg", quantity: 0 },
    { name: "Saffron", price: 549.00, image: "images/oil&spices/saffron.jpg", quantity: 0 },
    { name: "Tamarind", price: 160.00, image: "images/oil&spices/tamarind.jpg", quantity: 0 },
    { name: "Red Chillies", price: 350.00, image: "images/oil&spices/redchillies.jpg", quantity: 0 },
    { name: "Groundnut Oil", price: 195.00, image: "images/oil&spices/groundnutoil.jpg", quantity: 0 },
    { name: "Palm Oil", price: 95.00, image: "images/oil&spices/palm.jpg", quantity: 0 },
    { name: "Sunflower Oil;", price: 120.00, image: "images/oil&spices/sunfloweroil.jpg", quantity: 0 },
    { name: "Mustard Oil", price: 265.00, image: "images/oil&spices/mustardoil.jpg", quantity: 0 },
    { name: "Olive Oil", price: 745.00, image: "images/oil&spices/oliveoil.jpg", quantity: 0 },
    { name: "Almond Oil", price: 489.00, image: "images/oil&spices/almondoil.jpg", quantity: 0 },
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
            <button onclick="changeDecreaseQuantity(${key}, ${value.quantity-1})">-</button>
            <div class="count">${value.quantity}</div>
            <button onclick="changeIncreaseQuantity(${key}, ${value.quantity+1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeDecreaseQuantity(key, quantity){
    if(quantity == 0){
        listCards[key].price = products[key].price
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}
function changeIncreaseQuantity(key, quantity){
    if(quantity == 0){
        listCards[key].price = products[key].price
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCart();
}