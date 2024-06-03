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