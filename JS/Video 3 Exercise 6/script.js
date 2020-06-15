let point = prompt('กรอกคะแนนของคุณ')

if (point >= 80) {
    alert('A')
} else if (point >= 70 && point <= 79) {
    alert('B')
} else if (point >= 60 && point <= 69) {
    alert('C')
} else if (point >= 50 && point <= 59) {
    alert('D')
} else if (point < 50) {
    alert('F')
} 