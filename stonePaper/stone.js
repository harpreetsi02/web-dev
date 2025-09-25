const btn = document.getElementById("btn");
const choose = document.getElementById("choose");
const robot = document.getElementById("robot");
const para = document.getElementById("para");
let items = ["🗿", "📃", "✂️"];

btn.addEventListener("click", function(){
    let myChoice = choose.value;
    let randoms = items[Math.floor(Math.random() * items.length)];

    if(myChoice === "Stone" && randoms === "✂️"){ 
        robot.innerText = "✂️";
        para.innerText = "🎉 You Win!"; 
    }

    else if(myChoice === "Paper" && randoms === "🗿"){ 
        robot.innerText = "🗿";
        para.innerText = "🎉 You Win!";
    }

    else if(myChoice === "Scissors" && randoms === "📃"){
        robot.innerText = "📃";
        para.innerText = "🎉 You Win!";
    }

    else if(myChoice === "Stone" && randoms === "📃"){ 
        robot.innerText = "📃";
        para.innerText = "🤖 You Loose!"; 
    }

    else if(myChoice === "Paper" && randoms === "✂️"){
        robot.innerText = "✂️";
        para.innerText = "🤖 You Loose!";
    }

    else if(myChoice === "Scissors" && randoms === "🗿"){
        robot.innerText = "🗿";
        para.innerText = "🤖 You Loose!";
    }

    else if(myChoice === "Paper" && randoms === "📃"){
        robot.innerText = "📃";
        para.innerText = "Match Draw!";
    }

    else if(myChoice === "Scissors" && randoms === "✂️"){
        robot.innerText = "✂️";
        para.innerText = "Match Draw!";
    }
    
    else{
        robot.innerText = "🗿";
        para.innerText = "Match Draw!";
    }
});