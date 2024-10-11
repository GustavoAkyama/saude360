document.addEventListener("DOMContentLoaded", function () {
    let width = window.innerWidth;

    if (width < 800) {
        let boxImage = document.getElementById('box-image');
        if (boxImage) {
            boxImage.remove();
        }
    }

    document.getElementById('calcular-imc').addEventListener('click', function () {
        window.location.href = 'calculadora_imc.html';
    });

    document.getElementById('calcular-tmb').addEventListener('click', function () {
        window.location.href = 'calculadora_tmb.html';
    });

    document.getElementById('calcular-hidratacao').addEventListener('click', function () {
        window.location.href = 'necessidade_hidrica.html';
    });

});