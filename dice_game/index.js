

function roll(){
    
    const noOfDice = document.getElementById("Dices").value;
    const DiceResult = document.getElementById("dice_value");
    const  values = [];

    for(i=0; i < noOfDice ; i ++){
        const value = Math.round(Math.random() * 6) + 1;
        values.push(value);
    }

    DiceResult.textContent = `Dice#: ${values.join(", ")}`;
}