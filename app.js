/* Al cargar el sitio, crea la galeria */
document.addEventListener('DOMContentLoaded', function() {
    crearGaleria();
} );

/*Functions*/
//Funcion que crea la galeria de imagenes
function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i<= 4; i++){
        const imagen = document.createElement('img');
        imagen.src = `./assets/img/thumb/${i}.png`;
        imagen.dataset.imagenId = i; //este atributo agrega un id con HTML5

        //Anadir mostrarImagen
        imagen.onclick = mostrarImagen;

        const lista = document.createElement('li');
        lista.appendChild(imagen);

        galeria.appendChild(lista);
    };
};

//Funcion que al hacer click agranda la img
function mostrarImagen (e) {
    //Convertimos el id a int
    const id = parseInt( e.target.dataset.imagenId )

    //Genera la img
    const imagen = document.createElement('img');
    imagen.src = `./assets/img/grande/${id}.png`;

    const overlay = document.createElement('div');
    overlay.appendChild(imagen);
    overlay.classList.add('overlay');
    
    //Boton para cerrar imagen
    const cerrarImg = document.createElement('p');
    cerrarImg.textContent = 'X';
    cerrarImg.classList.add('btnCerrar');

    //Cuando se da click se cierra img
    overlay.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }
    
    //cuando se presiona se cierra la img
    cerrarImg.onclick = function(){
        overlay.remove();
        body.classList.remove('fijar-body');
    }

    overlay.appendChild(cerrarImg);

    //Mostrar en el HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);

    body.classList.add('fijar-body');
}