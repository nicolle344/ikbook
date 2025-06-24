// Carrito con localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("¡Producto añadido al carrito!");
}

// Ejemplo de uso
document.querySelector(".add-to-cart").addEventListener("click", () => {
    addToCart({ name: "Libro Ejemplo", price: 29900 });
});
