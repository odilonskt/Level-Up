/*
*Exemplo:
-Some todos os valores do array "values";
-Atribua esses valores á uma variável;
-Exiba os valores dessa varíavel no console.
 */

const values = [20,2,15,10,5,53,16]


//?For
// let values_sum = 0;

// for(let i = 0; i<values.length;i++){
//     values_sum += values[i];
// }

// console.log(values_sum);

//? Reduce
const values_sum = values.reduce((accumulador,value)=> accumulador + value)

console.log(values_sum)