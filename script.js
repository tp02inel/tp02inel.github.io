let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
}

function loadCart() {
    let list = document.getElementById("cart-items");
    let total = 0;

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - £" + item.price;
        list.appendChild(li);
        total += item.price;
    });

    document.getElementById("total").textContent = "Total: £" + total;
}

if (document.getElementById("cart-items")) {
    loadCart();
}
