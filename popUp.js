

let iniciar = document.querySelector('#iniciar');
let popUp = document.querySelector('#popUp');
let btn_cerrar = document.querySelector('#btn_cerrar');
let overlay = document.querySelector('#overlay');

iniciar.addEventListener('click', function () {
    popUp.style.visibility = 'visible';
    popUp.style.opacity = '1';
    popUp.style.transition = 'all 0.5s';

    
});



btn_cerrar.addEventListener('click', function () {
    popUp.style.visibility = 'hidden';
    popUp.style.opacity = '0';
    popUp.style.transition = 'all 0.5s'
});
