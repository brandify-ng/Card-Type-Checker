// check for card types
// let masterCard = ["51", "52", "53", "54", "55"];
// let verve = ["5006001", "50060"]
let displayResult = document.getElementById("result");
let displayCard = document.getElementById("icon");
let displayVisa = document.getElementById("visa");
let displayMaster = document.getElementById("mastercard");
// displayCard.style.display = 'none';

let cardInput = document.getElementById("cardnumber");
cardInput.addEventListener("keyup", cardCheck);
function cardCheck() {
    let cardType = document.getElementById("cardnumber").value;
    if (cardType.startsWith("4")) {
        console.log("Visa");
        displayResult.innerHTML = `This card is a Visa Card`;
        displayCard.style.display = 'none';
        displayVisa.style.display = 'block';
        displayMaster.style.display = 'none';
    };
    for (let i = 51; i < 56; i++) {
        if (cardType.startsWith(i)) {
            console.log("MasterCard");
            displayResult.innerHTML = `This card is a MasterCard`;
            displayCard.style.display = 'none';
            displayVisa.style.display = 'none';
            displayMaster.style.display = 'block';
        }        
    };
    for (let i = 506099; i < 506199; i++) {
        if (cardType.startsWith(i)) {
            console.log("Verve");
            displayResult.innerHTML = `This card is a Verve Card`;
        }        
    };
}
