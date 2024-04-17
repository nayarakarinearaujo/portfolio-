document.addEventListener('DOMContentLoaded', function() {
    const projetos = document.querySelectorAll('.projeto-slide');
    const btnAnterior = document.getElementById('anterior');
    const btnProximo = document.getElementById('proximo');
    let posicaoAtual = 0;

    // Exibir o slide na posição atual
    function exibirSlide() {
        projetos.forEach(function(projeto, index) {
            if (index === posicaoAtual) {
                projeto.classList.add('mostrando');
            } else {
                projeto.classList.remove('mostrando');
            }
        });
    }

    // Avançar para o próximo slide
    btnProximo.addEventListener('click', function() {
        posicaoAtual++;
        if (posicaoAtual >= projetos.length) {
            posicaoAtual = 0;
        }
        exibirSlide();
    });

    // Voltar para o slide anterior
    btnAnterior.addEventListener('click', function() {
        posicaoAtual--;
        if (posicaoAtual < 0) {
            posicaoAtual = projetos.length - 1;
        }
        exibirSlide();
    });

    // Exibir o slide inicial
    exibirSlide();
});
