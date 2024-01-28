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
    { name: "Cheese", price: 420.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/cheese.jpg?v=1697523222164", quantity: 0 },
    { name: "Butter", price: 240.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/butter.jpg?v=1697523196852", quantity: 0 },
    { name: "Ghee", price: 970.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/ghee.jpg?v=1697524081863", quantity: 0 },
    { name: "Milk", price: 60.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/milk.jpg?v=1697524345455", quantity: 0 },
    { name: "Milk Powder", price: 560.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/milkpowder.jpg?v=1697524354696", quantity: 0 },
    { name: "Curd", price: 90.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/curd.jpg?v=1697524283129", quantity: 0 },
    { name: "Butter Milk", price: 50.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/butter%20milk.jpg?v=1697523175015", quantity: 0 },
    { name: "Panner", price: 430.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/panner.jpg?v=1697524400208", quantity: 0 },
    { name: "Yogurt", price: 425.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/yogurt.jpg?v=1697524493644", quantity: 0 },
    { name: "Dark Fantasy", price: 120.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/dark%20fantasy.jpg?v=1697524301218", quantity: 0 },
    { name: "Cadbury Dairy Milk", price: 165.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/dairy%20milk.jpg?v=1697524292000", quantity: 0 },
    { name: "Biscuits & Cookies", price: 140.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/cookies.jpg?v=1697524277185", quantity: 0 },
    { name: "Cakes", price: 250.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/cake.jpg?v=1697522860134", quantity: 0 },
    { name: "Milky Bar", price: 50.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/milkybar.jpg?v=1697524366432", quantity: 0 },
    { name: "Kitkat", price: 50.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/kitkat.jpg?v=1697524323211", quantity: 0 },
    { name: "5 Star", price: 50.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/5star.jpg?v=1697524132211", quantity: 0 },
    { name: "Thumbsup", price: 95.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/thumbsup.jpg?v=1697524486070", quantity: 0 },
    { name: "Sprite", price: 95.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/sprite.jpg?v=1697524440933", quantity: 0 },
    { name: "Pepsi", price: 90.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/pepsi.jpg?v=1697524421200", quantity: 0 },
    { name: "Mazaa", price: 95.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/mazaa.jpg?v=1697524334829", quantity: 0 },
    { name: "Fanta;", price: 85.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/fanta.jpg?v=1697524308918", quantity: 0 },
    { name: "Mountain Dew", price: 85.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/mountaindew.jpg?v=1697524394417", quantity: 0 },
    { name: "Coke", price: 90.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/coke.jpg?v=1697524151622", quantity: 0 },
    { name: "Red Bull", price: 180.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/redbull.jpg?v=1697524427545", quantity: 0 },
    { name: "Monster", price: 130.00, image: "https://cdn.glitch.global/ac5f41f6-bea2-43f1-a31d-d4a997633339/monster.jpg?v=1697524383536", quantity: 0 },

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
