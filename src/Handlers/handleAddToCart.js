function handleAddToCart(product) {
  const storedProducts =
    JSON.parse(localStorage.getItem("localProducts")) || [];

  storedProducts.push(product);
  localStorage.setItem("localProducts", JSON.stringify(storedProducts));
}

export default handleAddToCart;
