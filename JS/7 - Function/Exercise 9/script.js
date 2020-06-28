function methodDraw(n) {
    let number = ''
    for (let i = 1; i <= n; i++) {
        number += i*2      
        number += '\n'
    }
    console.log(number);
}

// methodDraw(2)
methodDraw(3)
// methodDraw(4)