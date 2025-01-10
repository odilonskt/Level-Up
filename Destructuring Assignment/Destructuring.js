const numbers = [7,18,345,73]
//Metodo convencional
// const firstNum = numbers[0];
// const secondNum = numbers[1]



//Destructuring
const [firstNum,secondNum,trirdNum, fourthNum] = numbers;

function sun(a , b){
    return a + b;
}

const result = sun(firstNum,secondNum)
console.log(result)
console.log(trirdNum,fourthNum)