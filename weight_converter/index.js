
const textBox = document.getElementById("textBox");
const toKgs = document.getElementById("toKgs");
const toPounds = document.getElementById("toPounds");

const result = document.getElementById("result");

let weight;

function convert(){
    if (toKgs.checked){
        weight = Number(textBox.value) 
        weight = weight * 0.4535924;
        result.innerHTML = weight.toFixed(1) + "Kgs";

    }else if(toPounds.checked){
        weight = Number(textBox.value) 
        weight = weight * 2.204623;
        result.innerHTML = weight.toFixed(1) + "Pounds";


    }else{
        result.innerHTML = "Please choose an option";
    }
}