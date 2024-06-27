$(document).ready(function() {
    $('#ocultarImagen').click(function() {
        $('#imagen').hide();
        $('#tituloPagina').text('¡No tenemos ninguna imagen!');
    });

    $('#mostrarImagen').click(function() {
        $('#imagen').show();
        $('#tituloPagina').text('¡Mirá la siguiente imagen!');
    });
});
