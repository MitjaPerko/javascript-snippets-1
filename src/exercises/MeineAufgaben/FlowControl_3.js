const sex ="m"
const age =19;
//let x = (0 > 1) ? "ja" : "nein"
//Variante 1
let eintrittV1 = ((age >= 20 && sex == "m") || (age >= 18 && sex == "f")) ? "ja": "nein"
console.log("Darf ich in den Club rein? ("+ eintrittV1 +")")


//Variante 2
let eintrittV2
switch(sex){
    case "f":
        eintrittV2 = (age >= 18) ? "ja" : "nein"
        break;
    case "m":
        eintrittV2 = (age >= 20) ? "ja" : "nein"
        break;
    default:
        break;
}
console.log("Dar ich in den Club rein? (" + eintrittV2 + ")")
