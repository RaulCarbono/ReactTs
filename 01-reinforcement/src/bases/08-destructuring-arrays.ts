const charaterNames  = ['Goku', 'Vegeta', 'Trunks']

const [, , p3] = charaterNames

console.log({p3})


const returnArraysFun = () => {
    return ['ABC', 123] as const
}

const [letters, numbers] = returnArraysFun()

console.log(letters, numbers)