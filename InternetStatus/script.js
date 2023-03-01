const image = document.getElementById("image");
const statusDisplay = document.getElementById("status");
const bgColor = document.getElementById("main");

function setColor(){
    bgColor.classList.add("online"); 
}

async function connectionStatus(){
    try{
        const fetchResult = await fetch('https://upload.wikimedia.org/wikipedia/commons/c/ca/1x1.png?time='+ (new Date()).getTime());
        image.src = "./images/online.png";
        setColor();
        return fetchResult.status >= 200 && fetchResult.status < 300;
    } catch(e){
        image.src = "./images/offline.png";
        statusDisplay.textContent = "Opa! Parece que a sua conexão está offline!"
        bgColor.classList.remove("online");
    }
}

setInterval(async ()=> {
    const result = await connectionStatus();
    if(result){
        statusDisplay.textContent = "Opa! Você está online";
        setColor();
    }
}, 5000);

window.addEventListener("load", async (event)=>{
    if(connectionStatus()){
        statusDisplay.textContent = "Opa! Você está online";
    } else{
        statusDisplay.textContent = "Opa! Você está offline";
    }
})