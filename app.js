//selection
let msg_container=document.querySelector(".msg_container")
let msg =document.querySelector(".msg")
let btn=document.querySelector(".btn")
let Draw_game=document.querySelector(".Draw_game")
let container=document.querySelector(".container")
let game=document.querySelector(".game")
let bottons=document.querySelectorAll(".bottons")
let btn_1=document.querySelector(".btn_1")
let trueO=true

//2D array
const winnerPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//Method
bottons.forEach((button)=> {
    button.addEventListener("click",()=>{
        console.log("when button was clicked");
        if(trueO===true){
            button.innerText="X";
            button.style.color="red";
            trueO=false
        }else{
            trueO=true
            button.innerText="O"
            button.style.color="green"
        }
button.disabled=true
cheakWinner()
})
});

//function-1
 const cheakWinner=()=>{
for(let pattern of  winnerPattern){
    let posval1=bottons[pattern[0]].innerText
    let posval2=bottons[pattern[1]].innerText
    let posval3=bottons[pattern[2]].innerText
    if(posval1!== ""&& posval2!=="" && posval3!==""){
        if(posval1===posval2 && posval2===posval3){
            console.log("Winer",posval1);
            showWinner(posval1)
            return
        }
    }
}
cheakDraw()
}
//function-2
const cheakDraw=()=>{
let allFailer=true
bottons.forEach((button)=>{
    if(button.innerText===""){
        allFailer=false
    }
})
if(allFailer){
    showDrowmassage()
}
}
//function-3
const disabled=()=>{
    for(let button of bottons){
        button.disabled=true
    }
}
//function-4
const showWinner=(Winner)=>{
    msg.innerText=`Congratulation the winner is ${Winner}`
    msg_container.classList.remove("hide")
    btn_1.classList.add("hide")
    disabled()
}
const showDrowmassage=()=>{
    Draw_game.innerText="The Game is Draw"
    msg_container.classList.add("hide")
}
//function-5
enabled=()=>{
    trueO=true
    for(button of bottons){
        button.disabled=false
        button.innerText=""
        Draw_game.innerText=""
    }
}
//function-6
const reSet=()=>{
    trueO=true
    enabled()
}
//function-7
const newGame=()=>{
    trueO=true
    enabled()
    msg_container.classList.add("hide")
    btn_1.classList.remove("hide")
}
btn_1.addEventListener("click",reSet)
btn.addEventListener("click", newGame)
