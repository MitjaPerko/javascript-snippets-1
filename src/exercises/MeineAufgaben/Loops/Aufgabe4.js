let text = " ist eine Primzahl"
let PrimZahl
for (let i = 0; i < 100; i++) {
    PrimZahl = true
    for (let j = 2; j < i; j++) {
        if (i % j === 0){
            PrimZahl = false
            break;
        }
    }
    if(PrimZahl){
        console.log(i + text)
    }
}

n = 0
while (n++ < 100) {
    let isPrime = true
    let i = 2
    while (++i < n) {
        if (n % i === 0) {
            isPrime = false
            break
        }
    }
    if (isPrime) console.log(n)
}