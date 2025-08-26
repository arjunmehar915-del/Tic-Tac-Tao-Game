let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;// player X and player O


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
       if(turnO){   //player o
        box.innerText="O";
        turnO=false;
       }else{ // palyer x
        box.innerText="X";
        turnO=true;
       }
       box.disabled =true;

       checkWinner();
    })
});

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
}


const showWinner =(winner) => {
    msg.innerText = `Congratulations the winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkWinner = () => {
    for(let patern of winPatterns){
        let posi1Val=boxes[patern[0]].innerText;
        let posi2Val= boxes[patern[1]].innerText;
        let posi3Val= boxes[patern[2]].innerText;

        if(posi1Val != "" && posi2Val != "" && posi3Val != ""){
            if(posi1Val === posi2Val && posi2Val === posi3Val){
                showWinner(posi1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);