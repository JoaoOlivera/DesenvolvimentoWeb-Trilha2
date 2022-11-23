var dia = 2
if (dia <= 15 && dia > 0){
    console.log('O cliente pagou adiantado')
}
else if(dia > 15 && dia < 20){
    console.log('O cliente pagou em dia')
}else if(dia >= 20 && dia <=31){
    console.log('O cliente pagou atrasado')
}else if(dia == 0){
    console.log('Não é cliente')
}