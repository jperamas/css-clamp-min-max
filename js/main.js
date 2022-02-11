const obtenerDimension = (elTarjeta, elAncho) => {
    const tarjeta = document.getElementById(elTarjeta);
    const ancho = document.getElementById(elAncho);
    if (tarjeta && ancho) {
        ancho.innerHTML = tarjeta.clientWidth  + 'px';
    }
}

obtenerDimension('tarjeta1', 'ancho1');
obtenerDimension('tarjeta2', 'ancho2');
obtenerDimension('tarjeta3', 'ancho3');

window.addEventListener('resize', (e) => {
    obtenerDimension('tarjeta1', 'ancho1');
    obtenerDimension('tarjeta2', 'ancho2');
    obtenerDimension('tarjeta3', 'ancho3');
});