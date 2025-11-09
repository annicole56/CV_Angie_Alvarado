//mostrar y/o ocultar la seccion de perfil
const btnToogle = document.getElementById('toogle-perfil');
const perfil = document.getElementById('perfil');

btnToogle.addEventListener('click',() => {
    if (perfil.style.display === 'none'){
        perfil.style.display = 'block';
    } else {
        perfil.style.display = 'none';
    }
});

//Efecto de pasar el mouse sobre las habilidades
const habilidades = document.querySelectorAll('#lista-habilidades li');

habilidades.forEach((habilidades) => {
    habilidades.addEventListener('mouseover', () => {
        habilidades.style.backgroundColor = '#bee3f8';
    });
    habilidades.addEventListener('mouseout', () => {
        habilidades.style.backgroundColor = '';
    });
});