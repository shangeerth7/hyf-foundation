import { getAvailableProducts } from "./hyfBayHelpers.js";

const products = getAvailableProducts();

function renderProducts(productsToRender) {
    const productsList = document.querySelector("#productsList");

    productsList.innerHTML = "";

    for (let i = 0; i < productsToRender.length; i++) {
        const product = productsToRender[i];

        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: ${product.price} DKK</p>
            <p>Rating: ${product.rating} / 5</p>
        `;

        productsList.appendChild(listItem);
    }
}

renderProducts(products);