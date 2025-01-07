function mergeArrays(...ar){
    let n = []
    for (let a of ar)
        n = [...n,...a]

    return n
}

let a1 = [1,2,3]
let a2 = [4,5,6]

let r = mergeArrays(a1,a2)
console.log(r)

let a3 = ['a','b','c']
console.log(mergeArrays(a1,a2,a3))