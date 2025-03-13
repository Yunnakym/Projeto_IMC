document.addEventListener("DOMContentLoaded", function () {
    const calcular = document.getElementById('calcular');

    function imc() {
        const nome = document.getElementById('nome').value;
        const altura = parseFloat(document.getElementById('altura').value);
        const peso = parseFloat(document.getElementById('peso').value);
        const resultadoTexto = document.getElementById('resultado-texto');
        const resultadoImagem = document.getElementById('resultado-imagem');

        if (nome !== '' && !isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) {
            const valorIMC = (peso / (altura * altura)).toFixed(1);
            let classificacao = '';
            let imgSrc = '';

            if (valorIMC < 18.5) {
                classificacao = 'abaixo do peso.';
                imgSrc = 'img/abaixo.jpg';
            } else if (valorIMC < 25) {
                classificacao = 'com peso ideal. Parabéns!!!'; 
                imgSrc = 'img/pesoIdeal.png';
            } else if (valorIMC < 30) {
                classificacao = 'levemente acima do peso.'; 
                imgSrc = 'img/acima.jpg';
            } else if (valorIMC < 35) {
                classificacao = 'com obesidade grau I.';
                imgSrc = 'img/grau1.jpg';
            } else if (valorIMC < 40) {
                classificacao = 'com obesidade grau II';
                imgSrc = 'img/grau2.jpg';
            } else {
                classificacao = 'com obesidade grau III. Cuidado!!';
                imgSrc = 'img/grau3.jpg';
            }

            // Atualiza o texto do resultado
            resultadoTexto.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

            // Atualiza a imagem
            resultadoImagem.src = imgSrc;
           // resultadoImagem.alt = classificacao;
            resultadoImagem.style.display = 'block'; // Mostra a imagem

        } else {
            resultadoTexto.textContent = 'Preencha todos os campos corretamente!';
            resultadoImagem.style.display = 'none'; // Esconde a imagem se houver erro
        }
    }

    calcular.addEventListener('click', imc);
});