var name = "ta";
var age = 22;
let obj = {
    name : "taj",
    age : 25,
    sums : (name, age) => this.name + this.age
}

console.log(obj.sums());