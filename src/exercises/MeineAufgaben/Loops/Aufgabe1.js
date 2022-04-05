const numbers = [1,2,3]
let result1 = 0
let result2 = 0
let result3 = 0

//Variante 1
for (let i = 0; i < numbers.length; i++) {
    result1 += numbers[i]
}
console.log(result1 + " V1")

// Variante 2
for (const number of numbers) {
    result2 += number
}
console.log(result2 + " V2")

// Variante 3
let i = 0
while (i < numbers.length){
    result3 += numbers[i]
    i++
}
console.log(result3 + " V3")