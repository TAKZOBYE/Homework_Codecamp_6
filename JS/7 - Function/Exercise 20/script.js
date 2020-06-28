function methodDraw(n) {
    let string = ''
    let round = 1
    for (let i = n; i >= 1; i--) {
        for (let o = 1; o <= n; o++) {
            if (o < i) {
                string += '-'
            } else {
                string += round
                round++;
            }
        }
        string += '\n'
    }
    for (let i = 2; i <=n; i++) {
        for (let o = 1; o <= n; o++) {
            if (o < i) {
                string += '-'
            } else {
                string += round
                round++;
            }
        }
         string += '\n'
    }
    console.log(string);
}

methodDraw(2)
methodDraw(3)
methodDraw(4)