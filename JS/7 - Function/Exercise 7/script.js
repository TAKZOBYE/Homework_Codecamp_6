function methodDraw(n) {
    let number = ''
    let round = n*n
    for(i = n; i > 0; i--){
        for(o = 0; o < n; o++) {
            number += round
            round--
        }
        number += '\n'
    }
    console.log(number);
}

methodDraw(2)
methodDraw(3)
methodDraw(4)
