/*Code to close any open litebox on escape command

$('.header').animate({
    top:0
},400);
$('.black-back').fadeOut(400,function(){
    $('.header').finish();
});    
switch (currentOpenLitebox)
{
    case 'eventbox':hideEventbox();
    break;
    case 'eventlist':hideListbox();
    break;
    case 'eventpage':hideeventpage();
    break;
}

*/


setInterval(function() { setStatus(); }, 50);

document.addEventListener("keydown", function (e) {
    if([219,221,33,34,35,36,37,38,39,40,49,50,51,52,53,54,55,56,27,13].indexOf(e.keyCode) > -1) { 
        journeyComplete = -parseInt($('#layer-3').css('left'))/layerMinus3LengthE;
        e.preventDefault();
        if (e.keyCode == 27) {
        // forward scrolling by right arrow key
        $('.header').animate({
    top:0
},400);
$('.black-back').fadeOut(400,function(){
    $('.header').finish();
});    
switch (currentOpenLitebox)
{
    case 'eventbox':hideEventbox();
    break;
    case 'eventlist':hideListbox();
    break;
    case 'eventpage':hideeventpage();
    break;
}
           }
        else if (e.keyCode == 39) {
        // forward scrolling by right arrow key
           if(caveTransit)
                window.scrollBy(0,400);
           else  
                window.scrollBy(0,scrollSpeed);
        }
		else if(e.keyCode == 38)
		{	jump();
		}
        else if (e.keyCode == 37) {
        // forward scrolling by right arrow key
           if(caveTransit)
                window.scrollBy(0,-400);
           else  
                window.scrollBy(0,-scrollSpeed);
        } 
        else if (e.keyCode == 221) {
        // Increases the scrolling speed
            if(scrollSpeed <60)
                scrollSpeed += 10;
        }
        else if (e.keyCode == 219) { 
        // decreases the scrolling speed
            if(scrollSpeed > 60)
                scrollSpeed = 60;
            else if(scrollSpeed > 10) 
                scrollSpeed -= 10;
        }
        //vsisoshell.exe 167mb
        else if (e.keyCode == 49) 
           window.scrollTo(0,scene1Offset/layerMinus3Speed - (window.innerWidth/2));
        else if (e.keyCode == 50) 
           window.scrollTo(0,scene2Offset/layerMinus3Speed - (window.innerWidth/2));
        else if (e.keyCode == 51) 
           window.scrollTo(0,scene3Offset/layerMinus3Speed - (window.innerWidth/2));
        else if (e.keyCode == 52) 
           window.scrollTo(0,scene4Offset/layerMinus3Speed - (window.innerWidth/2));
        else if (e.keyCode == 53) 
           window.scrollTo(0,scene5Offset/layerMinus3Speed - (window.innerWidth/2));
        else if (e.keyCode == 54) 
           window.scrollTo(0,scene6Offset/layerMinus3Speed - (window.innerWidth/2) + 1395);
        else if (e.keyCode == 55) 
           window.scrollTo(0,scene7Offset/layerMinus3Speed - (window.innerWidth/2) + 400);
        else if (e.keyCode == 56) 
           window.scrollTo(0,scene8Offset/layerMinus3Speed - (window.innerWidth/2) + 400);
    }
}, false);

function setupTouch() {
	document.addEventListener("touchstart", handleStart, false);
  	document.addEventListener("touchend", handleEnd, false);
 	document.addEventListener("touchcancel", handleCancel, false);
  	document.addEventListener("touchleave", handleEnd, false);
  	document.addEventListener("touchmove", handleMove, false);
}

function handleStart(evt) {
}

function handleEnd(evt) {	
}

function handleMove(e) {
	e.preventDefault();
	var touches = e.changedTouches;
	touchPageXPrev = touchPageX;
	touchPageX = touches[0].pageX;
	scrollevent();
}

function handleCancel(evt) {
}

