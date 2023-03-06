// function checkForPromise(data){

//     return new Promise(function(resolve,reject){
//         if(data === 'success'){
//             return resolve('success')
//         }else{
//             return reject('failure')
//         }
//     })
// }

// console.log(checkForPromise('success'))

// checkForPromise('success').then(function(result){
//     console.log(`the result is ${result}`)
// }).catch(function (error){
//     console.log(`the error is ${error}`)
// })
import * as UTIL from "./utils.js"
//import default1 ,{ PI, add } from "./utils.js"
fetch('https://api.github.com/users/sethuramanpl').then(function(result){
    console.log(result)
   return result.json()
}).then(function(response){
    console.log(response)
})

console.log(UTIL.add(4,4))
console.log(UTIL.default1())