document.addEventListener("DOMContentLoaded", function() {
    var contadorElemento = document.getElementById("contador");
    var resultadoElemento = document.getElementById("resultado");
    var contador = 10;

    var intervalo = setInterval(function() {
        contadorElemento.textContent = contador;
        contador--;

        if (contador < 0) {
            clearInterval(intervalo);
            mostrarResultado();
        }
    }, 1100);

    function mostrarResultado() {
        resultadoElemento.textContent = "¡Haaa vedaaaaa!";
        resultadoElemento.style.display = "block";
    }

    // Redireccionar después de 3 segundos
    setTimeout(function() {
        window.location.href = "revelacion.html"; // Cambia "nueva_pagina.html" por la URL de la página a la que quieres redireccionar
    }, 15000); // 3000 milisegundos = 3 segundos

});

const colors = [
    '#FFD1DC', // Rosa claro
    '#FFA07A', // Salmon claro
    '#FFB6C1', // Rosa claro
    '#FFC0CB', // Rosa pastel
    '#FFDAB9', // Durazno claro
    '#FAEBD7', // Blanco antiguo
    '#F0FFF0', // Menta crema
    '#FFE4E1', // Rosado pálido
    '#FFFAF0', // Marfil antiguo
    '#F5F5DC', // Beige
    '#F5DEB3', // Trigo
    '#FAF0E6', // Lino
    '#FFF5EE', // Papaya Whip
    '#FFF8DC', // Maíz sedoso
    '#F0E68C', // Amarillo claro
    '#E6E6FA', // Lavanda
    '#FFF0F5', // Lavanda rosa
    '#FFE4B5', // Melocotón
    '#FDF5E6', // Blanco antiguo
    '#FFDEAD', // Navajo blanco
    '#F5F5F5', // Blanco humo
    '#F0FFFF', // Azul lavanda
    '#F5F5F5', // Gris claro
    '#E0FFFF', // Azul claro
    '#F5F5F5', // Blanco humo
    '#F5F5F5', // Gris claro
];


let currentIndex = 0;

function changeBackgroundColor() {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
    setTimeout(changeBackgroundColor, 1000); // 1 segundos para rosa pastel
    
}

// Inicia el cambio de color
changeBackgroundColor();
