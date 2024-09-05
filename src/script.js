///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!
let resultado = 0
let num1 = parseInt(prompt("Digite um número: "))
let num2 = parseInt(prompt("Digite outro número: "))
let operador = prompt("Digite a operação a ser realizada: ")

function Calculadora(num1, num2, operador){
  switch(operador){
    case "+":
      resultado = num1 + num2
      break
    case "-":
      resultado = num1 - num2
      break
    case "*":
      resultado = num1 * num2
      break
    case "/":
      resultado = num1 / num2
      break
    case "e":
      let contador = 1
      resultado = num1 * num2
      while(contador < num2 - 1){
        resultado = resultado * num1
        contador++
      }
      break
    
  }

  if(resultado == undefined || resultado > 1000000){
    console.log("ERRO")
  }
  return resultado
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}