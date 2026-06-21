//here we are trying to make a toggle button for dark and light switch.



//first we are doing it with direct accessing body and changing the bg color
let togglebtn = document.querySelector("#btn1");
let mode = "light";

// togglebtn.addEventListener("click" , () => {
//     if(mode === "light"){
//         mode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";     //direct access to body and changing bg color.
//     }
//     else{
//         mode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }
// });




//  now we are toggling using the classes made in darklight css file.
togglebtn.addEventListener("click" , () => {
    if(mode === "light"){
        mode = "dark";
        console.log(mode);
        document.querySelector("body").classList.add("dark");   //added the dark class and made bg black and text white etc.
        document.querySelector("body").classList.remove("light");  //at same time removed light class and its functions.
    }
    else{
        mode = "light";
        console.log(mode);
        document.querySelector("body").classList.add("light");
        document.querySelector("body").classList.remove("dark");
    }
});

