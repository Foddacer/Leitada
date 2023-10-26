
function tocaSomPom (){
    document.querySelector('#som_tecla_pom').play();
 }

const ListaDeTeclas = document.querySelectorAll('.tecla');

ListaDeTeclas[0].onclick = tocaSomPom;

ListaDeTeclas[1].onclick = tocaSomClap;
ListaDeTeclas[2].onclick = tocaSomTim;
ListaDeTeclas[3].onclick = tocaSomPuff;
ListaDeTeclas[4].onclick = tocaSomSplash;
ListaDeTeclas[5].onclick = tocaSomToim;
ListaDeTeclas[6].onclick = tocaSomPsh;
ListaDeTeclas[7].onclick = tocaSomTic;
ListaDeTeclas[8].onclick = tocaSomTom;
