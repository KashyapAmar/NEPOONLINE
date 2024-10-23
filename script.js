// script.js

// Placeholder function for adding to cart functionality
function addToCart(productName) {
    alert(productName + " has been added to your cart!");
}

// Attach event listeners to all "Add to Cart" buttons
document.querySelectorAll('.product-card button').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.parentElement.querySelector('h3').innerText;
        addToCart(productName);
    });
});
