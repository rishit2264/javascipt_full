let btn1 = document.querySelector("#btn1");   
btn1.onclick = () => {     //here onclick is an event handler used to handle click once.
    a = 25;
    a++;
    console.log(a);
    console.log("button clicked 1 time!");
}

let div1 = document.querySelector("#div1");
div1.onmouseover = () => {
    console.log("mouse over div1");
}

//1. event which is inline ie written directly inside html file has less priority than one written in js file here.
// the js one will execute overwriting the inline one.
//2. the event handler written again here in js file will over write the original one.

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = (evt) => {    // evt is the event object.
    console.log(evt);  // gives the event object which has all the properties and methods related to the event.
    console.log(evt.type);    //gives the type of the event eg,click,dblclick,etc.
    console.log(evt.target);   //where the code is written in html file.
    console.log(evt.clientX,evt.clientY);   //position of the mouse pointer when the event is triggered.
}

btn2.addEventListener("dblclick", (evt) => {   //on should not be included in addEventListener,direct put event name.
    console.log("handler2 executed");
});

btn2.addEventListener("dblclick", (evt) => {   
    console.log("handler3 executed");
});

btn2.addEventListener("dblclick", (evt) => {   
    console.log("handler4 executed");
});

const handler5 = () => {
    console.log("handler5 executed");
};

btn2.addEventListener("dblclick",handler5);  // executes handler 5 also when btn2 pressed.

btn2.removeEventListener("dblclick",handler5);   //removes the handler5 event listener from btn2 and
// required a const handler 5 because of some const memory required to remove from otherwise no common way to remove.


    