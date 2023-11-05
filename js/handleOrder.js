import { fetchPostOrder } from "./fetcher.js";

let savedProduct = JSON.parse(localStorage.getItem("product"));
console.log(savedProduct);

// Vérifier que l'utilisateur rentre des informations conformes au formulaire de contact
export const order = () => {
  const orderBtn = document.getElementById("order");
  const regexName =
    /^(?=.{1,50}$)[a-z\u00C0-\u00FF]+(?:['-_.\s][a-z\u00C0-\u00FF]+)*$/i;
  const regexLocation = /^[a-zA-Z0-9\u00C0-\u00FF\s,. '-]{3,}$/;
  const regexEmail = /^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;

  orderBtn.addEventListener("click", (e) => {
    // Prépare l'obj contact pour la requête POST
    let contact = {
      firstName: document.getElementById("firstName").value,
      lastName: document.getElementById("lastName").value,
      address: document.getElementById("address").value,
      city: document.getElementById("city").value,
      email: document.getElementById("email").value,
    };
    // on valide que le formulaire soit correctement rempli
    if (
      (regexEmail.test(contact.email) == true) &
      (regexName.test(contact.firstName) == true) &
      (regexName.test(contact.lastName) == true) &
      (regexLocation.test(contact.city) == true) &
      (regexLocation.test(contact.address) == true)
    ) {
      // Si le formulaire est correctement rempli, création du tableau "products" pour l'envoyer au back
      e.preventDefault();
      let products = [];
      // Push chaque ID produit présent dans le local storage dans le tableau "products"
      for (let listId of savedProduct) {
        products.push(listId.productId);
      }
      console.log(products);
      console.log(contact);
      alert("Commande effectuée avec succès ! Merci pour la moula");
      fetchPostOrder(contact, products);
    } else {
      // Avertir l'utilisateur qu'il n'a pas (ou mal) rempli les champs d'informations
      alert("Tous les champs d'informations doivent être correctement remplis");
    }
  });
};
