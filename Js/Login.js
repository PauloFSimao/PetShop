
/*  declarando variável */
var FecharElemento = document.querySelectorAll('.Fechar-Elemento');



/*  ABRINDO E FECHANDO MODAL ORÇAMENTO */
for(var i = 0; i < FecharElemento.length; i++){

    FecharElemento[i].addEventListener('click', function(){

        var fundo = document.querySelector('.Fundo-Modal');
        var modal = document.querySelector('#Modal-Orcamento');

        fundo.classList.toggle('Abrir');
        modal.classList.toggle('Abrir');
        
    })
}