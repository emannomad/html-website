let product = document.getElementById("productOption")
const menu = document.getElementById("productMenu")
console.log(product, menu)

function productMenuDisplay() {
  menu.style.display = "block";
}

function productMenuHide() {
  menu.style.display = "none";
}

product.onmouseover = () => productMenuDisplay();
product.onmouseout = () => productMenuHide();