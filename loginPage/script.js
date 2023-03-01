const button = document.getElementById('change');
const jokesDiv = document.querySelector('.jokes');

button.addEventListener('click', changeDiv);

function changeDiv(e){
    e.preventDefault();
    if(button.innerText === "Cadastrar"){
        jokesDiv.style.transform = '';
        button.innerText = "Já sou cadastrado";
    } else{
        jokesDiv.style.transform = 'translateX(100%)';
        button.innerText = "Cadastrar";
    }
}


