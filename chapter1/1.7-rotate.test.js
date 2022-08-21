// Given an image represented by an NxN matrix,
// where each pixel in the image is represented by an Integer, 
// write a method to rotate the image by 90 degrees; 
// can you do this in place?

const cases = [
    {
        original: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
        clockwise: [[6, 3, 0], [7, 4, 1], [8, 5, 2]],
        counter: [[2, 5, 8], [1, 4, 7], [0, 3, 6]]
    },
    {
        original: [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15]],
        clockwise: [[12, 8, 4, 0], [13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3]],
        counter: [[3, 7, 11, 15], [2, 6, 10, 14], [1, 5, 9, 13], [0, 4, 8, 12]]
    }
]

function rotateMatrix90(matrix, clockwise = true) {
    let returned = [];
    let totRow = matrix.length - 1;
    let totCol = matrix[0].length - 1;
    for (let row = 0; row <= totRow; row++) {
        // returned[row] = [];
        for (let col = 0; col <= totCol; col++) {
            // clockwise rotation, row becomes column; column becomes row reverse
            // counter-clockwise rotation, row becomes reverse column; column becomes row
            let newRow = clockwise ? col : totCol - col;
            let newCol = clockwise ? totRow - row : row;
            if (!returned[newRow]) returned[newRow] = [];
            returned[newRow][newCol] = matrix[row][col]
        }
    }
    return returned;
}


test("works on 3x3 matrices clockwise", () => {
    let clock = rotateMatrix90(cases[0].original);
    expect(JSON.stringify(clock)).toEqual(JSON.stringify(cases[0].clockwise))
});

test("works on 3x3 matrices counterclockwise", () => {
    let counter = rotateMatrix90(cases[0].original, false);
    expect(JSON.stringify(counter)).toEqual(JSON.stringify(cases[0].counter))
});

test("works on bigger matrices clockwise", () => {
    let clock = rotateMatrix90(cases[1].original);
    expect(JSON.stringify(clock)).toEqual(JSON.stringify(cases[1].clockwise))
});

test("works on bigger matrices counterclockwise", () => {
    let counter = rotateMatrix90(cases[1].original, false);
    expect(JSON.stringify(counter)).toEqual(JSON.stringify(cases[1].counter))
});