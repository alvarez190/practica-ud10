// Obtengo el elemento que añadiremos el evento
var elemento = document.getElementById('imagen');

/**
 * Funcion donde recoge el evento y compara que tecla fue pulsada y si es la combinacion a comparar cambiara el fondo del elemento
 * @param {Event} event Evento de tipo teclado
 */
function changeBackground(event) {
    let code = event.keyCode;
    let counter = 1;

    if (event.altKey && code == 123) {
        if (counter <= 5) {
            elemento.style.backgroundImage = "url(../img/imagen-" + counter + ".jpg)";
            counter++;
        } else {
            counter = 1;
            elemento.style.backgroundImage = "url(../img/imagen-" + counter + ".jpg)";
        }
    } else {
        console.log(event.key + event.key);
    }

    event.preventDefault();

}

//Añadimos el evento 'keydow' donde llama la funcion al tener la tecla ya presiona es decir a bajo del todo.
window.addEventListener("keydown", changeBackground, false);