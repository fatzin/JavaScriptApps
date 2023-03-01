document.getElementById("input").addEventListener("input", changeElement);
const ptag = document.querySelector(".ptag");
const modified = document.querySelector(".link-modified");
 
 
function changeElement(){
    setTimeout(() => {
    var x = document.getElementById("input");
    var content = x.value;
    var encoded = encodeURI(content)
    var tam = content.length.toString();
 
    function setValue(target){  
        const strong = document.getElementById("length");
        strong.innerHTML = tam;
        target.innerHTML = content;   
        modified.innerHTML = encoded
    }
    setValue(ptag);
    }, 2000)
}
 