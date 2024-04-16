$(document).ready(function(){
    $(window).scroll(function() { /* Detecta el desplazamiento de la página */
        if ($(window).scrollTop() === 0) { /* Si la posición de desplazamiento es 0 (inicio de la página) */
            $('#navbar').addClass('transparent'); /* Agrega la clase 'transparent' para hacer la barra de navegación transparente */
        } else {
            $('#navbar').removeClass('transparent'); /* Si no es el inicio, remueve la clase 'transparent' */
        }
    });
});
