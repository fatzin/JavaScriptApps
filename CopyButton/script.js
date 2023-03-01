const btn = document.querySelector(".btn");
const id = document.querySelector(".valor");

const copyText = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(id.value)
        .then(() => {
            alert("Palavra copiada!");
        });
};

btn.addEventListener("click", copyText);