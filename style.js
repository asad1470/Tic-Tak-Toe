let box = document.querySelectorAll(".box");
let reset_btn = document.querySelector("#reset"); 
let newGame=document.querySelector("#msg-btn")
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let gameTurn=new Audio("click.mp3");
let gameWin=new Audio("win.mp3");
let turnO = true;

const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

  const resetGame = () => {
    turnO = true;
    enableBox(); 
    msgContainer.classList.add("hide");
};
box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O"  ;
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
    gameTurn.play();
    
  });
  
});
const disableboxes=()=>{
  for(  boxItem of box){
  box.disabled=true;
  }
};
const enableBox = () => {
  for (let boxItem of box) { 
      boxItem.disabled = false;
      boxItem.innerText = "";
      gameWin.pause();
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations,The Winner is Player ${winner}`;
  msgContainer.classList.remove("hide");
  gameWin.play();
  disableboxes(); 
  box.forEach((boxItem) => {
    boxItem.disabled = true;
  });
};



const checkWinner = () => {
  for (let pattern of win) {
    let pos1value = box[pattern[0]].innerText;
    let pos2value = box[pattern[1]].innerText;
    let pos3value = box[pattern[2]].innerText;
    if (pos1value !== "" && pos2value !== "" && pos3value !== "") { 
      if (pos1value === pos2value && pos2value === pos3value) {
        showWinner(pos1value);
      }
    }
  }
};
reset_btn.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);


  

