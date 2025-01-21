function add(num,callback){
    callback(num+10)
}

function sub(num,callback){
    callback(num-3)
}

function mul(num,callback){
    callback(num*2)
}
function operate(num,mul){
    mul(num,(result1)=>{
        sub(result1,(result2)=>{
            add(result2,(final)=>{
                console.log(final)
            })
        })
    })
}
operate(10,mul)
