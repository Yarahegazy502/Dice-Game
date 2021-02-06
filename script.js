// player 1
var randomNumber = Math.floor(Math.random()*6)+1;
var randomImgSource = "images/dice"+randomNumber+".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute('src',randomImgSource)

// player 2
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImgSource2 = "images/dice"+randomNumber2+".png";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute('src',randomImgSource2);

//content h1
if(randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="🚩 player 1 wins!"
}
else if(randomNumber2>randomNumber){
    document.querySelector("h1").innerHTML="player 2 wins! 🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}