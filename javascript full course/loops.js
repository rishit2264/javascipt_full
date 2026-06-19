for(let i = 1;i<=5;i++){
    console.log("rishit");
}

let j = 2;
while(j<=5){
    console.log("rishitwhile");
    j++;
}

let k = 0;
do{
    console.log("rishitdowhile");
    k++;
}while(k<=5);


//for of loop
let str = "rishit";
let size = 0;
for(let i of str){
    console.log("i=",i);
    size++;
}
console.log(size);

let person = {
    name : "rishit",
    age  : 21,
    roll_no : 177,
}
//for in loop
for(let key in person){
    console.log("key = ",key,"value = ",person[key]);
}

//Template literals 
let output = `${person.name} is of age ${person.age}`;   //inserting placeholders is called string interpolation
console.log(output);

//string methods
let str1 = "rishit";
let str2 = str1.toUpperCase();  //doesent change the original string 
console.log(str2);

let str3 = "     rishit   vats   ";
console.log(str3.trim());

let str4 = str1.concat(str2);
console.log(str4);

console.log(str2.slice(1,3))

let str5 = "hello";
console.log(str5.replace("ell","ii"));

//strings are immutable ie unchangable in javascript