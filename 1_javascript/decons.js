//array declustering

console.log('decons')
let phone = ['iphone','samsung','android','oneplus']
console.log(phone[0])

let [iphone,samsung,android,oneplus] = phone;
console.log(oneplus)


//object declustering
let options = {
    title : "honda",
    age : [23,34,56],
    vin : '2323rrff',
    styles : {style1: 'sedan',style2:'crossover'}
}

console.log(options.vin)

let {title,age,vin,styles} = options;


console.log(title,age,vin,styles)

let name1 = "sethu raja"
let age1 = 38
console.log(`sethu\`s full 'name' is "${name1} " and his age is "` + age1)

let string1 = `hello world`
console.log(typeof string1)
console.log(string1.includes('llo'))
console.log(string1.indexOf('hello'))

let obj123 = {
    name:"sethu",
    age:23
}
console.log(Object.keys(obj123))
console.log(Object.keys(obj123))

let strObj = JSON.stringify(obj123)
console.log(strObj)
console.log(typeof strObj)

console.log(JSON.parse(strObj))
console.log(typeof JSON.parse(strObj) )

let array1 = [1,2,3,4,5,6,7,8,9,10]
//array1.metod(function(currentitem, index , array){

//})
//map();
let newarray1 = array1.map(function(currentitem,index,array){
    console.log(`current items is ${currentitem} index is ${index} and array is ${array}`)
    return currentitem * 3;
})
console.log(array1)
console.log(newarray1)

//filter()
let arrayGreterThanFive = array1.filter(function(currentitem,index,array){
    return currentitem > 5
})

console.log(arrayGreterThanFive)

let mapfilterArray = array1.map(function(currentitem,index,array){
   // console.log(`current items is ${currentitem} index is ${index} and array is ${array}`)
    return currentitem * 3;
}).filter((currentitem)=> currentitem < 20);
console.log(mapfilterArray)

let filterAndMap = array1.filter(function(currentitem,index,array){
    return currentitem > 5
}).map((currentitem)=> currentitem * 100)
console.log(filterAndMap)

//array every
let everyArray = [1,2,3,4,5,6,7,8]
let everyArray1 = everyArray.every(function(currentitem){
   // return currentitem > 6 //return false since not all items are > 6
    return currentitem >= 0 //return true since all items are either >1 or =1
})
console.log(everyArray1)
//arrray some
//array every
let someArray = [1,2,3,4,5,6,7,8]
let someArray1 = everyArray.some(function(currentitem){
   // return currentitem > 6 //return false since not all items are > 6
    return currentitem > 6 //return true if some of the items are either > 6
})
console.log(someArray1)

//sorting
let namesArray = ['sethu','raman','arjun']
console.log(namesArray.sort())
let numArray = [50,40,10]
console.log(numArray.sort())
let sortedArray = numArray.sort(function(a,b){
    console.log(a,b)
    return a-b

})
console.log(sortedArray)

let reducedArray = [3,4,5,6,7,8,1000]
console.log(reducedArray.reduce(function(total,currentitem,index,array){
    return currentitem + total
},1000))