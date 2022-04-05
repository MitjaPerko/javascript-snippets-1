const age = 101;
const name = "Heinrich";
let begruesungV1;
let begruesungV2;

//Variante 1 IF()
if(age <= 10){
    begruesungV1 = "hoi";
}
if(age <=18 && age >= 11){
    begruesungV1 ="Hallo";
}
if(age <=100 && age >= 19){
    begruesungV1 = "Grüezi";
}
if(age >=101){
    begruesungV1 = "Grüss Gott";
}
console.log(begruesungV1 + " " + name + " (V1)")

//Variante 2 elseIF()
if (age <= 10){
    begruesungV2 = "hoi";
}else if (age <=18 && age >= 11){
    begruesungV2 ="Hallo";
}else if (age <=100 && age >= 19){
    begruesungV2 = "Grüezi";
}else {
    begruesungV2 = "Grüss Gott";
}
console.log(begruesungV2 + " " + name + " (V2)")