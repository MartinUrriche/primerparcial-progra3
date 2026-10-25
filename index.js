function crearCarrusel(contenedor) {
    const imagenes = contenedor.querySelectorAll("img");
    const btnAnterior = contenedor.querySelector(".flecha--izquierda");
    const btnSiguiente = contenedor.querySelector(".flecha--derecha");

    let indiceActual = 0;

    function actualizarCarrusel() {
        for (let i = 0; i < imagenes.length; i++) {
            imagenes[i].classList.remove("auto--frente");
            imagenes[i].classList.remove("auto--fondo");

            if (i === indiceActual) {
                imagenes[i].classList.add("auto--frente");
            } else {
                imagenes[i].classList.add("auto--fondo");
            }
        }

        imagenes[indiceActual].scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    }

    function siguiente() {
        indiceActual = (indiceActual + 1) % imagenes.length;
        actualizarCarrusel();
    }

    function anterior() {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        actualizarCarrusel();
    }

    btnSiguiente.addEventListener("click", siguiente);
    btnAnterior.addEventListener("click", anterior);

    actualizarCarrusel();
}

crearCarrusel(document.querySelector(".contenedor-carrusel__deportivo"));
crearCarrusel(document.querySelector(".contenedor-carrusel__super-deportivo"));