'use strict'

// ---------------------------------
// ACHTUNG: Es darf jeweils nur eine Lösung / Variante aktiv sein. Den Rest auskommentieren
// ---------------------------------

// // 1
// function add(a, b){
//     return a + b
// }
//
// // 1.1
// // Variante 1
// let addTo10 = add.bind(null, 10)
// addTo10(20)
//
// // Variante 2
// function addTo10(b){
//     return add(10, b)
// }

// 2
function add(a, b, logger){
    logger(`add(${[...arguments].slice(0, -1).join(', ')})`)
    return a + b
}
add(1, 2, console.log)
add(23, 549, msg=>console.warn(msg))