let boxes = document.querySelector(`.boxes`);
let button = document.querySelector(`button`);
// let content = document.querySelector(`.content`);
let result = document.querySelector(`.result`);
let cancel = document.querySelector(`.result .fa-times`);
let circle = document.querySelector(`.box .fa-circle`);
let cross = document.querySelector(`.box .fa-times`);
let count = 0;
let ttt = [3];
for(let i=0;i<3;i++){
    ttt[i]=[];
}




function addIcon(e){
    if(e.target.classList.contains(`box`) && (e.target.innerHTML === "") && (result.classList.contains(`hide`))){
        count++;

        let num = e.target.id;
        let i=Math.floor(num/3);
        let j=(num%3);
        
        if(count%2 === 0)
        {
            e.target.innerHTML = `<i class="far fa-circle fa-5x"></i>`;
            ttt[i][j]=`2`;
            checkWin(`2`);

        }
        else
        {
            e.target.innerHTML = `<i class="fas fa-times fa-5x"></i>`;
            ttt[i][j]=`1`;
            checkWin(`1`);
        }
    }
}

function checkWin(player){
    if(ttt[0][0] == player && ttt[1][1] == player && ttt[2][2] == player)
    {
        markRed(0,0,1,1,2,2);
        score(player);
    }
    else if(ttt[0][2] == player && ttt[1][1] == player && ttt[2][0] == player)
    {
        markRed(0,2,1,1,2,0);
        score(player);
    }
    else if(ttt[0][0] == player && ttt[0][1] == player && ttt[0][2] == player)
    {
        markRed(0,0,0,1,0,2);
        score(player);
    }
    else if(ttt[1][0] == player && ttt[1][1] == player && ttt[1][2] == player)
    {
        markRed(1,0,1,1,1,2);
        score(player);
    }
    else if(ttt[2][0] == player && ttt[2][1] == player && ttt[2][2] == player)
    {
        markRed(2,0,2,1,2,2);
        score(player);
    }
    else if(ttt[0][0] == player && ttt[1][0] == player && ttt[2][0] == player)
    {
        markRed(0,0,1,0,2,0);
        score(player);
    }
    else if(ttt[0][1] == player && ttt[1][1] == player && ttt[2][1] == player)
    {
        markRed(0,1,1,1,2,1)
        score(player);
    }
    else if(ttt[0][2] == player && ttt[1][2] == player && ttt[2][2] == player)
    {
        markRed(0,2,1,2,2,2);
        score(player);
    }
    else if(count === 9)
    score(`No one`);
}



function reset(e){
    removeRed();
    count = 0;
    for(let i=0;i<3;i++)
        {
            for(j=0;j<3;j++)
            {
                ttt[i][j] = '';
            }
        }
    let clear = document.querySelectorAll(`.box`);
    clear.forEach((item)=>{
        item.innerHTML = ``;
    })
    if(result.classList.contains(`hide`) === false)
    result.classList.add(`hide`);
}



function score(X){
    result.innerHTML = `<p>Player ${X} won the round.</p>`;
    if(result.classList.contains(`hide`))
    result.classList.remove(`hide`);
}

function removeScore(e){
    if(e.target.classList.contains(`fa-times`))
    e.target.parentElement.parentElement.classList.add(`hide`);
}


function markRed(a,b,x,y,m,n){
    document.getElementById(`${3*a+b}`).style.color = `red`;
    document.getElementById(`${3*x+y}`).style.color = `red`;
    document.getElementById(`${3*m+n}`).style.color = `red`;
}

function removeRed(){
    for(let i=0;i<9;i++)
    {
        document.getElementById(`${i}`).style.color = `white`;
    }
}



boxes.addEventListener(`click`,addIcon);
button.addEventListener(`click`,reset);
result.addEventListener(`click`,removeScore);