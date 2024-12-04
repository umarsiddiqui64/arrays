function reverseUTraversal(matrix) {
    let N = matrix.length;
    let result = [];
    for (let i = 0; i < N; i++) {
        result.push(matrix[i][0]);  
    }

    for (let j = 1; j < N; j++) {
        result.push(matrix[0][j]);  
    }

    for (let j = 1; j < N; j++) {
        result.push(matrix[N-1][j]);  
    }

    console.log(result.join(' '));
}

let matrix = [
    [7, 4, 1],
    [2, 3, 6],
    [9, 8, 5]
];

reverseUTraversal(matrix); 
