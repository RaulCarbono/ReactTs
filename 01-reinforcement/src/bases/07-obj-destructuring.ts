const person = {
    name : "Peter",
    age : 23, 
    key : 'spidermar'
}

const { name : iromanName, age, key } = person

console.log({iromanName, age, key})

interface Hero { 
    name : string,
    age : number,
    key : string, 
    rank?: string 
}

const useContext = ({name, age, key, rank} : Hero) => {
    return { 
        keyName : key,
        user: {
            name,
            age
        },
        rank
    }
}

const {rank, keyName, user : {name}} = useContext(person)

console.log(rank, keyName, name)