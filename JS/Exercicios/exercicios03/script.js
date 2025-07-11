function contar() {
    let inicio = document.getElementById("txti"); 
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    resultado = document.getElementById('resultado');
    
    if(inicio.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!');
    }else{ 
        resultado.innerHTML = 'contando...'
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value)
        
        for(var c = i; c <= f ; c += p){
            resultado.innerHTML += `${c}`
        }
    }
}