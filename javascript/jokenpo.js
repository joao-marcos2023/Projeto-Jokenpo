const elements = document.querySelectorAll('.box-container-player div > img');
let playerOptions = "";
let enemyOptions = "";


//Função para validar quem ganhou
function checkVictory(){

    let winner = document.querySelector('.victory')

    //Rock
    if(playerOptions == "rock"){

        if(enemyOptions == "rock"){

            winner.innerHTML = "Empate!"

        }else if(enemyOptions == "paper"){

            winner.innerHTML = "Você Perdeu!"

        }else if(enemyOptions == "scissor"){

            winner.innerHTML = "Você Ganhou!"
        }

    }

    //Paper
    if(playerOptions == "paper"){

        if(enemyOptions == "rock"){

            winner.innerHTML = "Você Ganhou!"

        }else if(enemyOptions == "paper"){

            winner.innerHTML = "Empate!"

        }else if(enemyOptions == "scissor"){
            
            winner.innerHTML = "Você Perdeu!"
        }

    }

    //Scissor
    if(playerOptions == "scisor"){

        if(enemyOptions == "rock"){

            winner.innerHTML = "Você Perdeu!"

        }else if(enemyOptions == "paper"){

            winner.innerHTML = "Você Ganhou!"

        }else if(enemyOptions == "scissor"){
            
            winner.innerHTML = "Empate!"
        }

    }

}

//Função para resetar seleção do enemy
function enemyReset(){
    const enemyChoise = document.querySelectorAll('.box-container-enemy div > img');

    for(let i = 0; i < enemyChoise.length; i++){

        enemyChoise[i].style.opacity = 0.3
    }
}

//Função de jogo do inimigo
function enemyGame(){
    let rand = Math.floor(Math.random()*3);

    const enemyChoise = document.querySelectorAll('.box-container-enemy div > img');

    enemyReset()

    for(let i = 0; i < enemyChoise.length; i++){
        if(i == rand){
            enemyChoise[i].style.opacity = 1
            enemyOptions = enemyChoise[i].getAttribute("opt")
        }
    }

    checkVictory()
}

//Função para resetar opacidade
function resetOpacityPlayer(){
    for(let i = 0; i < elements.length; i++){
        elements[i].style.opacity = 0.3;
    }
}

//Função de evento click
for(let i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", (t)=>{
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOptions = t.target.getAttribute("opt");

        enemyGame();

    });
}
