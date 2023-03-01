const number = document.querySelector(".number");
const reset = document.querySelector(".reset");

const generateColor = ( ) => {
    let hexColor = Math.random();
    hexColor = Math.random().toString(16).substring(2, 8);
number.innerHTML = "#" + hexColor;
    document.body.style.backgroundColor = "#" + hexColor;
}

reset.addEventListener("click", generateColor)

generateColor();