console.log("hello");
window.alert("hello");  // window is a global object in javascript which is the parent of all the objects in javascript and it has many methods like alert, prompt, 
// confirm etc. and also has properties like innerHeight, innerWidth, outerHeight, outerWidth etc. which gives the height and width of the window.
//our web page alerady knows what is window and so we dont need to specify this for every operation.

//we can access the html code in js code , when it comes inside js it comes as a Document object.
console.dir(document);  // this will give all the properties and methods of the document object in the console inside the webpage.
//Document object is by default inside the window object inside console.
//see the image

console.dir(document.body); // gives properties of body
console.log(document.body);  //prints the body.

document.body.childNodes[3].innerText = "abcd";   // here we are accessing the 3rd child ie h4 child node of body using document in js.