// Simulated backend data
const products = [
    { id: 1, name: 'Product 1', price: 10.99, category: 'Electronics' },
    { id: 2, name: 'Product 2', price: 19.99, category: 'Clothing' },
    { id: 3, name: 'Product 3', price: 25.99, category: 'Electronics' },
    // Add more products as needed
];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
});

function displayProducts() {
    const productList = document.getElementById('productList');

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>Category: ${product.category}</p>
            <button onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;

        productList.appendChild(productItem);
    });
}

function addToCart(id, name, price) {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    const cartItem = document.createElement('li');
    cartItem.className = 'cart-item';
    cartItem.innerHTML = `
        ${name} - $${price.toFixed(2)}
        <button onclick="removeFromCart(${id}, ${price})">Remove</button>
    `;

    cartItems.appendChild(cartItem);

    // Update total price
    let currentTotal = parseFloat(totalPrice.innerText);
    currentTotal += price;
    totalPrice.innerText = currentTotal.toFixed(2);
}

function removeFromCart(id, price) {
    const cartItems = document.getElementById('cartItems');
    const totalPrice = document.getElementById('totalPrice');

    const itemToRemove = Array.from(cartItems.children).find(item =>
        item.innerText.includes(`- $${price.toFixed(2)}`)
    );

    if (itemToRemove) {
        itemToRemove.remove();

        // Update total price
        let currentTotal = parseFloat(totalPrice.innerText);
        currentTotal -= price;
        totalPrice.innerText = currentTotal.toFixed(2);
    }
}

function checkout() {
    const cartItems = document.getElementById('cartItems');
    alert(`Checkout complete! Total: $${parseFloat(totalPrice.innerText).toFixed(2)}`);
    // Additional logic can be added here, e.g., sending the order to a backend
    cartItems.innerHTML = '';
    totalPrice.innerText = '0.00';
}