// State Management
let cart = [];
let totalProtein = 0;
let totalCals = 0;

function addItem(name, protein, cals) {
    // Update State
    cart.push(name);
    totalProtein += protein;
    totalCals += cals;

    // Update UI
    updateUI();
}

function updateUI() {
    const cartList = document.getElementById('cart-list');
    const proteinDisplay = document.getElementById('total-protein');
    const calsDisplay = document.getElementById('total-cals');

    // Update Totals
    proteinDisplay.innerText = totalProtein;
    calsDisplay.innerText = totalCals;

    // Create list item for cart
    const lastItem = cart[cart.length - 1];
    const li = document.createElement('li');
    li.style.color = "#CCFF00";
    li.style.listStyle = "none";
    li.style.marginBottom = "5px";
    li.innerText = `✓ ${lastItem}`;
    cartList.appendChild(li);

    // Simple Animation effect on update
    proteinDisplay.parentElement.style.transform = "scale(1.1)";
    setTimeout(() => {
        proteinDisplay.parentElement.style.transform = "scale(1)";
    }, 100);
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});