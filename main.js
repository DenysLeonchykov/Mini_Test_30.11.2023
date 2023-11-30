
document.getElementById('button').addEventListener('click', res)

    let q1 = document.getElementById('q1')
    let q2 = document.getElementById('q2')
    let q3 = document.getElementById('q3')
    let q4 = document.getElementById('q4')
    let q5 = document.getElementById('q5')


function res() {
    let res = 0;
    
    if (q1.value == 4) {
        res ++
    }
    if (q2.value == 4) {
        res ++
    }
    if (q3.value == 2) {
        res ++
    }
    if (q4.value == 6) {
        res ++
    }
    if (q5.value == 9) {
        res ++
    }
    
    alert(`Количество правильніх ответов ${res}`)
}

