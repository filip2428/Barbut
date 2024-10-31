var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImg1 = "./images/dice" + randomNumber1 + ".png";
var randomImg2 = "./images/dice" + randomNumber2 + ".png";
document.getElementsByClassName("img1")[0].setAttribute("src",randomImg1);
document.getElementsByClassName("img2")[0].setAttribute("src",randomImg2);
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins!";
}
else {
    document.querySelector("h1").textContent = "Draw";
}