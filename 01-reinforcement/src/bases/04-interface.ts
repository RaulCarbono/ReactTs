interface Person {
    firstname: string;
    lastname: string;
    age: number;
    address:Address;
}

interface Address {
    postalCode : string;
    city: string;
}

const iroman : Person = {
    firstname : "Tony",
    lastname : "Stark",
    age: 45,
    address : {
        postalCode: 'Abc-123',
        city: "New York"
    }
}

console.log(iroman)