function methodDraw(n) {
    let string = ''
    for (let i = 0; i < n; i++) {
        for (let o = 0; o < n; o++) {
            if (o == i) {
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