let shape = document.getElementById("shape");
let image = document.getElementById("image");
let buttonPlay = document.getElementById("buttonPlay");
let buttonFeed = document.getElementById("buttonFeed");
let container = document.getElementById("container");
let plife = document.getElementById("life");
let pfood = document.getElementById("food");
let pjoy = document.getElementById("joy");
let audio = new Audio("mariobruh.mp3"); 
let buttonStock = document.getElementById("buttonStock");

let life = 10;
let food = 0;
let joy = 5;


buttonPlay.addEventListener("click", function(e){
    if(life > 0 || food > 0 || food < 6 || joy > 0){
        plife.innerText = life;
        life = life - 2; 
        pjoy.innerText = joy;
        joy = joy + 1;
        pfood.innerText = food;
        food = food + 1;
    }
    if(life < 0 || food < 0 || food > 6 || joy < 0)
    {
        audio.play();
        alert("GAME OVER");
    }
});

buttonFeed.addEventListener("click", function(e){
    if(life > 0 || food > 0 || food < 6 || joy > 0){
        pfood.innerText = food;
        food = food - 1;
        pjoy.innerText = joy;
        joy = joy - 1;
        plife.innerText = life;
        life = life + 2;
    }

    if(life <= 0 || food <= 0 || food >= 6 || joy <= 0)
    {
        audio.play();
        alert("GAME OVER");  
    }
});

buttonStock.addEventListener("click", function(e){

    let buttonStock  = {
        plife : life,
        pjoy : joy,
        pfood : food,
      };

    let buttonStock_json = JSON.stringify(buttonStock);
      localStorage.setItem("buttonStock",buttonStock_json);

});