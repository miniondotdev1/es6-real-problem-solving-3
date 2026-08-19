// Return true only if input strictly equals target in both value and type, false otherwise.


const isStrictMatch = (input, target) => {
    return input === target
}

console.log(isStrictMatch("18", 18));
console.log(isStrictMatch(18, 18));