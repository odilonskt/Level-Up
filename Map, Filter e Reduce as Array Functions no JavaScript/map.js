/*
*Exemplo:
-Multiplique os valores do array "values" por 2;
-Atribua esses valores à um novo array;
-Exiba os valores desse novo array no console.
*/ 


const values =[20,2,15,10,5,53,16]

// const multiplied_values = []

// for(let i = 0; i<values.length;i++){
//     const multiplied_values = values[i]*2;

//     multiplied_values.push(multiplied_values)
// }

//? Map()
const multiplied_values = values.map((values)=>values * 2 )

console.log(multiplied_values)