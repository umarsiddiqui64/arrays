function printPattern(N) {
    function printStars() {
        let row = '';
        for (let i = 0; i < N; i++) {
            row += '* ';
        }
        console.log(row.trim());
    }

    function printMiddle() {
        for (let j = 0; j < N - 2; j++) {
            console.log('*');
        }
    }

    printStars();

    printMiddle();

    if (N > 1) {
        printStars();
    }
}

printPattern(5);

