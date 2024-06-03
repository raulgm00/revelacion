window.onload = function() {
    const image1 = document.getElementById('image1');
    const image2 = document.getElementById('image2');
    const baby = document.getElementById('baby');
    
    
    function moveImages() {
        image1.style.transform = 'translate(18vw, -50%)';
        image2.style.transform = 'translate(-18vw, -50%)';

        setTimeout(() => {
            image1.style.opacity = '0';
            image2.style.opacity = '0';
            baby.style.animation = 'explode 20s forwards'; // animacion en la que aparece la pequeña
            confetisRosas();
        }, 5000); // Ajusta el tiempo según la duración de la animación de movimiento
    

    }
    document.querySelector('.animation-container').addEventListener("animationend", function() {
        document.querySelector('.oculto').style.display = "block";
        
    });
    moveImages();
    confetis();
    

    
};

function confetis(){

    var end = Date.now() + (15 * 450);
    console.table(end);
    document.querySelector('.oculto').style.display = "none";

        // go Buckeyes!
        var colors = ['#bb0000', '#ffffff'];

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());

}

function confetisRosas(){

    
    var end = Date.now() + (15 * 10000);

        // go Buckeyes!
        var colors = ['#fdf1f1', '#f6c8c7'];

        (function frame() {
            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: colors
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: colors
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
                
            }
        }());

        

}


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

