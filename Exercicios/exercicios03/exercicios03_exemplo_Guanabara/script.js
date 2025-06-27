function contar() {
    let inicio = document.getElementById("txti"); 
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    resultado = document.getElementById('resultado');
    
    if(inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        resultado.innerHTML = `inpossivel contar!`
        window.alert('[ERRO] Faltam dados!');
    }else{ 
        resultado.innerHTML = 'contando: <br>'
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value)
        if(p <= 0){
            alert(`Passo invalido! considerando passo 1`)
            passo = 1
        }
        if(i < f ){
            //crecente
            for(var c = i; c <= f ; c += p){
            resultado.innerHTML += `${c} \u{1f449}`
            }
        }else{
            //decrecente
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1f449}`
            }
        }
        resultado.innerHTML += `\u{1f3c1}`
        
    }
}