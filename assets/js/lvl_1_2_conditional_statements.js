console.log("it works");

const inputNum = document.querySelector('form input[type="number"]');
const output = document.querySelector('span');

function weather(){
    if (inputNum.value >=8 && inputNum.value <=10) {
        output.innerHTML = "super";
    } 
    else if (inputNum.value <=7 && inputNum.value >= 6){
        output.innerHTML = "gut";
    }
    else if (inputNum.value >= 3 && inputNum.value <= 5){
        output.innerHTML = "okay";
    }
    else if (inputNum.value >=0 && inputNum.value <= 2){
        output.innerHTML = "schlecht";
    }
    else {
        output.innerHTML = "out of scale"
    }
}