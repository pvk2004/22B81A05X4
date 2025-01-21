function callback(name){
    let msg = "Hello, ";
    return msg + name + "!";
}

function greet(name){
    return callback(name);
}

let m = greet("Krishna")
console.log(m)
  