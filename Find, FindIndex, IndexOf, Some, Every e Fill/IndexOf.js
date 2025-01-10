/* 
*Exemplo 1 :
-Exiba no console a primeira posição na qual existe um valor que seja estritamente igual a 5.

*Exemplo 2 : 
- Exiba no console a primeira posição na qual existe um valor que seja estreitamente igual a 5 e depois da posição 3 do array

*Exemplo 3 :
-Exibir no console a segunda posição na qual existe um valor que seja estreitamente igual a 5.
*/

const values = ["5",90,5,96,7,32,5]


// * Exemplo 1
const foundPosition = values.indexOf(5);
console.log(` exemplo 1: ${foundPosition}`)
//? valor vai retorna posição 

//* Exemplo 2
const foundPosition_2  = values.indexOf(5,3)

console.log(foundPosition_2)


//* Exemplo 3
const firstFoundPosition_3= values.indexOf(5)


const foundPosition_3 = values.indexOf(5,firstFoundPosition_3 + 1)

console.log(foundPosition_3)