let text = "Ich weiss, dass ich nichts weiss ... !"
let result =""

for (let i = 0; i < text.length; i++) {
    let char = text[i]
    if (i === 0) {
        char = char.toUpperCase()
    }
    if (char === " ") {
        result += " " + text[++i].toUpperCase()
    } else {
        result += char
    }
}
console.log(result);
