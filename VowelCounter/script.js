const btn = document.querySelector('.btn');
const word = document.querySelector('.input-text');
const result = document.querySelector('.result');

btn.addEventListener('click', vowel);

function vowel(){
    let vowelCounter = 0;
    let wordVal = word.value.toLowerCase();

    for (let i = 0; i < wordVal.length; i++) {
        let letter = wordVal[i];
        if(letter.match(/([a,e,i,o,u])/)){ vowelCounter++; }
    }
    vowelCounter > 1 ? result.innerHTML= `${word.value} tem ${vowelCounter} vogais` : result.innerHTML = `${word.value} tem ${vowelCounter} vogal`;
}