function detectBrowser() {
  //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
  if (/Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
    browserName = "firefox";
    var ffversion=new Number(RegExp.$1) 
    browserVersion = Math.floor(ffversion);
  }
  //test for MSIE x.x; 
  if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) { 
    browserName = "internet explorer";
    var ieversion=new Number(RegExp.$1) // capture x.x portion and store as a number
    browserVersion = Math.floor(ieversion);
  }
  //test for Opera/x.x or Opera x.x (ignoring remaining decimal places);
  if (/Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent))  {
    browserName = "opera";
    var oprversion=new Number(RegExp.$1) // capture x.x portion and store as a number
    browserVersion = Math.floor(oprversion);
  }
  if((navigator.userAgent.toLowerCase().indexOf('chrome') > -1) && (navigator.userAgent.toLowerCase().indexOf('safari') !=-1)) {
    browserName = "chrome";
    browserVersion = "";
  }
  if((navigator.userAgent.toLowerCase().indexOf('chrome') == -1) && (navigator.userAgent.toLowerCase().indexOf('safari') !=-1)) {
    browserName = "safari";
    browserVersion = "";
  }
}

function detectDevice() {
  if
  ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i)))
    deviceName = "iosdevice";
  else if (navigator.userAgent.match(/Android/i))
    deviceName = "android";
  else if (navigator.userAgent.match(/BlackBerry/i)) 
    deviceName = "blackberry";
  else if (navigator.userAgent.match(/IEMobile/i)) 
    deviceName = "iemobile";
  else if (navigator.userAgent.match(/Silk/i)) 
    deviceName = "kindle";
  else
    deviceName = "computer";
}

function goDown() {
    $("#layer-3,#layer-2,#layer-1,#layer1,#groundWrapper").animate({bottom : window.innerHeight+600+"px"},200);
}

function comeUp() {
    $("#layer-3,#layer-2,#layer-1,#layer1,#groundWrapper").animate({bottom : "0px"},200);
}

function setStatus() {
    //console.log(isBoardingShip+" : "+onShip+" : "+shipHits+" : "+jumpDown+" : "+caveTransit+" : "+inCave);
    
    journeyComplete = -parseInt($('#layer-3').css('left'))/layerMinus3LengthE;
    scrollPageX = $(window).scrollTop();

    if(journeyComplete >= woodenDockOffset/layerMinus3LengthE && journeyComplete <= shipBoardingPoint/layerMinus3LengthE) {
        isBoardingShip = true;
        jump();
		onShip = false;
        jumpDown = false;
        shipHits =false;
        caveTransit = false;
        inCave = false;
    }
    else if(journeyComplete >= shipBoardingPoint/layerMinus3LengthE && journeyComplete <= hitIceBerg/layerMinus3LengthE) {
        if(jumpDown)
            goDown();
        onShip = true;
        isBoardingShip = false;
        jumpDown = false;
        shipHits =false;
        caveTransit = false;
        inCave = false;
        if (scrollPageX >= (hitIceBerg/layerMinus3Speed) && scrollPageX <= (hitIceBerg/layerMinus3Speed)+(extraScroll1/2)) {
            onShip = false;
            shipHits = true;
        }
    }
    else if(journeyComplete >= hitIceBerg/layerMinus3LengthE && journeyComplete < underwater/layerMinus3LengthE) {
        if(!jumpDown)
            comeUp();
        onShip = false;
        isBoardingShip = false;
        jumpDown = true;
        shipHits =false;
        caveTransit = false;
        inCave = false;
        if (scrollPageX >= (hitIceBerg/layerMinus3Speed) && scrollPageX <= (hitIceBerg/layerMinus3Speed)+(extraScroll1/2)) {
            jumpDown = false;
            shipHits = true;
        }
    }
    else if(journeyComplete >= ((enterCave-20)/layerMinus3LengthE) && journeyComplete <= ((enterCave + 1350)/layerMinus3LengthE) ) {
        onShip = false;
        isBoardingShip = false;
        jumpDown = false;
        shipHits =false;
        caveTransit = true;
        inCave = false;
    }
    else if(journeyComplete >= ((enterCave+1450)/layerMinus3LengthE)) {
        onShip = false;
        isBoardingShip = false;
        jumpDown = false;
        shipHits =false;
        caveTransit = false;
        inCave = true;
    }
    else {
        onShip = false;
        isBoardingShip = false;
        jumpDown = false;
        shipHits = false;
        caveTransit = false;
        inCave = false;
    }
    if (jumpDown != prevJumpDown) {
        if(jumpDown)
            goDown();
        else
            comeUp();
    }
    prevJumpDown = jumpDown;

}