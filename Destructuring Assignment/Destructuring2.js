const client1 = {
    name: "Huriel Lopes",
    email:"huriel.exemplo@email.com",
    age: 19,
    college:"Instituto Federal sul Rio-grandense"
}


const client2 = {
    name: "Alycia Debnam-Carey",
    email:"alycia.contact@email.com",
    age:28,
    college: null,
}

function getBirthYear(age){
    const year = new Date().getFullYear();
    
    const birthYear = year - age;
    return birthYear
}

function showPersonInfo({name, email,age,college}){
    const birthYear = getBirthYear(age)

    console.log(` O  nome dessa pessoa é: ${name}`)

    console.log(`o ano nascimento foi: ${birthYear}`)

    console.log(` Para  entrar em contato com essa pessoa, envie um e-mail para: ${email}`)
    if(college){
        console.log(`E estuda em : ${college}`)
    }
}


showPersonInfo(client1)


