let nome = prompt('Digite seu nome:')
let salario = parseFloat(prompt('Digite seu salário fixo: '))
let vendas = parseFloat(prompt('Digite o total de vendas efetuada no mês:'))
let porcent = vendas * 0.15
let sal = porcent + salario
alert('Olá '+nome+', você recebeu R$'+sal.toFixed(2)+' esse mês.')