function greet (name:string) : string { 
    return `Hola ${name}`
} 

const greet2 = (name : string) : string =>  `Hola ${name}`

const message = greet('Goku');
const message2 = greet2('Vegeta')

console.log(message)
console.log(message2)

function getUser() {
    return {
        name : 'ABC-123',
        uName : "elpapi23"
    }
}

const getUser2 = () => ({
       name : "ABC-123",
        uName : "elPapi23"
    })

const user = getUser()
const user2 = getUser2()

console.log(user,user2)