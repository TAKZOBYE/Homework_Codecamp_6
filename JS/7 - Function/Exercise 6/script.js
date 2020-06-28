function methodDraw(n) {
    let number = ''
    let round = 1
    for(let i = 1; i <= n; i++){
        for (let o = 1; o <= n; o++) {
            number += round
            round++
        }
        number += '\n'
    }
    console.log(number);
}

methodDraw(2)
methodDraw(3)
methodDraw(4)
