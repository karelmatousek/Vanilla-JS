var randomNumber1 = Math.floor(Math.random()*6) + 1; //random number 1-6
var randomImg = "dice" + randomNumber1 + ".png"; //mění dice1.png - dice6.png
var targetSrc = "images/"+randomImg; //"images/dice.png-dice6.png"
var img1 = document.querySelectorAll("img")[0]; //zaměříme první obrázek dice

img1.setAttribute("src", targetSrc); //pomocí setAttribute měníme "src", targetSrc - každé obnovení stránky mění výstup (jiný obrázek) 

var randomNumber2 = Math.floor(Math.random()*6)+1; //číslo od 1 do 6
var randomImg = "images/dice"+randomNumber2+".png"; //images/dice1.png-dice6.png
var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImg);

if (randomNumber1 > randomNumber2) { //hráč 
    document.querySelector("h1").innerText = "🐵 Player 1 has won!"; //innerHTML - není bezpečné
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "🐣 Player 2 has won!";
}
else if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerText = "🤝 It's a match!";
}