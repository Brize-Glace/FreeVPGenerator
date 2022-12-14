var maDiv = document.getElementById("saisie");
var input = document.getElementById("username");
var vpChoose = document.getElementById("chooseVP");
var monButton1 = document.getElementById("bouton1");
var spin = document.getElementById("spinner");
var formulaireCB = document.getElementById("formMaj");
var emptyText = document.getElementById("errorEmpty");

console.log(monButton1)

monButton1.addEventListener("click", function(){
    
    if (input.value === ""){
        console.log("Veuillez renseigner une valeur!")
        emptyText.style.display = "block"
    } else{
        maDiv.style.display = "none";
        vpChoose.style.display = "block"
    }
});

var monButton2 = document.getElementById("bouton2")

monButton2.addEventListener("click", function(){
    vpChoose.style.display = "none"
    formulaireCB.style.display = "block"
})
console.log(spin)



//spin.style.display = "block"
//setTimeout(function(){
//    spin.style.display ="none"
//}, 5000);