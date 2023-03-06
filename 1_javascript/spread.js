console.log('different script')
var aarr = ["a","b","c"]
aarr.push(20)
console.log('arr = ' + aarr)
//it passes the reference
var aarr4 = aarr
console.log('aarr4 = ' + typeof aarr4)
aarr4.push("sethu")
console.log('arr = ' + aarr)
console.log('arr1 = ' +  aarr4)

//use spread to do shallow copy
let sethu=['a','b']
let sasi = [...sethu]
console.log(sethu)
console.log(sasi)
sasi.push(20)
console.log(sethu)
console.log(sasi)

//spread wont work in 2  level data struture in object
let obj1 =
    [
        {name : "sethu"},
        {name : 'sasi'}
    ] //array of objects
let obj2 = [...obj1]
obj2[0].name = 'georgie'
console.log(obj)
console.log(obj1)

let obj3 = JSON.parse(JSON.stringify(obj1))
obj3[0].name = 'tv'
console.log(typeof obj3)
console.log( obj3)


