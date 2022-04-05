const age = 60
let eintrittV1;
let eintrittV2;

// Variante 1
if (age <= 5) {
    eintrittV1 = 0
} else if (age <= 15) {
    eintrittV1 = 5
} else if (age <= 59) {
    eintrittV1= 15
} else {
    eintrittV1= 10
}
console.log("Dein Eintritt kostet: " + eintrittV1 + " Franken (V1)")

//Variante 2
if(age <= 5){
    eintrittV2 = 0;
}
if(age >5 && age <=15){
    eintrittV2 = 5
}
if(age >15 && age <= 59){
    eintrittV2 = 15
}
if(age >=60){
    eintrittV2=10
}
console.log("Dein Eintritt kostet: " + eintrittV2 + " Franken (V1)")