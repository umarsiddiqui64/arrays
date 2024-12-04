function printWPattern(N) {
    if (N === 1) {
        console.log("\\/\\/");
        return;
    }

    for (let i = 0; i < N; i++) {
        let line = "";

        for (let j = 0; j < 2 * N - 1; j++) {
            
            if (j === i || j === 2 * N - 2 - i) {
                line += "/";  
            } else {
                line += " ";  
            }
        }

        console.log(line);
    }
}
let N = 1;  
printWPattern(N);
