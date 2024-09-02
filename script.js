let cart = [];
let totalPrice = 0;

function addToCart(productName, price, quantityId) {
    let quantity = parseInt(document.getElementById(quantityId).value);
    if (quantity > 0) {
        cart.push({ productName, price, quantity });
        updateCart();
    }
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';
    totalPrice = 0;

    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.productName} x ${item.quantity} - $${item.price * item.quantity}`;
        cartItems.appendChild(li);
        totalPrice += item.price * item.quantity;
    });

    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}
