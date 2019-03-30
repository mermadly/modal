var botonPrincipal = document.querySelectorAll('.principal');

var index = [...botonPrincipal].indexOf() + 1;

var wrapper = document.querySelector('.wrapper');


botonPrincipal[index].addEventListener('click', function() {

    wrapper.classList.remove('display-none')
    botonPrincipal[index].classList.add ('display-none')

    })


var botonSecundario = document.querySelectorAll('.secundario');
var index2 = [...botonSecundario].indexOf() + 1;

botonSecundario[index2].addEventListener('click', function() {

    wrapper.classList.add('display-none');
    botonPrincipal[index].classList.remove('display-none')
})

var botonX = document.querySelectorAll('.fa-times-circle');

botonX[index].addEventListener('click', function(){
    wrapper.classList.add('display-none');
    botonPrincipal[index].classList.remove('display-none')
})