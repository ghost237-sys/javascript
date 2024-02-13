let minNum = 1;
let maxNum = 100;

let answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);


let guess;
let attempts = 0;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}:`);
    if (isNaN(guess)){
        window.alert("please enter a valid number");
    }else if(guess < minNum || guess > maxNum){
        window.alert("please check the maximum and minimum values possible");
    }else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low");
        }else if (guess > answer){
            window.alert("Too high");
        }else{
            window.alert(`Correct the answer was ${answer} and you have gotten it after ${attempts} attempts`);
            running = false;
        }
    }
    
}