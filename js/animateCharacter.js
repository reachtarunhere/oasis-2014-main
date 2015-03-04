var prev_scroll = 0;
var curr_scroll = 0;

var runCaller;				//Handles setInterval to move character on continuous scrolling
var isRunning = false;			//Handles whether or not animation of character is in progress
var runningTime = 600;	//Time for character animation in ms

var swimDownCaller;
var scrollStopCheckDuration = 200;
var swimUpTime = 1300;
var swimDownTime = 1200;
var swimming = false;
var swimFramChangeTime = 1000;
var swimMotionIntervalSet;

var isJumping = false;
var halfJumpTime = 300;
var jumpHeightFromBottom = 200;
//======================SCROLL EVENT CALLING ANIMATING FUNCTIONS=====================//
$(window).scroll(scrollevent);

function scrollevent() {
	if(deviceName != 'computer')
		curr_scroll = touchPageX;
	else
		curr_scroll = $(window).scrollTop();
	var scrolldiff = deviceName != 'computer' ? -(curr_scroll - prev_scroll) : -(prev_scroll - curr_scroll);
	if(scrolldiff === 0)
	{	
		if(jumpDown === false)	clearInterval(runCaller);
		else if(jumpDown === true) swimDownCaller = setTimeout(function(){swimDown();},scrollStopCheckDuration);
		return;
	}

	//Animate Character
	if(scrolldiff > 0)
	{	setBackgroundPositionY("0px","#main_character");
	}
	if(scrolldiff < 0)
	{	setBackgroundPositionY("-200px","#main_character");
	}

	if(isRunning === false && jumpDown === false && onShip === false)
	{	animate_main_character();
		runCaller = setInterval(function(){animate_main_character();},runningTime);
	}
	
	if(jumpDown === true)
	{	//console.log("Interval cleared");
		clearInterval(swimDownCaller);
		if(swimming === false)
			swimUp();
	}
	prev_scroll = curr_scroll;
	scrollevent();
}

//=============================POSITIONING CHARACTER================================//
function position_character()
{	$("#main_character").css("bottom",groundOffset - 8);//Height of player is 175
	$("#main_character").css("left",0.5*window.innerWidth -100);//Width of player is 100
}

//=============================ANIMATING CHARACTER==================================//
function animate_main_character()
{	if(jumpDown === false)//Run main character
	{	isRunning = true;
		setTimeout(function(){setBackgroundPositionX("-200px","#main_character");},0);
		setTimeout(function(){setBackgroundPositionX("-400px","#main_character");},runningTime/1.6);
		setTimeout(function(){setBackgroundPositionX("0px","#main_character");},runningTime);
		setTimeout(function(){isRunning = false;},runningTime);
	}	
}

function swimUp()
{	
	$("#main_character").stop();
	$("#main_character").animate({bottom:"300px"},swimUpTime);
	swimFrameChange();
	swimMotionIntervalSet = setInterval(function(){swimFrameChange();},swimFramChangeTime);
	swimming = true;
}

function swimFrameChange()
{	setTimeout(function(){setBackgroundPositionX("-600px","#main_character");},swimFramChangeTime/4);
	setTimeout(function(){setBackgroundPositionX("-800px","#main_character");},2*swimFramChangeTime/4);
	setTimeout(function(){setBackgroundPositionX("-1000px","#main_character");},3*swimFramChangeTime/4);
	
}

function swimDown()
{	$("#main_character").stop();
	$("#main_character").animate({bottom:groundOffset - 8},swimDownTime,function(){resetCharacter();});
	clearInterval(swimMotionIntervalSet);
	swimming = false;
}

function resetCharacter()
{	setBackgroundPositionX("0px","#main_character");
}

function setBackgroundPositionX(pos,selector)
{
	var backPos = $(selector).css('backgroundPosition').split(" ");
	var backPosY = backPos[1];
	$(selector).css("background-position",pos+" "+backPosY);
}

function setBackgroundPositionY(pos,selector)
{
	var backPos = $(selector).css('backgroundPosition').split(" ");
	var backPosX = backPos[0];
	$(selector).css("background-position",backPosX+" "+pos);
}

/*==========================================JUMP============================================*/
function jump()
{	if(onShip === false && jumpDown === false && shipHits === false && isJumping === false)
	{	isJumping = true;
		setBackgroundPositionX("-1200px",$("#main_character"));
		$("#main_character").animate({bottom:jumpHeightFromBottom+"px"},halfJumpTime);
		setTimeout(function(){setBackgroundPositionX("-1400px",$("#main_character"));},halfJumpTime);
		$("#main_character").animate({bottom:(groundOffset - 8)+"px"},halfJumpTime);
		setTimeout(function(){resetCharacter();},halfJumpTime*2);
		setTimeout(function(){isJumping = false;},halfJumpTime*2.5);
	}
	return;
}