function createProfile(user){
    let {name,age} = user
    let [pi,si] = user.interests
    let newUser={
        name: name,
        age : age,
        primaryInterest: pi,
        secondaryInterest: si,
    }
    return newUser
}

// let user = {
//     name: 'John',
//     age: 30,
//     email: 'john@gmail.com',
//     address: 'HYD'
// }

// console.log(createProfile(user))

let u ={
    name: 'John',
    age: 30,
    interests:['Java','JS','Python']
}

console.log(createProfile(u))
