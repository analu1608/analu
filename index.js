
function mudar_conteudo_elemento() {

     document.getElementById("demo").innerHTML= "o clique está fucionando";
}
function mudar_cor_elemento(){
 
     const paragrafo = document.querySelector('#paragrafo');
     paragrafo.addEventListener('click'  ,  ()=> {

     const elemento_paragrafo= document.querySelector('#paragrafo');
     
     elemento_paragrafo.style.color = 'red';

     });
 }

