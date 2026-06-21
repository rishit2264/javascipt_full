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


//selecting elements using id in html.
let heading = document.getElementById("heading");  //gives us the element with id = heading.
console.log(heading);  //prints the element with id = heading.

//selecting elements using class in html.(it is similar to array and we can access the elements using index.)
let headingClass = document.getElementsByClassName("heading-class");
console.log(headingClass);  //prints the elements with class = heading-class.

//selecting elements using tag name in html.(it is similar to array and we can access the elements using index.)
let headingTag = document.getElementsByTagName("h4");
console.log(headingTag);  //prints the elements with tag name = h4. 

//selecting elements using querySelector in html.(it takes in input and decides on itself  whether it is id, class or tag name) - returns Node List
let firstEl = document.querySelector("p");  //1st element
console.log(firstEl);  

let allEl = document.querySelectorAll("p");  //all elements
console.log(allEl); 

// for argument in querySelector , id is mentioned with # and class is mentioned with . and tag name is mentioned as it is. 

console.log(document.querySelector("body").firstChild);  // gives the first child of the body node. appears as #text because of white space bw nodes

let body = document.querySelector("body");

body.innerText; // gives all the inner  text inside body
body.innerHTML; // gives all the inner html inside body

console.log(firstEl.getAttribute("class"));  // gives the class of the para element

console.log(firstEl.setAttribute("class", "newclass"));  // sets the id of the body element


let newBtn = document.createElement("Button");   // creates a new element button element in html using js.
newBtn.innerText = "Click me";

let div = document.querySelector("div");   // adds the element newbutton inside the div element in html.
div.appendChild(newBtn);

let para = document.querySelector("p");  
para.remove();  //removes the para element from html.           