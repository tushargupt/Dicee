var randomNumber1 = Math.floor(6*Math.random())+1;
var randomDiceimg = "dice" + randomNumber1 + ".png";
var img1src = "images/"+randomDiceimg;
document.querySelectorAll("img")[0].setAttribute("src", img1src);
var randomNumber2 = Math.floor(6*Math.random())+1;
var randomDiceimg2 = "dice" + randomNumber2 + ".png";
var img2src = "images/"+randomDiceimg2;
document.querySelectorAll("img")[1].setAttribute("src", img2src);
if(randomNumber2>randomNumber1)
document.querySelector("h1").innerHTML = "Robot Wins!🚩";
else if(randomNumber1===randomNumber2)
document.querySelector("h1").innerHTML = "Draw!";
else
document.querySelector("h1").innerHTML = "🚩 You Wins!";