console.log("rishit")
age = 24
console.log(age)


//arithmetic operators
let a = 3;
let b = 2;
let c= '3';   //string->number->compare
console.log("a+b = ",a+b)
console.log("a**b = ",a**b)
console.log("a == c",a==c)  //true , only checks the the value inside the dataset not the dataset
console.log("a  === b", a===b)  //false when 3 = used it gets strict and also checks the datatype
console.log("a !== b",a!==b)  //false

//CONDITIONAL OPERATORS
let color ;
let mode = "light"
if(mode === "dark"){
    color = "black";
}
else if(mode === "light"){
    color = "white";
}

console.log(color);

//ternary operator

console.log(mode === 'light' ? color = 'white' : color = 'black');

//alert("hello");    //one time pop up
//let name = prompt("gimme ur name");   //pop up + taking in value input
//console.log(name);
let number = prompt("give me num");
if(number % 5 === 0){
    console.log(number);
}
