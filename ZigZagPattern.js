let N = 3;  
let M = 3;  
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

function zigZag(matrix, N, M) {
    
    let result = [];

    let row = 0;
    let col = M - 1;
    
    while (row < N && col >= 0) {
    
        let tempRow = row;
        let tempCol = col;
        while (tempRow < N && tempCol < M) {
            result.push(matrix[tempRow][tempCol]);
            tempRow++;
            tempCol++;
        }
        
        if (col > 0) {
            col--;
        } else {
            row++;
        }
    }
    console.log(result.join(' '));
}

zigZag(matrix, N, M);
