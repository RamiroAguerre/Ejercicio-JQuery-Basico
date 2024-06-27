$(document).ready(function() {
    // Función para ocultar la imagen
    $('#ocultarImagen').click(function() {
        $('#imagen').hide();
        $('#tituloPagina').text('¡No tenemos ninguna imagen!');
    });

    // Función para mostrar la imagen
    $('#mostrarImagen').click(function() {
        $('#imagen').show();
        $('#tituloPagina').text('¡Mirá la siguiente imagen!');
    });
});
