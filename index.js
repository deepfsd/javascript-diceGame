randomNumber = Math.floor(Math.random() * 6 + 1);
randomNumber2 = Math.floor(Math.random() * 6 + 1);

$(".img1").attr("src", "./images/dice" + randomNumber + ".png");
$(".img2").attr("src", "./images/dice" + randomNumber2 + ".png");

if(randomNumber > randomNumber2)
{
    $(".title").text("Player 1 Wins! 🚩")
}
else if(randomNumber2 > randomNumber)
{
    $(".title").text("Player 2 Wins! 🚩")
}
else
{
    $(".title").text("DRAW!")
}