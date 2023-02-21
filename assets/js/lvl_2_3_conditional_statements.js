console.log("it works");

const inputNum = document.querySelector('form input[type ="number"]');


function diff(){
    let result = inputNum.value - 27;
    if (result > 27) {
        console.log("multipliziert: " , result *2);
    }
}