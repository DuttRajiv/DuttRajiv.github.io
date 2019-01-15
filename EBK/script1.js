<script>
timer = null;
jumptimer = null;
stepNumber = 0;
direction = 'r'
commingDown = false;


function move() {
    alien = document.getElementById('alien');
    box = document.getElementById('alien');
    box.style.right = parseInt(box.style.right) + 300 + "px";

    if (stepNumber > 30) {
        stepNumber = 0;
    }

    if (parseInt(alien.style.left) < 0) {
        direction = 'r';
    }

    if (parseInt(alien.style.left) > (parseInt($(window).width()) - parseInt(alien.width))) {
        direction = 'l';
    }

    alien.src = "./images/alien/alien" + direction + "walk" + stepNumber + ".gif";

    if (direction == 'r') {
        alien.style.left = parseInt(alien.style.left) + 5 + "px";

        alien.src = "./images/alien/alien" + direction + "walk" + stepNumber + ".gif";

    } else if (direction = 'l') {
        alien.style.left = parseInt(alien.style.left) - 5 + "px";

        alien.src = "./images/alien/alien" + direction + "walk" + stepNumber + ".gif";
    }
    stepNumber++
}

function jump() {
    if (!commingDown) {
        alien.style.left = parseInt(alien.style.left) + 5 + "px";
        alien.style.bottom = parseInt(alien.style.bottom) + 5 + "px";
    } else {

        alien.style.left = parseInt(alien.style.left) + 5 + "px";
        alien.style.bottom = parseInt(alien.style.bottom) - 5 + "px";
    }
    if (parseInt(alien.style.bottom) > 150) {
        commingDown = true;
    }

    if (parseInt(alien.style.bottom) == 50 && commingDown) {
        jumptimer = clearInterval(jumptimer);
        timer = setInterval(move, 50);

    }
   

}

function leftjump() {
    if (!commingDown) {
        alien.style.left = parseInt(alien.style.left) - 5 + "px";
        alien.style.bottom = parseInt(alien.style.bottom) + 5 + "px";
    } else {

        alien.style.left = parseInt(alien.style.left) - 5 + "px";
        alien.style.bottom = parseInt(alien.style.bottom) - 5 + "px";
    }
    if (parseInt(alien.style.bottom) > 150) {
        commingDown = true;
    }

    if (parseInt(alien.style.bottom) == 50 && commingDown) {
        jumptimer = clearInterval(jumptimer);
        timer = setInterval(move, 50);

    }
}

function startJump() {
    timer = clearInterval(timer);
   
    if (direction == 'r') {
        if (jumptimer == null) {
        commingDown = false;
        jumptimer = setInterval(jump, 50);
    }

    } else if (direction == 'l')
    {
        if (jumptimer == null) {
        commingDown = false;
        jumptimer = setInterval(leftjump, 50);
    }
   
    }
    


}

onload = function () {

    if (timer == null) {
        timer = setInterval(move, 50);
    }
}

alien.onclick=function(){

     if(parseInt(alien.style.right) == 500 && commingDown)
    alien.src = '../Lab 4/images/alien/bomb.jpg';
    else
    {
        alien.src = '../Lab 4/images/alien/bomb.jpeg';
        timer=null;
        clearInterval(timer);}
clearInterval(timer);
timer = null;
      
document.alien.onclick = null;
alien.style.src = "../Lab 4/images/alien/bomb.jpg"
}
</script>