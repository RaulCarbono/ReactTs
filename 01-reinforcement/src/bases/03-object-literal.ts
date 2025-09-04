const ironman = {
    name : 'Tony',
    lastName : 'Stark',
    age: 45,
    address: {
        postalCOde : 'ABC123',
        city:'New York'
    }
}

const spiderman = structuredClone(ironman)

spiderman.name = 'Peter';
spiderman.lastName = 'Parker'
spiderman.age = 22
spiderman.address.city = 'San Jose'





console.log(ironman, spiderman)