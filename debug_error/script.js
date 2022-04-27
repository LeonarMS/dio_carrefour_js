function evalArr (arr, len) {
    if (!arr || !len) throw new ReferenceError('Missing argument');
    if (typeof len !== 'number') throw new TypeError(len + ', ' + typeof len + ' is not a number');
    if (typeof arr !== 'object') throw new TypeError('Not an Array'); 

    if (arr.length == len) return arr;
    throw new RangeError('Array.length is greater than ' + len);
}

function tryEval (arr, len) {
    try {
       return evalArr(arr, len);
    } catch(e) {
        if (e instanceof TypeError) {
            console.log('Error is TypeError');
            console.log(e.message);
            throw e
        }
        else if (e instanceof RangeError) {
            console.log('Error is RangeError');
            console.log(e.message);
            throw e
        }
         else if (e instanceof ReferenceError) {
            console.log('Error is ReferenceError');
            console.log(e.message);
            throw e
        } else {
            console.log('Tipo de erro não esperado: ' + e);
        }
    }
}

console.log(tryEval([1,2,3], 4))