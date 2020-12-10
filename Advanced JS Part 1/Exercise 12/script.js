function Calculator() {
    this.read = function() {
        this.number1 = +prompt('Enter Number 1');
        this.number2 = +prompt('Enter Number 2');
    }

    this.sum = function() {
        return this.number1 + this.number2;
    }
    
    this.mul = function() {
        return this.number1 * this.number2;
    }
}

let calculator = new Calculator();
