const api = {
    key: "4ac6985bd180ed1527b477a328e73ba0",
    base: "https://api.openweathermap.org/data/2.5/"
}

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click", getInput);

function getInput(e) {
    e.preventDefault();
    if(e.type == "click"){
        getData(search.value);
    }
}

function getData(search){
    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
    .then(response =>{
        return response.json();
    })
    .then(displayData);
}

function displayData(response){
    //console.log(response);
    if( response.cod === "404"){
        const error = document.querySelector('.error');
        error.textContent = "Por favor entre uma cidade válida"; 
        search.value = "";
    } else {
        const city = document.querySelector('.city');

        city.innerText = `${response.name}, ${response.sys.country}`
        
        const today = new Date();
        const date = document.querySelector('.date');
        date.innerText = dateFunction(today);

        const temp = document.querySelector('.temp');
        temp.innerHTML = `Temperatura: ${Math.round(response.main.temp)} <span>°C</span>`;

        const weather = document.querySelector('.weather');
        weather.innerText = `Tempo: ${response.weather[0].main}`;

        const temprange = document.querySelector('.temp-range');
        temprange.innerText = `Variação de temperatura: ${Math.round(response.main.temp_min)} °C - ${Math.round(response.main.temp_max)} °C`;

        const weatherIcon = document.querySelector('.weather-icon');
        const iconUrl = `http://openweathermap.org/img/w/${response.weather[0].icon}.png`;
        weatherIcon.src = iconUrl;

        search.value = "";
    }
}

function dateFunction(d) {
    let month = ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
    let days = ["Domingo","Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira" ,"Sábado"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let months = month[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} de ${months} ${year}`;

}