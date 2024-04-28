let cart = {};

function addToCart(itemId) {
    if (itemId in cart) {
        cart[itemId]++;
    } else {
        cart[itemId] = 1;
    }
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const cartTotalDiv = document.getElementById("cart-total");
    
    cartItemsDiv.innerHTML = "";
    let total = 0;
    
    for (const itemId in cart) {
        const item = document.createElement("div");
        item.innerHTML= 
        `<div class="divdes"><i onclick="removeFromCart('${itemId}')" style="display:flex"; class="fa-solid fa-trash"></i><img class="image_size" src=${getItemImg(itemId)}><div class="div2"><p style="margin-right: 0%;font-weight: 800;"> ${cart[itemId]}  x  ${getItemName(itemId)}  <span> $${getItemPrice(itemId)  * cart[itemId]}</p></span></div></div>`;
        cartItemsDiv.appendChild(item);
        
        total += getItemPrice(itemId) * cart[itemId];
        
    }
    
    cartTotalDiv.textContent = `Total: $${total}`;
}

function getItemName(itemId) {
    switch (itemId) {
        case "item1":
            return "T-shirt";
        case "item2":
            return "Jeans";
        case "item3":
            return "Sneakers";
    }
}

function getItemPrice(itemId) {
    switch (itemId) {
        case "item1":
            return 200;
        case "item2":
            return 250;
        case "item3":
            return 80;
    }
}

function getItemImg(itemId) {
    let imgss = ["images/1.jpeg","images/23waut_r0327_mdn.jpg","images/3.jpeg"]
    switch (itemId) {
        case "item1":
            return imgss[0];
        case "item2":
            return imgss[1];
        case "item3":
            return imgss[2];
        default:
            return ""; // Return an empty string if itemId doesn't match any case
    }
}

function removeFromCart(itemId) {
    if (itemId in cart) {
        if (cart[itemId] > 1) {
            cart[itemId]--;
        } else {
            delete cart[itemId];
        }
        updateCart();
        console.log(`Removed one ${getItemName(itemId)} from the cart.`);
    } else {
        console.log(`${getItemName(itemId)} is not in the cart.`);
    }
}
function checkout() {
    // Check if the cart is not empty
    if (Object.keys(cart).length > 0) {
        // Redirect to the checkout page
        window.location.href = "checkout.html"; // Replace "checkout.html" with the actual URL of your checkout page

        // Display a success message
        alert("Payment successful!");
    } else {
        // Display a message indicating that the cart is empty
        alert("Your cart is empty. Please add items before checking out.");
    }
}
