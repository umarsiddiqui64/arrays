let N = 3;  
let M = 2;  
let arr = [
    [1, 2],
    [3, 4],
    [5, 6]
];

for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
        
        let sumOfIndexes = i + j;
        
        console.log(`At index (${i},${j}), the sum of indexes becomes (${i} + ${j} = ${sumOfIndexes})`);
    }
}
