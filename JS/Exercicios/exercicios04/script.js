function calcular(){
    let numero = document.getElementById('nume');
    let tabuada = document.getElementById('tabu');
    if(numero.value.length == 0){
        window.alert('Por favor, digite um numero!')
    }else{
        let num = Number(numero.value);
        let calculo = 1
        tabuada.innerHTML = '';
        while (calculo <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${calculo} = ${num*calculo}`
            item.value = `tabuada${calculo}`
            tabuada.appendChild(item)
            calculo++
        }
    }


}