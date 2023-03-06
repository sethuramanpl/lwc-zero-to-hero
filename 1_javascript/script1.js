
document.addEventListener("hello",function(data){
    console.log(`the event has called`, data.detail)
    console.log(typeof data.detail)
})

function onClickEvent(){
    let event = new CustomEvent("hello",{
        detail : {
            name : "sethu"
        }
    })
    document.dispatchEvent(event)
}

let abc =  () =>  'hello'
console.log(abc())

let array123 = [1,2,3,4,5]
console.log(array123.map(x=>x*2))

let timerId = window.setTimeout(()=>console.log('inside timer'),0000000002)
console.log(timerId)
//window.clearTimeout(timerId)

let intervalId = window.setInterval(()=>console.log('inside interval'),0000000000002)
console.log(intervalId)
window.clearInterval(intervalId)


let obj1 = {
    name:'sethu',
    age:88,
    address: 'usa',
    cars : ['merc','bmw'],
    getname : function getname(){
        console.log(obj1.address)
    }
}

 let {name, age, address, cars, getname} = obj1

console.log(age)
console.log(cars)
console.log(getname())

console.log(Object.keys(obj1))
console.log(Object.values(obj1))

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


// function fetch1(data){
//     return new Promise (function(resolve, reject){
//         if(data==1){

//             window.setTimeout(function(){
//                 console.log('insdie timeout')
//                 return resolve('success')
//             },1000)

//         }else{
//             window.setTimeout(function(){

//             },2000)
//             return reject('failure')
//         }

//     })
// }

// fetch1(1).then(function(result){
//     console.log(result)
// }).catch(function(result){
//     console.log(result)
// })




// document.addEventListener("mouseover",handler)
// function handler(){
//     document.querySelector('.demo').innerHTML=Math.random()
// }

// function removeHandler(){
//     console.log('i am here')
//     document.removeEventListener("mousemove",handler)
// }

// function firstfunction(){
//     console.log('hurray')
// }

// let btn = document.querySelector('button')
// console.log(btn)
// btn.addEventListener('click',firstfunction)

// let element = document.querySelector('div')
// console.log(element)
// console.log(element.innerHTML)
// console.log(element.innerText)
// element.style.color = 'blue'

// let elementAll = document.querySelectorAll('.abc')
// console.log(elementAll)

// Array.from(elementAll).forEach(function(item){
//     item.style.color='red'
// })

// Array.from(elementAll).map(function(item,index,array){
//     console.log(item + index + array)
//     return item.style.color='brown'
// })

