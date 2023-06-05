//document.querySelector("button").addEventListener("click", function () {alert("Clicked!")}) //volání pomocí anonymní funkce

// var buttons = document.querySelector("button").addEventListener("click", handleClick); //zaměřím tlačítko, které chci ovlivnit a přidám akci kliknutí + odkaz na funkci
// for (i=0; i<buttons.length; i++); {
// var button = buttons[i];
// }
// function handleClick () { //specifikovaná tato funkce, která vyhodí alert
//     alert("I got clicked");
// }



// detekce kliku myši


var buttons = document.querySelectorAll(".drum");         //zaměření elementu, který chceme měnit

for (let i = 0; i < buttons.length; i++) {                //získáme řadu [i]
 
var button = buttons[i];                                  //var aby se stím lépe pracovalo + array [i]=(to jsou čísla od 1 do 7)

button.addEventListener("click", function switchCase () { //dal jsem jméno fci, abych ji mohl použít u klávesové zkratky
    var innerText = this.innerText;                       //document.querryselectorAll(".drum").innerText (dá se nahradit this.)
     switch (innerText) { 
      case "w":                                           //tyto funkce se tvoří jinak než klasické fce - místo {} je : a break;
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "a":
        var kickBass = new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break; 

      case "s":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;
  
      default:
        console.log(innerText);
        break;
    }
  });
}


//    detekce příslušné klávesy


  document.addEventListener("keydown", function (switchCase) {   //zaměřuje se na stisk kterékoliv klávesy + parametr je fce SWITCH
    
    var name = switchCase.key;                                   // .key - MDN je to fce, která rozezná parametry stisknuté klávesy

    if(name == "w") {                                            //když je stisknutá klávesa "w", tak přehraje zvuk "crash" atd.
      var crash = new Audio("sounds/crash.mp3");
      crash.play();}

    else if(name =="a") {
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();}

    else if(name =="s") {
      var snare = new Audio("sounds/snare.mp3");
      snare.play();}
    
    else if(name =="d") {
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();}
        
    else if(name =="j") {
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();}
    
    else if(name =="k") {
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();}
    else if(name =="l") {
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();}
    else
    console.log(name);
  })

  function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);
  
    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  
  }
  