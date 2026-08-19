// Given an array of product objects, return the first product matching the given name, or undefined if not found.

const findProductByName = (products, name) => {

  const findProduct = products.find((product) => {
    return product.name === name;
  });
  return findProduct;
};

const products = [
  { name: "Pen", price: 10 },
  { name: "Bag", price: 500 },
];
const name = "Bag"

console.log(findProductByName(products, name));
