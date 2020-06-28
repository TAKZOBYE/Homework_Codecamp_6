function methodDraw(n) {
    let number = ''

    for(let = i = n; i > 0; i--){
        for (let o = 0; o < n; o++) {
            number += i;
        }
        number += '\n';
    }
    console.log(number);
}

methodDraw(2)
methodDraw(3)
methodDraw(4)
