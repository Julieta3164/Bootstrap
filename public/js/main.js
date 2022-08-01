function cambiarimagen(obj){
    document.getElementById("img-pricipal").src=obj.getAttribute("src")   
}

function cambiaricono(icono) {
    if (icono.classList.contains("bi-hand-thumbs-up")) {
        icono.classList.replace("bi-hand-thumbs-up","bi-hand-thumbs-up-fill")    
    } else {
        icono.classList.replace("bi-hand-thumbs-up-fill","bi-hand-thumbs-up") 
    }    
}