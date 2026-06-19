function myfunction(a,b){
    //console.log(a+b);
    p = a*b;
    return p;
}

val = myfunction(2,3);
console.log(val);   



// IN javascript functions are first class citizens ie we can pass functions as arguments to other functions and also return functions from other functions
function myfunction2(myfunction){
    return myfunction(2,3);
}


//arrow functions which tell us the definition of the function in a single line , but if argument passed it will execute and just give return value
const arrowsum = (a,b) =>{
    console.log(a+b);
}


//For each function , executes for all the elements of the array, and it is a higher order function.
arr = [1,2,3,4,5];
arr.forEach((value)=>{  
    console.log(value);
});

//Higher order functions are functions which take other functions as arguments or return functions as output.

//now we will see map function:(different from forEach because it can return new array)
let arr1 = arr.map((value)=>{
    return value;
});
console.log(arr1);

//filter function: it returns a new array with the elements which sgive true for a condition
let arr2 = arr.filter((value)=>{
    return value%2==0;
});
console.log(arr2);

//now we will see reduce function: it takes a function as an argument and reduces the array to a single value ie eg sum or avg etc.
let output = arr.reduce((result,currentval)=>{
    return result+currentval;
});
console.log(output);
