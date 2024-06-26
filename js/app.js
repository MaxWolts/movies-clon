// Navbar dinámico
$(document).ready(function(){
    $(window).scroll(function() { /* Detecta el desplazamiento de la página */
        if ($(window).scrollTop() === 0) { /* Si la posición de desplazamiento es 0 (inicio de la página) */
            $('#navbar').addClass('transparent'); /* Agrega la clase 'transparent' para hacer la barra de navegación transparente */
        } else {
            $('#navbar').removeClass('transparent'); /* Si no es el inicio, remueve la clase 'transparent' */
        }
    });
});

// Buscador
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    searchButton.addEventListener('click', function() {
        const searchValue = searchInput.value.toLowerCase();
        // Aquí puedes implementar la lógica de búsqueda
        console.log('Buscar películas con: ', searchValue);
    });
});



    
    