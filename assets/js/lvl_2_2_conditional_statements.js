console.log("it works");

const inputPoints = document.querySelector('form input[type="range"]');
const outputOne = document.getElementById('outputOne');
const outputTwo = document.getElementById('outputTwo');
const outputThree = document.getElementById('outputThree');

function checkAirQuality(){
    if (inputPoints.value <= 50){
        outputOne.innerHTML = "Good";
        outputTwo.innerHTML = "Little or no risk";
        outputThree.innerHTML = inputPoints.value;
        document.body.style.backgroundColor = "green";
    } 
    else if (inputPoints.value > 50 && inputPoints.value <= 100){
        outputOne.innerHTML = "Moderate";
        outputTwo.innerHTML = "Acceptable quality";
        outputThree.innerHTML = inputPoints.value;
        document.body.style.backgroundColor = "orange";
    }
    else if (inputPoints.value > 100 && inputPoints.value < 150){
        outputOne.innerHTML = "Unhealthy for sensitve groups";
        outputTwo.innerHTML = "Generale public not likely affected";
        outputThree.innerHTML = inputPoints.value;
        document.body.style.backgroundColor = "red";
    }
}