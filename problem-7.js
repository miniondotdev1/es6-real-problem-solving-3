// Given an array of product objects { name, price }, return a new array sorted from lowest to highest price using a comparator callback in sort().

const sortByPriceAscending = (products) => {
    const result = [...products]
    result.sort((a, b) => a.price - b.price)
    return result;
}

const products = [
  { name: "Bag", price: 500 },
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 60 },
]; 

console.log(sortByPriceAscending(products));