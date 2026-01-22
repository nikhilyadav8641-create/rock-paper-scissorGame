let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");

let htmlUserScore=document.querySelector("#userScore");
let htmlCompScore=document.querySelector("#compScore");

let msg=document.querySelector("#msg");

// draw condition
let draw=()=>{
    console.log("Game was draw ");
    msg.innerText="Game was draw";
      msg.style.backgroundColor="#FFC9B9";
}

let genCompChoice=()=>{
    //rock,paper,scissor
    let option=["paper","rock","scissor"];
    let randomIdx=Math.floor(Math.random()*3);
    return option[randomIdx];
}
let showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
    {
        userScore++;
        htmlUserScore.innerText=userScore;
        //console.log("You Win 🏆");
        msg.innerText=`You Win 🏆 .Your ${userChoice} beats the ${compChoice}`;
        msg.style.backgroundColor="#D68C45";
    }
    else
    {
        compScore++;
        htmlCompScore.innerText=compScore;
        //console.log("You lose 🥺");
        msg.innerText=`You lose 🥺 . ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#FFC9B9";
    }
}
let playGame=(userChoice)=>{
    console.log("User's choice = ",userChoice);
    // to generate the computer's choices
    let compChoice=genCompChoice();
    console.log("computer choice = ",compChoice);
    if(userChoice===compChoice)
    {
         draw();
    }
    else
    {
        let userWin=true;
        if(userChoice==="rock")
        {
            //what are the computer choices =>paper or scissor
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            //what are the computer choices =>rock or scissor
            userWin=compChoice==="scissor"?false:true;
        }
        else
        {
            //what are the computer choices =>paper or rock
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});
