var randomNumber1 = Math.round(Math.random()*5+1)
var randomNumber2 = Math.round(Math.random()*5+1)
console.log(randomNumber1)
console.log(randomNumber2)
const img1_node = document.getElementsByClassName("img1")[0]
const img2_node = document.getElementsByClassName("img2")[0]
const title_node = document.getElementsByTagName("h1")[0]
img1_node.setAttribute("src", "./images/dice" + String(randomNumber1) + ".png")
img2_node.setAttribute("src", "./images/dice" + String(randomNumber2) + ".png")

if(randomNumber1 > randomNumber2){
    title_node.innerText = "Player 1 wins!"
} else if (randomNumber1 === randomNumber2){
    title_node.innerText = "Draw!"
} else {
    title_node.innerText = "Player 2 wins!"
}