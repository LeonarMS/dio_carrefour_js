function somaNums (arr) {
    return arr.reduce((sum, item) => sum + item)
}

const nums = [5, 6, 7, 3, 4];

console.log(somaNums(nums))