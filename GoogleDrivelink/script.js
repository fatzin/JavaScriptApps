const glink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");
const forVideo = glink;

btn.addEventListener("click", generateLink);

function generateLink(e) {
    e.preventDefault();
    const confirmLink = glink.value.includes("https://drive.google.com/file/d/");

    if (confirmLink == true) {
        const getDownloadLink = glink.value.replace("https://drive.google.com/file/d/", "https://drive.google.com/uc?export=download&id=").replace("/view?usp=share_link", "")
  
        downloadLink.value = getDownloadLink;

        function copyText(target) {
            if(target.value == ""){
                alert("Por favor gere um link para download");
            } else{
                navigator.clipboard.writeText(target.value)
                .then(() => {
                    alert("Link copiado!");
                });
            }
        }

        const copy = document.querySelector(".copy");
        copy.addEventListener("click", () => {
            return copyText(downloadLink);
        })
    
        // Embed audio
        const audio = `<audio width="300" height="32" controls="controls" src="${getDownloadLink}" type="audio/mp3"></audio>`
        const embedAudio = document.getElementById("embed-audio");
        embedAudio.value = audio;
        
        //copiar o embed de audio

        const copyAudio = document.querySelector(".copy-audio");
        copyAudio.addEventListener("click", () => {
            return copyText(embedAudio);
        })

        //Embed video/docs
        
        const videoLink = forVideo.value.replace("/view?usp=share_link", "")
        const video = `<iframe src="${videoLink}/preview" width="560" height="315"></iframe>`
        embedVideo = document.getElementById("embed-video");
        embedVideo.value = video;

        //copiar o embed de video
         const copyVideo = document.querySelector(".copy-video");
         copyVideo.addEventListener("click", () => {
             return copyText(embedVideo);
         })
    } else{
        alert("Por favor entre com um link do Google Drive");
    }
}