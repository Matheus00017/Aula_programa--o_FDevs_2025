let num = [5, 6, 7, 9 ,8 ,1 ,2 ,3];

/*
num[10] = 10;
num[9] = 11;
num[10] = 200
num.push(12);
num.length
*/

num.sort();
console.log(num)
console.log(`nosso vetor é o ${num} e tem ${num.length} posições`);
console.log(`o primeiro valor do vetor é o número ${num[0]}`);
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado`);
}else{
    console.log(`O valor está na posição ${pos}`)
}