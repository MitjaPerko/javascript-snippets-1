// Aufgabe 1
const user1 = {
    name: "ueli",
    points: 2
}
const user2 = {
    name: "hans",
    points: 3
}
const userlist = [
    user1,
    user2
]

//Aufgabe 2
let winner = null;

for (const user of userlist){
    if(winner === null || winner.points < user.points){
        winner = user
    }
}
console.log(winner)