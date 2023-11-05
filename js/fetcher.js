export const fetchAllProducts = async () => {
  try {
    const url = `http://localhost:3000/api/products`;
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(`Erreur : ` + err);
    console.log(`Veuillez démarrer le serveur`);
    return null;
  }
};

export const fetchProductById = async (urlId) => {
  try {
    // Récupération de l'ID dans l'URL pour récupérer les informations de l'article plus tard
    const url = `http://localhost:3000/api/products/${urlId}`;
    const response = await fetch(url);
    const sofaId = await response.json();
    return sofaId;
  } catch (err) {
    console.log(`Erreur : ` + err);
    return null;
  }
};

export const fetchProductByIdCart = async (id) => {
  try {
    // Récupération de l'ID dans l'URL pour récupérer les informations de l'article plus tard
    const url = `http://localhost:3000/api/products/${id}`;
    const response = await fetch(url);
    const sofaId = await response.json();
    return sofaId;
  } catch (err) {
    console.log(`Erreur : ` + err);
    return null;
  }
};

export const fetchPostOrder = async (contact, products) => {
  // Envoyer le formulaire de contact ainsi que le tableau "products" au back avec la méthode POST
  fetch("http://localhost:3000/api/products/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ contact, products }),
  })
    // On attend la réponse du back en JSON pour récupérer l'order ID généré par le back pour l'afficher plus tard à l'utilisateur
    .then((response) => response.json())
    .then((data) => {
      localStorage.setItem("order", JSON.stringify(data));
      document.location.href = "confirmation.html";
    })
    .catch((erreur) => console.log("erreur : " + erreur));
};
