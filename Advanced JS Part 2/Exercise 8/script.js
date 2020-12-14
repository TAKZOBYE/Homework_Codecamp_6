function sumInput() {
    while (true) {
        let sum = 0
        let input = +prompt('Enter Number')
        if(String(input) === 'NaN'){
            break;
            console.log('Nan')
        }
        sum += input 
    }
}