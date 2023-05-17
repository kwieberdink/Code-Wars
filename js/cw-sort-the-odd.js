

function sortArray(array) {
    let oddSort = array.filter(e => e % 2).sort((a,b) => a - b);
    console.log(oddSort)
    return array.map(e => e % 2 ? oddSort.shift() : e);
}

sortArray([5, 3, 2, 8, 1, 4])
    // [1, 3, 2, 8, 5, 4];