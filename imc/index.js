const calcular = document.querySelector("#calcular");


function imc () {
    const nome = document.querySelector("#nome").value;
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;
    const resultado = document.querySelector("#resultado");

    if(nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

            if(valorIMC < 18.5){
                classificacao = "abaixo do peso";
            } else if(valorIMC < 25 ){
                classificacao = "com peso ideal";
            } else if(valorIMC < 30) {
                classificacao = "acima do peso";
            } else if(valorIMC < 35) {
                classificacao = "com obesidade Grau I";
            } else if(valorIMC < 40) {
                classificacao = "com obesidade Grau II";
            } else {
                classificacao = "com obesidade Grau III";
            } 

            resultado.textContent = `${nome} seu IMC é ${valorIMC}.  Você está ${classificacao}.`;


    } else {
        alert('Preencha todos os campos!')
    }
}

calcular.addEventListener('click', imc);

