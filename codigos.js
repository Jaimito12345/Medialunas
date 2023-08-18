window.onload = function(){
    let boton =
    document.getElementById("click");
    var titulo =
    document.getElementById("titulo");
    var segundotitulo =
    document.getElementById("segundotitulo");
    var parrafo =
    document.getElementById("parrafo");
    var segundoparrafo =
    document.getElementById("segundoparrafo");


boton.onclick = function(){
    titulo.classList = ("pagina1");
    parrafo.classList = ("pagina1");
    segundotitulo.classList = ("pagina2");
    segundoparrafo.classList = ("parrafo2");
}
}