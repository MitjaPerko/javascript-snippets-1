// Aufgabe 6
const numbers = [-1,13,14,-13.2]

// Aufgabe 6.1 Nur Ganz Zahlen
console.log("Nur Ganze Zahlen")
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 1 === 0){
        console.log("Ganz Zahl: " + numbers[i])
    }
}

// Aufgabe 6.2 Nur Positive Zahlen
console.log("Nur positive Zahlen")
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] >= 0){
        console.log("positive Zahl: " + numbers[i])
    }
}

// Aufgabe 6.3 Quersumme aller Zahlen
let result = 0
for (let i = 0; i < numbers.length; i++) {
    let s = numbers[i].toString()
    for (let j = 0; j < s.length; j++) {
        if(s[j] === "-" || s[j] === "."){
        }else {
            result += parseInt(s[j])
        }
    }
}
console.log(result)

// Aufgabe 6.4 Durchschnitt berechnen
result = 0
for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]
}
console.log(result / numbers.length)