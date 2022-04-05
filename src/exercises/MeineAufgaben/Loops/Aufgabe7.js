// Aufgabe 7 eine Belibige Zeichenkette
const kette = "Hallo Welt"
let newkette= ""

// Aufgabe 7.1 jedes zweite zeichen in Grossbuchstaben
for (let i = 0; i < kette.length; i++) {
    if(i % 2 === 0){
        newkette += kette[i]
    }else {
        newkette += kette[i].toUpperCase()
    }
}
console.log(newkette)

// Aufgabe 7.2 Konstante durch selbtlaute ersetzen
newkette = ""
let konstante = ["b", "c", "d", "g", "h", "k", "m", "n", "p", "r", "s", "t", "w"]
let komische = ["be", "ce", "de", "ge", "ha", "ka", "äm", "än", "pe", "är", "äs", "te", "we"]
for (let i = 0; i < kette.length; i++) {
    if(konstante.includes(kette[i].toLowerCase())){
        newkette += komische[konstante.indexOf(kette[i].toLowerCase())]
    }else {
        newkette += kette[i]
    }
}
console.log(newkette)

// Aufgabe 7.3 Zeichenkette rueckwerts
newkette = ""
for (let i = kette.length-1; i >= 0; i--) {
    newkette += kette[i]
}
console.log(newkette)

// Aufgabe 7.4