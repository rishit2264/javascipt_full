let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");

let turn0 = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(turn0){
        box.innerText = "O";
        turn0 = false;
    }
        else{
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for(pattern of winPatterns){
        console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,    //getting the value at the patter[0] index in boxes array
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        const val0 = boxes[pattern[0]].innerText;
        const val1 = boxes[pattern[1]].innerText;
        const val2 = boxes[pattern[2]].innerText;
        if(val0 != 0){
            if(val0 === val1 && val0 === val2){
            console.log("you won the game!")
            }
        }

    }
}
