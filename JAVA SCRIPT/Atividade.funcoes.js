// Função para somar dois valores

function calcular(n1,n2)//Argumentos
{
    console.log(n1+n2)
}
calcular(10,25)//Parâmetros

//Função para calcular a divisão dois números

function Dividir(n1,n2){
    console.log(n1/n2)
}
Dividir(25,5)

//Função para descobrir área
function triangulo(alt,base){
    console.log((alt * base) / 2)
}
triangulo(25,30)

//Função mensagem errada

function mensagem (idade){
    if (idade < 18){
        console.log('Pirralho!')
    }else {
        console.log('Bem Vindo Ao Nosso Site!')
    }
}
mensagem (18)