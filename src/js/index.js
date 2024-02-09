    var butaoComprar = document.querySelector(".btn-comprar");
    
    butaoComprar.addEventListener('click', function(){
        elementoPlataformas.classList.add('ativo');
    })


   var botao = document.querySelector('.btn-plataforma');
   var elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

    botao.addEventListener("click",() => {
        elementoPlataformas.classList.toggle("ativo");
    });


