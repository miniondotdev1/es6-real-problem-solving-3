// Given an array of products { name, category, price }, return the total price of all products in the given category after applying a 10% discount to each.

const getDiscountedTotalForCategory = (products, category) => {

    const filtedCategories = products.filter((product) => product.category === category)
    const discountCategoriesPrices = filtedCategories.map(price => {
        return price.price - (price.price * 0.10)
    })
    const reduceCategoriesPrices = discountCategoriesPrices.reduce((accum, value) => accum + value)
    return reduceCategoriesPrices
    
}

const products = [
  { name: "Pen", category: "stationery", price: 100 },
  { name: "Bag", category: "accessory", price: 500 },
  { name: "Notebook", category: "stationery", price: 60 },
];

const category = "stationery"; 

console.log(getDiscountedTotalForCategory(products, category));