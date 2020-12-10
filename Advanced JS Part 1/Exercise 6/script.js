function sum(obj) {
    let total = 0;
    for (let key in obj) {
        total += obj[key];
    }
    return total;
}