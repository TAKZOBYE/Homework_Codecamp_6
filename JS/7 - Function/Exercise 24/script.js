function methodDraw(n) {
    let string = ''
    let round = 1
    for (let i = n-1; i >= 1; i--) {
        for (let o = 1; o <= n; o++) {
            if (o > i) {
                string += round
                round++
            } else {
                string += '-'
            }
        }
        for (let o = n-1; o >= 1; o--) {
            if (o > i) {
                string += round
                round++
            } else {
                string += '-'
            }
        }
        string += '\n'
    }
    for (let i = 0; i < n; i++) {
        for (let o = 1; o <= n; o++) {
            if (o > i) {
                string += round
                round++
            } else {
                string += '-'
            }
        }
        for (let o = n-1; o >= 1; o--) {
            if (o > i) {
                string += round
                round++
            } else {
                string += '-'
            }
        }
        string += '\n'
    }
    console.log(string);
}

methodDraw(2)
methodDraw(3)
methodDraw(4)