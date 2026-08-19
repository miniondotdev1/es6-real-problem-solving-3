// Given an array of product objects { name, stock }, return only the products where stock is greater than 0.

const getAvailableProducts = (products) => {
    const filteredProduct = products.filter(product => product.stock > 0)

    return filteredProduct
}

const products = [
  { name: "Pen", stock: 5 },
  { name: "Bag", stock: 0 },
  { name: "Notebook", stock: 2 },
]; 

console.log(getAvailableProducts(products));