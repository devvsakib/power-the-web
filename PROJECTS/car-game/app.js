let score=document.querySelector('.score');
let startscreen=document.querySelector('.startscreen');
let gamearea=document.querySelector('.gamearea');
let speed=4;
let speed1=5;
let score1=0;
let carcolor=1;
let music =new Audio('music.mp3');
let crash=new Audio('crash.wav');
let move=new Audio('move1.mp3');
document.addEventListener('keydown',keydown);
document.addEventListener("keyup",keyup);
startscreen.addEventListener('click',start);
let keys={
    ArrowUp:false,ArrowDown:false,ArrowLeft:false,ArrowRight:false
};
let player={};
let strip={};
function start()
{ player.start=true;
    music.play();
    gamearea.classList.remove('hide');
    startscreen.classList.add('hide');
    score.classList.remove('hide');
    window.requestAnimationFrame(gameplay);
    let car= document.createElement('div');
car.setAttribute('class','car');
gamearea.appendChild(car);
player.x=car.offsetLeft;
player.y=car.offsetTop;
}

function gameplay()
{if(keys.ArrowUp && player.y>0)
    player.y-=5;
if(keys.ArrowDown && player.y<560)
    player.y+=5;
if(keys.ArrowLeft && player.x>0)
    player.x-=5;
if(keys.ArrowRight && player.x<351)
    player.x+=5;
    if(player.start)
    window.requestAnimationFrame(gameplay);
  let car=document.querySelector('.car');
car.style.top=player.y + "px";
car.style.left=player.x + "px";
movelines();
moveenemy(car);
score.innerHTML="score :"+ score1;
}
for(i=0;i<6;i++)
{
let roadstrip=document.createElement('div');
roadstrip.setAttribute('class',"roadstrip");
gamearea.appendChild(roadstrip);
roadstrip.style.top=(i*110) + "px";
roadstrip.y=(i*110);
}
 for(i=0;i<3;i++)
{ 
let enemy=document.createElement('div');
enemy.setAttribute('class',"enemy");
gamearea.appendChild(enemy);
enemy.style.top=(i*180) + "px";
enemy.y=(i*180);
enemy.x=Math.random()*330 + 25;
enemy.style.left=enemy.x + "px";
}

function movelines()
{
let lines=document.querySelectorAll(".roadstrip");
lines.forEach(function(item)  {
    if(item.y>600)
    item.y-=670;
   item.y+=speed1;
   speed1+=0.0002;
     item.style.top=item.y + "px";
});
}
function moveenemy(car)
{
let lines=document.querySelectorAll(".enemy");
lines.forEach(function(item)  {
    if(iscollide(car,item))
 {crash.play();
    music.pause();
  player.start=false;
  setTimeout(restart,2000);
}
    if(item.y>600)
    {score1++;
    item.y-=645;
    item.style.left=(Math.random()*330 + 25) + "px";
    // pass.play();
    }
     item.y+=speed;
   speed+=0.0002;
     item.style.top=item.y + "px";
});
}

function keydown(e){
keys[e.key]=true;
move.play();
}
function keyup(e){
keys[e.key]=false;
move.pause();
}
function iscollide(a,b)
{
// below code is to get all 4 position of car
    acar=a.getBoundingClientRect();
    bcar=b.getBoundingClientRect();
    return !((acar.top>=bcar.bottom)|| (acar.left>=bcar.right) || (acar.right<=bcar.left)||(acar.bottom<=bcar.top));
    return true;
}
function restart()
{
    document.location.href='';
    // above code is to refresh the code 
}