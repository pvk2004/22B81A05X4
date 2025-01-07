function calculateTotal(...n){
    let sum = 0;
    for(let a of n)
        sum += a

    return sum
}

console.log(calculateTotal(1,2,3,4,5))