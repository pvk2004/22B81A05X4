let p1 = Promise.resolve(5)
let p2 = Promise.resolve(10)
let p3 = Promise.resolve(15)


p1.then((v1)=>{
    console.log("received: "+v1)
    return p2.then(v2 => v1 + v2)
})
.then((v2) =>{
    console.log("received: "+v2)
    return p3.then(v3 => v2 + v3)
})
.then((v3) =>{
    console.log("final sum  : "+v3)
})
