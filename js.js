document.getElementById("target").addEventListener("click", function() {

  if (!document.getElementById("id")) {
    document.getElementById("pyro").id = "id";
  }

var myArray = [
  "Andrade Meilyn",
  "Barthélémy E.Victor",
  "Broutin Jean-Marc",
  "Brunner Louise",
  "Djendo Essiko Guy",
  "Fantini Ilaria",
  "Gaban Gaëlle",
  "Ismail Joseph",
  "Kremers Audrey",
  "Marchetti Mona",
  "Mennito Caterina",
  "Mombo Rasero Pablo",
  "Nachit Amine",
  "Oikonomou Jean-Adrian",
  "Scheppers Jean-Philippe",
  "KAHOOT",
  "Van Hove Cédric",
  "Weiss Dorothée",
  "Diambu Antoine",
  "M'rabet Reda",
  "Moulila Othman",
  "Nowak Perry-keanou",
  "Vanderheyden Dorian",
  "Wauquier Teddy"
];
var x = document.getElementById("myAudio");
var x2 = document.getElementById("myAudio2");
document.getElementById("myAudio").loop = true;
x.play();
var startTime = new Date().getTime();
var interval = setInterval(function(){
    if(new Date().getTime() - startTime > 6000){
        clearInterval(interval);
        document.getElementById("id").id = "pyro";
        x.pause();
        x2.play();
        document.getElementById("target").disabled = false;
        return;
    }
    document.getElementById("container").innerHTML = myArray[[Math.floor(Math.random()*myArray.length)]];    // get the item and increment i to move to the next
    document.getElementById("target").disabled = true;
}, 70);
});
