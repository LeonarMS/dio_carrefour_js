// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5],
// retorne outro array apenas com valores único

const meuArray = [30, 30, 40, 5, 223, 2049, 3034, 5];

function valoresUnicos(arr) {
    let unique = new Set(arr);
    return [...unique]
}

console.log(valoresUnicos(meuArray));