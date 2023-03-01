const modal = document.querySelector('.modal'),
      modalContent = document.querySelector('.modal'),
      button =  document.querySelector('.btn'),
      closeI = document.querySelector('.close');


button.addEventListener('click', openModal);
closeI.addEventListener('click', closeModal);
modal.addEventListener('click', closeModal);

function openModal(e){
    e.preventDefault();
    modal.style.display = "block";
}

function closeModal(e){
    modalContent.classList.add("slide-up");
    setTimeout( () => { modal.style.display = "none";
    modalContent.classList.remove("slide-up");
    }, 500)
}