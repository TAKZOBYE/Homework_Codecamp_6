function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        let temp = +prompt('Enter Number');
        this.value += temp;
    }
}