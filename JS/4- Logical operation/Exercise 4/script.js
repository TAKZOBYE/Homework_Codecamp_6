let sum = 0;
while (true) {
    let firstPlayer = prompt('ผู้เล่นคนที่ 1 กรอกตัวเลข');
    let secondPlayer = prompt('ผู้เล่นคนที่ 2 กรอกตัวเลข');
    if (firstPlayer != secondPlayer) {
        if (secondPlayer > firstPlayer) {
            alert('มากกว่า');
        } else {
            alert('น้อยกว่า');
        }
    } else {
        alert('ถูกต้อง');
        break;
    }
}