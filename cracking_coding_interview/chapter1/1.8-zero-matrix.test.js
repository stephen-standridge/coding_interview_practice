//write an algorithm such that if an element in an M x N matrix is 0,
// its entire row and column are set to 0

const cases = [
    {
        original: [[1, 2, 3], [4, 5, 0], [7, 8, 9]],
        correct: [[1, 2, 0], [0, 0, 0], [7, 8, 0]],
    },
    {
        original: [[1, 2, 3, 4], [5, 0, 7, 8], [9, 10, 11, 12]],
        correct: [[1, 0, 3, 4], [0, 0, 0, 0], [9, 0, 11, 12]],
    },
    {
        original: [[1, 2, 3], [4, 5, 0], [7, 8, 9], [10, 11, 12]],
        correct: [[1, 2, 0], [0, 0, 0], [7, 8, 0], [10, 11, 0]],
    },
    {
        original: [[1, 2, 3], [4, 0, 0], [7, 8, 9], [10, 11, 12]],
        correct: [[1, 0, 0], [0, 0, 0], [7, 0, 0], [10, 0, 0]],
    },
]

function nullifyRow(matrix, row) {
    matrix[row] = Array.from({ length: matrix[row].length }, (v, i) => 0);
}

function nullifyCol(matrix, col) {
    matrix = matrix.map((r, i) => {
        r[col] = 0;
        return r;
    });
    // return matrix;
}


function zeroRowColumn(matrix) {
    // let returned = matrix.slice();
    let zeroFoundRow = [];
    let zeroFoundCol = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] === 0) {
                zeroFoundRow.push(row);
                zeroFoundCol.push(col);
            }
        }
    }
    zeroFoundRow.forEach((row) => nullifyRow(matrix, row));
    zeroFoundCol.forEach((col) => nullifyCol(matrix, col));
    return matrix;
}

test("works on matrices with the same row/columns", () => {
    let zeroed = zeroRowColumn(cases[0].original);
    expect(JSON.stringify(zeroed)).toEqual(JSON.stringify(cases[0].correct))
});

test("works on matrices with more columns than rows", () => {
    let zeroed = zeroRowColumn(cases[1].original);
    expect(JSON.stringify(zeroed)).toEqual(JSON.stringify(cases[1].correct))
});

test("works on matrices with more rows than columns", () => {
    let zeroed = zeroRowColumn(cases[2].original);
    expect(JSON.stringify(zeroed)).toEqual(JSON.stringify(cases[2].correct))
});

test("works on matrices with more than 1 zero", () => {
    let zeroed = zeroRowColumn(cases[3].original);
    expect(JSON.stringify(zeroed)).toEqual(JSON.stringify(cases[3].correct))
});