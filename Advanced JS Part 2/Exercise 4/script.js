let string = 'hello everybody'

function truncate(str, maxlength) {
    if (str.lenght < maxlength) {
        return str
    } else {
        return str.slice(0, maxlength) + '...'
    }
}

truncate(string, 10)