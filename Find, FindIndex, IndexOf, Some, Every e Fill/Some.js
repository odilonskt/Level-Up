/*
*Exemplo:
-Exiva no console se alguma posição e menor qu 10 
*/

const values = [90,5,96,7,32,4]


const existsValuesSmallerThan10 = values.some((value)=> value < 10 )
//? treu para numero menores que 10
//? false para numero maiores que 10
console.log(existsValuesSmallerThan10)