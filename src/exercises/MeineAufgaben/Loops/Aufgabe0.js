// Variante Schlaufe
let text = "Pinguin"
let newText =""
text.length

for (let i = 0; i < text.length; i++) {
    newText = newText + text[i]
    if (i < (text.length -1)){
        newText += ","
    }
}
console.log(newText)
// Variante ohne schlaufe

console.log(text[0] +","+text[1]+","+text[2]+","+text[3]+","+text[4]+","+text[5]+","+text[6])