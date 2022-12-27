
function encript() {
    var frase = document.getElementById("text-input").value.toLowerCase(); 

    var encript = frase.replaceAll(/e/img,"enter")
    .replaceAll(/o/img,"ober")
    .replaceAll(/i/img,"imes")
    .replaceAll(/a/img,"ai")
    .replaceAll(/u/img,"ufat");

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("textarea").innerHTML = encript;  
    document.getElementById("btn-copy").style.display = "show"; 
    document.getElementById("btn-copy").style.display = "inherit"; 
}

function desencript() {
    var frase = document.getElementById("text-input").value.toLowerCase(); 

    var encript = frase.replaceAll(/enter/img,"e")
    .replaceAll(/ober/img,"o")
    .replaceAll(/imes/img,"i")
    .replaceAll(/ai/img,"a")
    .replaceAll(/ufat/img,"u");

    document.getElementById("img-right").style.display = "none";
    document.getElementById("text").style.display = "none";
    document.getElementById("textarea").innerHTML = encript;  
    document.getElementById("btn-copy").style.display = "show"; 
    document.getElementById("btn-copy").style.display = "inherit"; 
}


function copy() {
    var contenido = document.querySelector("#textarea"); 
    contenido.select();
    document.execCommand("copy");
    
}
