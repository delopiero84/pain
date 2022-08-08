let first_card = 10
let second_card = 20

let sum = first_card + second_card


function trt() {
    if (sum < 21) { console.log("Do you want draw new card?") }
    else if (sum === 21) { console.log("You got blackjack") }
    else { console.log("You are out of game") }
}
trt()
