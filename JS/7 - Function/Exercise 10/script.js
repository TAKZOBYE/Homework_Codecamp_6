function methodDraw(n) {
    let number = ''
    for (let i = 0; i < n; i++) {
        for (let o = 1; o <= n; o++) {
            number += o+(i * o)
        }
        number += '\n'
    }
    
    console.log(number);
}

methodDraw(2)
methodDraw(3)
methodDraw(4)