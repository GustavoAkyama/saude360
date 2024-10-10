function calcularIMC() {
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.querySelector('input[name="sexo"]:checked').value;
    const peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || altura === 0 || isNaN(idade)) {
        document.getElementById('result-text-class').textContent = 'Erro';
        document.getElementById('result-text').textContent = ' - Por favor, insira valores válidos.';
        document.getElementById('result').style.display = 'inline';
        return;
    }

    altura = altura / 100;

    // Cálculo do IMC
    const imc = peso / (altura * altura);

    let classificacao = '';
    let detalhe = '';

    if (idade >= 18) {
        if (sexo === 'homem') {
            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
                detalhe = ' - IMC menor que 18,5';
            } else if (imc >= 18.5 && imc <= 24.9) {
                classificacao = 'Peso normal';
                detalhe = ' - IMC entre 18,5 e 24,9';
            } else if (imc >= 25 && imc <= 29.9) {
                classificacao = 'Sobrepeso';
                detalhe = ' - IMC entre 25,0 e 29,9';
            } else if (imc >= 30 && imc <= 34.9) {
                classificacao = 'Obesidade grau I';
                detalhe = ' - IMC entre 30,0 e 34,9';
            } else if (imc >= 35 && imc <= 39.9) {
                classificacao = 'Obesidade grau II';
                detalhe = ' - IMC entre 35,0 e 39,9';
            } else {
                classificacao = 'Obesidade grau III (mórbida)';
                detalhe = ' - IMC maior ou igual a 40';
            }
        } else if (sexo === 'mulher') {
            if (imc < 18.5) {
                classificacao = 'Abaixo do peso';
                detalhe = ' - IMC menor que 18,5';
            } else if (imc >= 18.5 && imc <= 24.9) {
                classificacao = 'Peso normal';
                detalhe = ' - IMC entre 18,5 e 24,9';
            } else if (imc >= 25 && imc <= 29.9) {
                classificacao = 'Sobrepeso';
                detalhe = ' - IMC entre 25,0 e 29,9';
            } else if (imc >= 30 && imc <= 34.9) {
                classificacao = 'Obesidade grau I';
                detalhe = ' - IMC entre 30,0 e 34,9';
            } else if (imc >= 35 && imc <= 39.9) {
                classificacao = 'Obesidade grau II';
                detalhe = ' - IMC entre 35,0 e 39,9';
            } else {
                classificacao = 'Obesidade grau III (mórbida)';
                detalhe = ' - IMC maior ou igual a 40';
            }
        }
    } else {
        if (imc < 14.0) {
            classificacao = 'Abaixo do peso';
            detalhe = ' - IMC abaixo do esperado para a idade';
        } else if (imc >= 14.0 && imc <= 19.9) {
            classificacao = 'Peso normal';
            detalhe = ' - IMC dentro do esperado para a idade';
        } else if (imc >= 20.0 && imc <= 24.9) {
            classificacao = 'Sobrepeso';
            detalhe = ' - IMC acima do esperado para a idade';
        } else {
            classificacao = 'Obesidade';
            detalhe = ' - IMC muito acima do esperado para a idade';
        }
    }
    document.getElementById('result-text-class').textContent = classificacao;
    document.getElementById('result-text').textContent = detalhe;

    document.getElementById('result').style.display = 'inline';
}