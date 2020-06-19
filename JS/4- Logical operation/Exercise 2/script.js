let age = prompt('ใส่อายุ');

if (age >= 18 && age <= 60) {
    console.log('อยู่ระหว่าง');
}

if (age < 18 || age > 60) {
    console.log('ไม่อยู่ระหว่าง');
}