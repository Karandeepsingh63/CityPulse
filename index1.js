let cartItems = [];

function addToCart(fruitName, price) {
    cartItems.push({ fruitName, price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = '';
    let totalPrice = 0;
    cartItems.forEach(item => {
        const li = document.createElement('li');
        // Displaying price in rupees
        li.textContent = `${item.fruitName} - ₹${item.price}`;
        cartList.appendChild(li);
        totalPrice += item.price;
    });
    // Displaying total price in rupees
    cartList.innerHTML += `<li>Total: ₹${totalPrice}</li>`;
}

function goToCheckout() {
    // Store cart items in localStorage for retrieval in payment page
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    // Redirect to payment gateway page
    window.location.href = 'payment.html';
}
