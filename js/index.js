import { fetchAllProducts } from "./fetcher.js";
import { renderHomeProduct } from "./render.js";

// Création de la fonction asynchrone pour appeler l'api
const renderPage = async () => {
  const data = await fetchAllProducts();
  // Utilisation d'une boucle forEach pour sélectionner les éléments de l'API

  data.forEach(function (sofa) {
    renderHomeProduct(sofa);
    console.log(sofa);
  });
};

renderPage();
