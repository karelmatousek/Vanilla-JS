$("h1").addClass("h-h1 bigMargin"); //přidávám kolik class chci - jen mezi nimi nechám mezeru
$("button").text("změna textu") //html
$("h1").click(function(){
    $("h1").css("color", "red");
    
})

let title = [$(document).keypress(function(event){
    var event = event.key;
    var result = [$("h1").text(event)];
    return result;
})]
$("h1").on("mouseover", function() { //ON funkce
    $("h1").css("color", "blue");
})
$("h1").append("<button>Hello</button>");
//$("button").remove(); // odstraní všechny elementy
// $("h1").hide(); - skryje element
// $("h1").show(); - ukáže element
