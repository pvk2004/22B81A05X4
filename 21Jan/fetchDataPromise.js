function fetchData(url){
    return new Promise((resolve,reject)=>{
        if(url.includes("error")){
            reject("Error")
            
        }
        else{
            resolve("Data Fetched Successfully");
        }
        
    })
}

let url="hiierror"
fetchData(url)
.then(res => console.log(res))
.catch(e => console.log(e))