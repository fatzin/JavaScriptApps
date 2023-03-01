
const number = document.querySelector(".number");
const reset = document.querySelector(".reset");

const generateNumber = ( ) => {
    const randomNumber = Math.floor(Math.random() * 10000 + 1);
    number.innerHTML = randomNumber;
}

reset.addEventListener("click", generateNumber)

generateNumber();