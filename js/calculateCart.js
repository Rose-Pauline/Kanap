// Récupération du prix total de façon sécurisée en appelant l'API pour récupérer
// les prix et les multiplier par les quantités demandées par le client
export const calculateTotalCart = (allProductsPrice) => {
  function totalPriceRender(total) {
    const totalPrice = document.getElementById("totalPrice");
    totalPrice.innerText = total;
  }
  Promise.all(allProductsPrice).then((allProductsResolved) => {
    let total = 0;
    const savedProduct = JSON.parse(localStorage.getItem("product"));
    allProductsResolved.forEach((product) => {
      const elementFound = savedProduct.find(
        (element) => element.productId === product._id
      );
      total = total + product.price * elementFound.productQty;
    });
    // console.log("Promesses résolues :", allProductsResolved);
    totalPriceRender(total);
  });
};

// Changer dynamiquement la quantité produit sur la page panier
export const inputQtyCalc = (
  inputQty,
  pQty,
  pPrice,
  productItem,
  productPrice,
  savedProduct,
  allProductsPrice
) => {
  let newInputQty = inputQty;
  newInputQty.addEventListener("input", function () {
    if (inputQty.value <= 0) {
      // negative qty impossible
      return;
    } else {
      pQty.innerText = this.value;
      pPrice.innerText = productPrice * this.value + " €";
      productItem.productQty = this.value;
      // console.log(savedProduct);
      localStorage.setItem("product", JSON.stringify(savedProduct));
      calculateTotalCart(allProductsPrice);
    }
  });
};

// Suppression d'un produit du panier (et donc du local storage)
export const deleteProduct = (pDel, savedProduct, i) => {
  pDel.addEventListener("click", () => {
    savedProduct.splice(i, 1);
    localStorage.setItem("product", JSON.stringify(savedProduct));
    alert("Produit supprimé du panier");
    document.location.reload(true);
  });
};
