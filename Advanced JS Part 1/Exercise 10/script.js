let calculator = {
    read() {
        this.number1 = +prompt('Enter Number 1');
        this.number2 = +prompt('Enter Number 2');
    },
    sum() {
        return this.number1 + this.number2
    },
    mul() {
        return this.number1 * this.number2
    },
}