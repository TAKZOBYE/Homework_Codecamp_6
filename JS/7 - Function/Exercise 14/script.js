function methodDraw(n) {
    let string = ''
    for (let i = n; i >= 1; i--) {
        for (let o = 1; o <= n; o++) {
            if (o > i){
                string += '-'
            } else {
                string += '*'
            }
        }
        string += '\n'
    }
    console.log(string);
}
methodDraw(2)
methodDraw(3)
methodDraw(4)