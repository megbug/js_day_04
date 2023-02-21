console.log("it works");

const inputAge = document.querySelector('form input[type="number"]');
const output = document.querySelector('p');

function adult(){
    if (inputAge.value >= 18) {
        output.innerHTML = "volljährig";
    }
    else {
        output.innerHTML = "minderjährig";
    }
}