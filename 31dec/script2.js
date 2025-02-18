// function Person(name,age){
//     this.name = name
//     this.age = age

//     this.greet = () => {
//         return `Hello, my name is  ${this.name}`
//     }

//     this.isAdult = () => {
//         if(this.age >= 18)
//             return "Adult"
//         else return "Minor"
//     }
// }


var person = {
    name: "John",
    age: 25,
    greet: function(){
        return `Hello, my name is  ${this.name}`
    },
    isAdult: function(){
        if(this.age >= 18)
            return "Adult"
        else return "Minor"
    },
    sayHello: function(){
        console.log("Hello");
    }
}

console.log(person.greet())
console.log(person.isAdult())