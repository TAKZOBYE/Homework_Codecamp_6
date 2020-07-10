let obj = {};
let key = prompt("Enter Name of fruit");

while (key != "stop") {
    let value = prompt("Enter Amount of fruit");
    if (Number(value) > 1) {
        key += "s"
    }
    obj[key] = value
    key = prompt("Enter Name of fruit");
}

console.log(obj);