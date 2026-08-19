// Given an array of numbers, return a new array where each price is formatted as a string prefixed with "$".

const getFormattedPrices = (prices) => {

    const formatedPrices = []
    const result = prices.map((price) => {
        formatedPrices.push(`$${price}`)
    })
    return formatedPrices;
}

console.log(getFormattedPrices([100, 250, 75]));