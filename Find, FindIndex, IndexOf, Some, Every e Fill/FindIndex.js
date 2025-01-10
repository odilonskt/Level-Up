/*
*Exemplo:
-Exiba no console a primeira posição no qual existe um valor que seja menor que 10 
 */

const values = [67,90,241,96,7,32,4]

const foundPosition = values.findIndex((value)=>value < 3)
console.log(foundPosition)
//-1