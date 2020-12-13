function extractCurrencyValue(string, rate) {
    return parseInt(string.slice(1)) * rate
}