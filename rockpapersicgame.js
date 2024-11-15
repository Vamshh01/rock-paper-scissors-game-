let userscore= 0;
let computerscore=0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userFinalScore = document.querySelector("#userscore");
let compFinalScore = document.querySelector("#computerscore");
let resetBtn = document.querySelector("#resetGame");

 resetBtn = ()=>{
    resetGame.addEventListener("click",()=>{
        userFinalScore.innerText = 0;
        compFinalScore.innerText = 0;
        
    })

}


const gencomputerChoice = ()=>{
    let options  = ["rock" , "paper" , "scissor" ];
   let indx =  Math.floor(Math.random()*3);
   return options[indx]; 
}
const drawGame = ()=>{
 console.log("the game is draw");
 msg.innerText="the game is draw ";
};
const showWinner =(userWin)=>{
    if (userWin){
     userscore++;
    userFinalScore.innerText = userscore;
    userFinalScore.innerText = userscore;
    console.log("you won" );
    msg.innerText= "you won 😎 !!"
}

else{
 computerscore++;
compFinalScore.innerText = computerscore;
    console.log("you lose");
    msg.innerText= "you lose 😔 "
}
}


const playgame = (userChoice) =>{
    console.log("users choice was : ",userChoice);
    const computerChoice = gencomputerChoice();
    console.log("the computer Choice is : ",computerChoice);
    
    if (userChoice===computerChoice){
        drawGame();
    }
    else{
        let userWin = true ;
        if( userChoice==="rock"){
        //computer choice options : scissor , paper ;
        userWin = computerChoice === "paper" ? false  : true ;
    }
     else if ( userChoice==="paper"){
        //computer will have options : rock, scissor ;
        userWin = computerChoice === "rock " ? true : false ;
     }
    else {
        // the user will have only the scissor left 
        // if the user take scissor then comp will have : rock or paper 
        userWin = computerChoice === "rock" ? false : true ;
    }
    
    showWinner(userWin);

    }

}

choices.forEach((choice) =>{
   
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});
resetBtn();