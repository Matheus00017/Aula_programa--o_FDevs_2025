let numeros = [];
function adicionar(){
    // pegar o numero que digitar
    let numero = document.getElementById('nume');


    //primeiro verifica se está vazio
    if(numero.value.length == 0){
        alert('Digite um número!');
    }else if(Number(numero.value)< 1 || Number(numero.value) > 100){
        alert('digite numero entre 1 e 100')
    }else{
    //pegar o select onde vamos adicionar
    let lista = document.getElementById('analise');
    //criar uma nova opção
    let item = document.createElement('option');
    item.text = numero.value;
    //adicionar a opçaõ select
    lista.appendChild(item);

    numeros.push(Number(numero.value));
    }
}

function finalizar(){
    if(numeros.length == 0 ){
        alert('Adicione os números primeiro')
    }else{
        //quantidade
        let quantidade = numeros.length;
        //maior numero
        let maior = Math.max(...numeros);
        //soma
        let soma = 0;
        for(let i = 0; i < numeros.length; i++){
            soma += numeros[i];
        }
        //media
        let media = soma / quantidade;
        //mostra os resultados
        alert(`Quantidade: ${quantidade}
        Maior: ${maior}
        soma: ${soma}
        média: ${media}`);
    }
}