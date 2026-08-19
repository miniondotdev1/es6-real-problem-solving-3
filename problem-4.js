// Given an array of products { price, stock }, return the total value of all stock combined (price × stock, summed).

const getTotalStockValue = (products) => {

    const totalProductsStock = products.reduce((accum, value) => accum + (value.price * value.stock), 0)

    return totalProductsStock
}

const products = [
  { price: 50, stock: 4 },
  { price: 20, stock: 10 },
]; 

console.log(getTotalStockValue(products));