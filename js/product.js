import { fetchProductById } from "./fetcher.js";
import { renderProductDetail } from "./render.js";
import { handleAddProduct } from "./handleProduct.js";

const addBtn = document.getElementById("addToCart");

const renderProductPage = async () => {
  const queryString = window.location.search;
  const urlId = new URLSearchParams(queryString).get("id");
  const data = await fetchProductById(urlId);

  renderProductDetail(data);

  // J'écoute le click sur le bouton 'Ajouter au panier'
  addBtn.addEventListener("click", (event) => {
    event.preventDefault();
    handleAddProduct(data);
  });
};

renderProductPage();
