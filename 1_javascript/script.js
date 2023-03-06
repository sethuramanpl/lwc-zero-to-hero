//var keyword can be updated and redeclared
let arr1 = "hello world sethu"
let charArr1 = [...arr1]
console.log(charArr1)

let A1 = ['amazon','facebook']
let A2 = ['isnta','msft']
let A3 = [...A1,...A2]
console.log([...A3[0]])

console.log(A3)
var arr = ["a", "b", "c",'d']
arr.push("3")
console.log(arr)

var obj = {
    "name" : "salesforce",
    "age" : 23,
    "full name" : "araja"
}
console.log(obj)
console.log(obj["full name"])
console.log(obj["age"])
obj.city = "richmond";

console.log(obj)