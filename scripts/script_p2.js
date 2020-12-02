// Almaceno los elementos en una variable global 
var elementoOrigen = document.getElementById("origen");
var elementoDestino = document.getElementById("destino");

// Hago que elemento 'origen' sea draggable
elementoOrigen.setAttribute("draggable", "true");


/**
 *  Eventos que añado al elemento origen:
 *  dragstart cuando comienza a movel el elemento realiza la funcion insertada
 *  dragend cuando suelte el elemento es decir cuando deje de presionar el click
 */

elementoOrigen.addEventListener("dragstart", () => {
    // Al movel elemento se opacara un 50%
    elementoOrigen.style.opacity = 0.5
    console.log("drag start")
});

elementoOrigen.addEventListener("dragend", () => {
    elementoOrigen.style.opacity = 1
    console.log("drag end")
});


/**
 *  Eventos que contiene el elemento destino que funciona como zona de drop:
 *  dragover cuando el elemento movido se posiciona sobre la zona pero no suelta el elemento 
 *  dragleave cuando sale de la zona de drop 
 *  drop cuando el elemento movido lo suelte en la zona especificada
 * 
 *  NOTA: Tanto el evento dragover y drop tiene tiene añadida una linea llamada 'preventDefaul()'
 *  para quitar la funcion predertermida de over y permite soltar el elemento movido en la zona y en 
 *  drop permite recibir el elemento para que ejecute las ordenes añadidas. 
 */

elementoDestino.addEventListener("dragover", (e) => {
    e.preventDefault()
    elementoDestino.style.backgroundColor = "red"
    console.log(" drag over");
});

elementoDestino.addEventListener("dragleave", () => {
    elementoDestino.style.backgroundColor = "white"
    console.log("drag leave");
});


elementoDestino.addEventListener("drop", (e) => {
    e.preventDefault()

    //Borro  o escondo el elemento movido
    elementoOrigen.style.display = "none"

    // Cambio de texto al destino y cambio su color de letra
    elementoDestino.innerHTML = "!Lo has logrado¡"
    elementoDestino.style.color = "white"

    console.log("drop");
})