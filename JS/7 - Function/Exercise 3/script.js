function methodDraw(n) {
    let number = ''
    for(i = 1; i <= n; i++){
        for(o = 1; o <= n; o++){
            number += o;
        }
        number += '\n';
    }
    console.log(number);
}

methodDraw(2)
methodDraw(3)
methodDraw(4)
