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

//função altura
function altura(a){
    console.log(a * 100)
}
altura(176)

//Função Calcular Idade
function idade (i){
    console.log(`Sua idade é ${i} anos`)
    console.log(`Você viveu ${12 *i} meses`)
    console.log(`Você viveu ${365 *i} dias`)
}
idade(17)

//Função Nome Do Usuário

function nome (nome){
    console.log(nome.length)
}
nome('JoãoVitor')

//Distância Endereço

function distancia(distancia){
    console.log()
}

//Média 5 Notas
function média(n1,n2,n3,n4,n5){
    console.log((n1+n2+n3+n4+n5) /5)
}
média(5,1,5,7,10)

//Função Área Do Circulo
function areacirculo(raio){
    const pi = 3.14
    console.log((raio*raio)*pi)
}
areacirculo (5)

//Função 2025
function idade (data){
    console.log (`Em 2025 você terá ${2025-data}`)
    

}
idade(2001)