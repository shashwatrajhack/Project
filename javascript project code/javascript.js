var playing = false;
var score;
var action;
var timeremaining;



//if we click on the start/reset button
document.getElementById("startreset").onclick = 
function(){
	if(playing == true){
		location.reload();
	}else{
		playing = true; 
		score=0;

document.getElementById("scorevalue").innerHTML =
score;
                show("timeremaining");
               timeremaining = 60;

document.getElementById("timeremainingvalue").innerHTML
 = timeremaining;      

document.getElementById("startreset").innerHTML = 
"Reset Game";

         startCountdown();
	}
}
//if we are playing
//if we are not playing
//set score to 0
//show countdown box
//reduce time by 1 sec in loops
//timeleft?
//yes->continue
//no->gameover
//change button to reset
//generate new question
//if we click to answer box
//if we are playing
//correct?
//yes
//increase score
//show correct box for 1 sec
//generate new question
//no
//show try again box for 1sec

function startCountdown(){
	action = setInterval(function(){
		timeremaining -= 1;

		document.getElementById("timeremainingvalue").
		innerHTML = timeremaining;

		if(timeremaining == 0){
			stopCountdown();

			show(gameOver);

document.getElementById("gameOver").innerHTML = 
"<p>Game Over !</p><p>Your score is " + score + ".</p>";

     hide("timeremaining");
     hide("correct");
     hide("wrong");
     playing = false;

					}
	}, 1000);
}

function stopCountdown(){
	clearInterval(action);
}

function hide(Id){
	document.getElementById(Id).style.display 
	= "none";
}

function show(Id){
	document.getElementById(Id).style.display 
	= "block";
}