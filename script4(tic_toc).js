let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");


//1D Array
//let arr=["apple","latchi","banana"];
//2D Array
//let arr2=[["apple","latchi"], ["potato","onion"],["pants","shirts"]];


let turno=true;  //player x, player o

const winpatterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];

const resetGame = () =>{
  turno=true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
   console.log("box was clicked");
   if (turno){  //PLAYER O
    box.innerText="O";
    turno=false;
   }else{   //PLAYER X
    box.innerText="X";
    turno =true;
   }
   box.disabled=true;


   checkwinner();
  });
});

/*const checkwinner=()=>{
  for(let pattern of winpatterns){
    console.log(pattern[0], pattern[1], pattern[2]);
    console.log(
      boxes[pattern[0]].innerText,
      boxes[ pattern[1]].innerText,
       boxes[pattern[2]].innerText
      );
    }
  }; */

  
    const disabledBoxes =() =>{
    for(let box of boxes) {
      box.disabled=true;
  }
};

const enableBoxes =() =>{
  for(let box of boxes) {
    box.disabled=false;
    box.innerText="";
}
};

  const showwinner=(winner) =>{
    msg.innerText= `congratulations,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
  };

      const checkwinner=()=>{
        for(let pattern of winpatterns){
      let pos1val=boxes[pattern[0]].innerText;
      let pos2val=boxes[pattern[1]].innerText;
      let pos3val=boxes[pattern[2]].innerText;

      if (pos1val !=""&& pos2val !=""&& pos3val !=""){
        if (pos1val===pos2val && pos2val===pos3val){
          console.log("winner", pos1val);
          showwinner(pos1val);
        }
      }
  }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


