let marks = [12,123,34,45,56,45];
console.log(marks);
console.log(marks.length);  //prints length of array

//for loop
let super_heros = ["superman","hulkure","krish"];
for(let idx = 0;idx<super_heros.length;idx++){
    console.log(super_heros[idx]);
}

//methods
super_heros.push("nigura");
console.log(super_heros);

super_heros.pop();
console.log(super_heros);

let marvel = ["cap","ironman"];
let dc = ["superman","batman"];
let heros = marvel.concat(dc);
console.log(heros);

marvel.unshift("hulkure");   //unshift adds in the beginning 
console.log(marvel);

let val = dc.shift();   //removes from front 
console.log(val);

console.log(heros.slice(1,3))   //gives the elements bww them excluding the right most

console.log(marks);
marks.splice(2,2,101,102);   //makes edit in the array itself(start,no of elements to remove(choice if not given deletes everything afterwards),new elements(choice));
console.log(marks);
