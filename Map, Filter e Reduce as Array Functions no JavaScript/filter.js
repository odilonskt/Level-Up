/*
*Exemplo:
-Filtre todoso os valores numéricos maiores que 10;
-Atribua esses desse novo array;
-Exiba os valores desse novo array no console.
*/ 

const values =[20,2,15,10,5,53,16]
//? For
// const filtered_values = []

// for(let i = 0; i<values.length;i++){
//  if(value[i]>10){
// filtered_values.push(value[i])
// }
// }

//? Filter()
const filtered_values = values.filter((value)=> value> 10)

console.log(filtered_values)