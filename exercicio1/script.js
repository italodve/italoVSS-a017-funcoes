// Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

//b) Declare uma função que imprima a tabuada do 6. Chame esta função.

//c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 


function Ola (nome) {
console.log(`olá, ${nome} `)


} 
Ola("italo")


function tabuada () {
    let numero = 6
    for(let i=1; i<=10;i++)
    console.log(`${numero*i}`)

}tabuada()