const numbers = [1,2,3,34]

console.log(numberToBoolean(...numbers))

function numberToBoolean(...numbers){
    let result = [];
    for (let number of numbers){
        result.push(number % 2 === 0)
    }
    return result
}