var maDiv = document.getElementById("saisie");
var input = document.getElementById("username");
var vpChoose = document.getElementById("chooseVP");
var monButton1 = document.getElementById("bouton1");
var spin = document.getElementById("spinner");
var formulaireCB = document.getElementById("formMaj");
var emptyText = document.getElementById("errorEmpty");

console.log(monButton1)

monButton1.addEventListener("click", function () {

    if (input.value === "") {
        console.log("Veuillez renseigner une valeur!")
        emptyText.style.display = "block"
    } else {
        maDiv.style.display = "none";
        vpChoose.style.display = "block"
    }
});

var monButton2 = document.getElementById("bouton2")

monButton2.addEventListener("click", function () {
    vpChoose.style.display = "none"
    formulaireCB.style.display = "block"
})

var cbSubmit = document.getElementById("submitCB")
var thanks = document.getElementById("thanks")
var emptyCB = document.getElementById("emptyCB")
const input2 = document.getElementById("nomCB")
var input3 = document.getElementById("dateEXP")
var input4 = document.getElementById("numero") 
var input5 = document.getElementById("crypto")

cbSubmit.addEventListener("click", function () {
    if (input2.value === "") {
        console.log("Veuillez renseigner une valeur!")
        emptyCB.style.display = "block"
    } else if(input3.value === ""){
        emptyCB.style.display = "block"
    }  else if(input4.value === ""){
        emptyCB.style.display = "block"
    } else if(input5.value === ""){
        emptyCB.style.display = "block"
    } else {
        formulaireCB.style.display = "none";
        thanks.style.display = "block";
    }
})

document.querySelectorAll('input[type="number"]').forEach(input =>{
    input.oninput = () =>{
        if(input.value.length > input.maxLength) input.value = input.value.slice(0, input.maxLength);
    };
})
console.log(spin)



//spin.style.display = "block"
//setTimeout(function(){
//    spin.style.display ="none"
//}, 5000);