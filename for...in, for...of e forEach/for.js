// for(let i = 0 ; i<5; i++){
//     console.log(`Este laço rodou ${i} vez `)
// }

const numbers = [23,235, 248,9,27,09];

//[]for...in
//! usa-se em casos que queira manipular as posições e valores de arrays/objetos

for(position in numbers){
    //?Irá logar a posição dos numbers
    // console.log(position)

    //? Irá mostrar o número na posição atual
    // console.log(numbers[position])

    // ?  Mostra a informação completa
    // console.log(`O valor  ${numbers[position]} está na posição ${position}`)
}


//[]for...of
//! usa-se em casos que queira somente os valores de valores de arrays/objetos
for(number of numbers){
    // console.log(` O valor é: ${numbers}`)
}

//[]forEach 
//! Usa-se em casos que queira manipular as posições e valores de arrays/objetos
//* Só fuciona com arrays!

numbers.forEach(function(number,index){
    console.log(`O valor ${number} está na posição ${index}`)
})