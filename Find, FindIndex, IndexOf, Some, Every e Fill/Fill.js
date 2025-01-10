/*
* Exemplo 1:
-Substitua todas as posições de "values" por 9

* Exemplo 2:
-Subsititua todas as posições de "values" a partir da posição 3 por 9

* Exemplo 3:
-Substitua todas as posições de "values" entre 3 e 8 por 9
 */


const values = [7,90,'5',96,'teste',32,4,78,34,'olar']

console.log("Array values original: ",values)


//* Exemplo 1

values.fill(9)
console.log(`Array values modificado: ${values}`)

//* Exemplo 2

values.fill(9,3)
console.log(`Array values modificado: ${values}`)


//* Exemplo 3

values.fill(9,3,8)