let obj = {};
let key = prompt("Enter key : ");

while (key != "stop") {
    let value = prompt("Enter Value : ");
    obj[key] = value;
    key = prompt("Enter key : ");
}

console.log(obj);