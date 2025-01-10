const gamingPc ={
    motherboard: {
        model: 'Asus Prime A320M-K/BR',
        price: 488.9,
      },
      cpu: {
        model: 'Ryzen 5 1600',
        price: 1189.9,
      },
      cabinet: {
        model: 'Aerocool Cylon',
        price: 368.9,
      },
      gpu: {
        model: 'Gigabyte GeForce GTX 1060 3GB GDDR5',
        price: 2537.3,
      },
      power_supply: {
        model: 'EVGA 450W Bronze',
        price: 419.9,
      },
      ram: {
        model: 'HyperX Fury 16GB 2666MHz DDR4',
        price: 750.0,
      },
    };
const gamingPcPartsPrice = []
let totalPrice = 0




console.log("Peças do PC:")
for(pcPart in gamingPc){
    console.log(`Modelo: ${gamingPc[pcPart].model}| Preço: ${gamingPc[pcPart].price}`)


    gamingPcPartsPrice.push(gamingPc[pcPart].price)
}

console.log("____________")
// gamingPcPartsPrice.forEach(function(pcPartPrice){
//     totalPrice += pcPartPrice
// })

for(pcPartPrice of gamingPcPartsPrice){
    totalPrice+= pcPartPrice
}
console.log(`Valor toral do PC: ${totalPrice}`)

const test = document.getElementsByClassName("nomeDaClass")