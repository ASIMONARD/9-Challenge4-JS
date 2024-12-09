let scoresDauphines1 = [96, 108, 89]
let scoresDauphines2 = [97, 112, 101]
let scoresDauphines3 = [97, 113, 101]

let scoresKoalas1 = [88, 91, 110]
let scoresKoalas2 = [109, 95, 123]
let scoresKoalas3 = [97, 113, 101] 

let moyenneDauphines1 = 0
let moyenneDauphines2 = 0
let moyenneDauphines3 = 0

let moyenneKoalas1 = 0
let moyenneKoalas2 = 0
let moyenneKoalas3 = 0

for (let i= 0; i < scoresDauphines1.length; i++) {
    moyenneDauphines1 += scoresDauphines1[i] / scoresDauphines1.length
}
for (let i= 0; i < scoresDauphines2.length; i++) {
    moyenneDauphines2 += scoresDauphines2[i] / scoresDauphines2.length
}
for (let i= 0; i < scoresDauphines3.length; i++) {
    moyenneDauphines3 += scoresDauphines3[i] / scoresDauphines3.length
}

for (let i= 0; i < scoresKoalas1.length; i++) {
    moyenneKoalas1 += scoresKoalas1[i] / scoresKoalas1.length
}
for (let i= 0; i < scoresKoalas2.length; i++) {
    moyenneKoalas2 += scoresKoalas2[i] / scoresKoalas2.length
}
for (let i= 0; i < scoresKoalas3.length; i++) {
    moyenneKoalas3 += scoresKoalas3[i] / scoresDauphines3.length
}

console.log('Moyenne Dauphines 1 : ' + moyenneDauphines1.toFixed(2))
console.log('Moyenne Dauphines 1 : ' + moyenneDauphines2.toFixed(2))
console.log('Moyenne Dauphines 1 : ' + moyenneDauphines3.toFixed(2))
console.log('Moyenne Koalas 1 : ' + moyenneKoalas1.toFixed(2))
console.log('Moyenne Koalas 1 : ' + moyenneKoalas2.toFixed(2))
console.log('Moyenne Koalas 1 : ' + moyenneDauphines3.toFixed(2))
console.log("")

let winner1 = ""
let score = 100

console.log('Manche 1 :')
if ((moyenneDauphines1 > 100) || (moyenneKoalas1 > 100)) {
    if (moyenneDauphines1 == moyenneKoalas1) {
        console.log("Il y a égalité")
    } else if (moyenneDauphines1 > moyenneKoalas1) {
        console.log("L'équipe gagnante est les Dauphines")
    } else {
        console.log("L'équipe gagnante est les Koalas")
    }
} else {
    console.log("Il n'y a pas de gagnant")
}

console.log('Manche 2 :')
if ((moyenneDauphines2 > 100) || (moyenneKoalas2 > 100)) {
    if (moyenneDauphines2 == moyenneKoalas2) {
        console.log("Il y a égalité")
    } else if (moyenneDauphines2 > moyenneKoalas2) {
        console.log("L'équipe gagnante est les Dauphines")
    } else {
        console.log("L'équipe gagnante est les Koalas")
    }
} else {
    console.log("Il n'y a pas de gagnant")
}

console.log('Manche 3 :')
if ((moyenneDauphines3 > 100) || (moyenneKoalas3 > 100)) {
    if (moyenneDauphines3 == moyenneKoalas3) {
        console.log("Il y a égalité")
    } else if (moyenneDauphines3 > moyenneKoalas3) {
        console.log("L'équipe gagnante est les Dauphines")
    } else {
        console.log("L'équipe gagnante est les Koalas")
    }
} else {
    console.log("Il n'y a pas de gagnant")
}