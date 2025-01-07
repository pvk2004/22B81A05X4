// function updateProductInfo(p){
//     let temp = {
//         discount: 10,
//         inStock : true,
//     }
//     let np ={
//         id : p.id,
//         name : p.name,
//         ...temp
//     }
//     return np
// }

// const product = {
//     id: 101, 
//     name: 'Laptop', 
//     price: 1000, 
//     category: 'Electronics'
// }

// console.log(updateProductInfo(product))


// const user = {
//     name: 'Afroz',
//     age: 30, 
//     city: 'Hyderabad', 
//     country: 'INDIA' 
// };

// let n = user.name
// let a = user.age
// let c = user.city
// let con = user.country

// console.log(n, a, c, con)
const person = {
    name: 'Alice', 
    address: {
        street: '123 Main St',
        city: 'Los Angeles', 
        zip: '90001'
    }, 
    age: 25
};

console.log(person.address.street, person.address.city)