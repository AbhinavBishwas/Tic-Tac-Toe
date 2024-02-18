let buttons=document.querySelectorAll(".box");
// console.log(buttons);
//winner msg manga rhe 
let msg=document.querySelector("#msg");
let newBtn=document.querySelector("#newbtn");
let resetbutton=document.querySelector("#resetgame");
console.log(resetbutton);

let turnO=true;
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
console.log(winpatterns);
buttons.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO===true){
            box.innerText="O";
            turnO=false;
        }
        else{
            turnO=true;
            box.innerText="X";
        }
        box.disabled=true;
        checkWinner();
    })
});

const checkWinner=()=>{
    for( let pattern of winpatterns){
        let posi1=buttons[pattern[0]].innerText;
        let posi2=buttons[pattern[1]].innerText;
        let posi3=buttons[pattern[2]].innerText;
        if(posi1!="" && posi2!="" && posi3!=""){
            if(posi1==posi2 && posi2==posi3){
                console.log("winner",posi1);
                showWinner(posi1);
            }
        }
    }
}

const showWinner=(winner)=>{
    msg.innerText=`Congratulations the winner is ${winner}`;
    //yeh hum bnayenge taki jaise hi winnershow ho guya uske baad hum saare boxes disable krde 
    disableboxes();
}
//ye lo function vbna rhe hai boxes disable krneka 
const disableboxes=()=>{
    for(let box of buttons){
        box.disabled=true;
    }
}
// ab ek bnana padega enable boxes ka jisse ki hum saare boxes ko wapas wenavble lr ske and uske basd apan wapas se saare boxes ko reste kr payege taki dubara hel oayer
const enableboxes=()=>{
    for(let box of buttons){
        box.disabled=false;
        box.innerText="";
    }
}
// ab reset game ka function bnate 
const resetGame=()=>{
    turnO=true;
    enableboxes();
    msg.innerText="Lets start the new game";
}
newBtn.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);
let toggle=document.querySelector(".btn");
let currmode="light";// to hume dark me krna hai 
toggle.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundColor="#1F2544";
    }else{
        currmode="light";
        document.querySelector("body").style.backgroundColor="#836FFF";
        msg.innerText.style.color="black";
    }
    console.log(currmode);
})