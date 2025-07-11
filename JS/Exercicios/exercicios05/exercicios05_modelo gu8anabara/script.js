let num = document.querySelector('input#nume');
let lista = document.querySelector('select#lista');
let resposta = document.querySelector('div#resposta')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
        
        
    }
}


function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        resposta.innerHTML = ''
    }else{
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if(valores.length == 0){
        window.alert('Adiciones valores antes de finalizar!');
    }else{
        let total = valores.length;
        let maior = valores [0] 
        let menor = valores [0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores [pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma/total
        resposta.innerHTML = '';
        resposta.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
        resposta.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        resposta.innerHTML += `<p>O meno valor informado foi ${menor}</p>`
        resposta.innerHTML += `<p>Somando todos os valores o resultado é ${soma}</p>`
        resposta.innerHTML += `<p>A media dos Valores digitados é ${media}</p>`
    }
}