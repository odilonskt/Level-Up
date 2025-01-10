// 1- inserir dado
localStorage.setItem("name","Matheus")

//2- restart sem perder dados 


//3- resgatar item 
const name = localStorage.getItem("name")

console.log(name)

// 4 - resgate de item não existe
const lastName = localStorage.getItem("lastname")

console.log(lastName)


if(!lastName){
    console.log("Sem sobrenome!")
}


// 5 - remover item
localStorage.removeItem("name")

//6 - limpar todos os itens 
localStorage.setItem("a",1)
localStorage.getItem("b",2)

// console.log(typeof localStorage.getItem("a"))


localStorage.clear()


// 7 session storage
sessionStorage.setItem("number",123)

//8 - reiniciar e perder dados

const n = sessionStorage.getItem("number")

console.log(n)

sessionStorage.removeItem("number")

sessionStorage.clear();

//9 - salvar objeto

const person = {
    name:"Matheus",
    age:31,
    job:"Programmer",
}

localStorage.setItem("person",JSON.stringify(person))


const getPerson = localStorage.getItem("person")

const getPersonObj = JSON.parse(getPerson)
console.log(getPersonObj.name)