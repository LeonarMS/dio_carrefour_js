function filtraPares(arr) {
    return arr.filter(item => item%2 == 0)
}

const nums = [2, 4, 6, 5, 3, 1];

console.log(filtraPares(nums))