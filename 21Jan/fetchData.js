function fetchDataWithCallback(){
    let users = fetch("https://jsonplaceholder.typicode.com/users")
    console.log(users)
    users.then((rawData)=>{
        let data = rawData.json()
        data.then(d=>{
            console.log(d)
        })
    }).catch(error=>{
        console.log(error)
    })
}

fetchDataWithCallback()