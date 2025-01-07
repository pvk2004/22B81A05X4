// const colors = ['red', 'green', 'blue', 'yellow']

// let [first,second] = colors
// console.log(first, second)

// let [ ,sec, , fourth] =  colors
// console.log(sec, fourth)

// const numbers = [1, 2, 3, 4, 5]

// let [last] = numbers.reverse()
// console.log(last)


// const matrix = [[1, 2], [3, 4], [5, 6]]

// const  [,[a],[b]]= matrix
// console.log(a,b)

// swap
// let m = 10
// let n = 20
// console.log(`M : ${m} ,N : ${n}`)
// let ar = [m,n]
// console.log(ar);
// [n,m] = ar;
// console.log(`M : ${m} ,N : ${n}`)

// 13
const data = [{name: 'John', age: 30 }, { name: 'Jane', age: 25 }];

let [{name,age}] = data
console.log(name, age)

// 14
const nums = [10, 20, 30, 40, 50]
console.log(nums);
[nums[0],nums[2]] = [nums[2],nums[0]];
[nums[1],nums[3]] = [nums[3],nums[1]];
console.log(nums)
