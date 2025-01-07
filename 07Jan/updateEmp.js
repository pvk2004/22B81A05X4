function updateEmployeeDetails(emp,role){
    ne = {
        ...emp,
        role:role
    }
    return ne
}

let e = {
    name : "vamshi",
    role : "developer",
    age : 20,
    loc : "IN"
}
console.log(e)
console.log(updateEmployeeDetails(e,"tester"))