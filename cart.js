let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadCart() {
    let box = document.getElementById("cart-items");
    let total = 0;

    box.innerHTML = "";

    cart.forEach((item, i) => {
        total += item.price * item.qty;

        box.innerHTML += `
            <div class="cart-card">
                <img src="assets/images/${item.img}">
                <div>
                    <h3>${item.name}</h3>
                    <p>Price: ${item.price} ৳</p>
                    <p>Qty: ${item.qty}</p>
                </div>
            </div>
        `;
    });

    document.getElementById("total").innerText = total;
}

loadCart();

function checkout() {
    window.location.href = "payment.html";
}