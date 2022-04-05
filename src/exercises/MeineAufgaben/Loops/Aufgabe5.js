const text = "abcz"
let newtext =""
let backtext =""

for (let i = 0; i < text.length; i++) {
    newtext += String.fromCharCode(text[i].charCodeAt()+1)
}
for (let i = 0; i < newtext.length; i++) {
    backtext += String.fromCharCode(newtext[i].charCodeAt()-1)
}
console.log(newtext)
console.log(backtext)