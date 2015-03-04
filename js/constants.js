
var multiplier32 = 1.15;
var multiplier31 = 1.3;

var layerMinus3Length = 24600;
var layerMinus2Length = layerMinus3Length*multiplier32;
var layerMinus1Length = layerMinus3Length*multiplier31;

var layerMinus3LengthE = layerMinus3Length - window.innerWidth;
var layerMinus2LengthE = layerMinus2Length - window.innerWidth;
var layerMinus1LengthE = layerMinus1Length - window.innerWidth;

var scene1Offset = 0;
var scene2Offset = 1600;
var scene3Offset = 3200;
var scene4Offset = 6900;
var scene5Offset = 11100;
var scene6Offset = 15500;
var scene7Offset = 18390;
var scene8Offset = 22800;

var layerMinus3Speed = 0.40;

var extraScroll1 = 500;
var totalScroll = (layerMinus3LengthE)/layerMinus3Speed + extraScroll1;
var totalScrollE = (layerMinus3LengthE)/layerMinus3Speed;

var layerMinus2Speed = (layerMinus2LengthE)/totalScroll;
var layerMinus1Speed = (layerMinus1LengthE)/totalScroll;

var touchPageX;
var scrollPageX = $(window).scrollTop();
var journeyComplete = -parseInt($('#layer-3').css('left'))/layerMinus3LengthE;
var scrollSpeed = 30;

var browserName;
var browserVersion;

var deviceName;

var woodenDockOffset = scene5Offset + 3300 + (1000 - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;
var shipBoardingPoint = scene5Offset + 4100 + (270 - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;
var hitIceBerg = scene5Offset + 5200 + (-270 - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;
var underwater = scene6Offset + 2800 + ( - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;
var enterCave = scene7Offset+2900 + ( - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;

var isBoardingShip = false;
var onShip = false;
var shipHits = false;
var jumpDown = false;
var prevJumpDown = false;
var caveTransit = false;
var inCave = false;

var groundOffset = 110;

function setConstants()
{	layerMinus3LengthE = layerMinus3Length - window.innerWidth;
	layerMinus2LengthE = layerMinus2Length - window.innerWidth;
	layerMinus1LengthE = layerMinus1Length - window.innerWidth;
	
	totalScroll = (layerMinus3LengthE)/layerMinus3Speed + extraScroll1;
	totalScrollE = (layerMinus3LengthE)/layerMinus3Speed;
	
	layerMinus2Speed = (layerMinus2LengthE)/totalScroll;
	layerMinus1Speed = (layerMinus1LengthE)/totalScroll;
	
	journeyComplete = -parseInt($('#layer-3').css('left'))/layerMinus3LengthE;
	
	woodenDockOffset = scene5Offset + 3300 + (1000 - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;
	shipBoardingPoint = scene5Offset + 4100 + (270 - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;
	hitIceBerg = scene5Offset + 5200 + (-270 - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;
	underwater = scene6Offset + 2800 + ( - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;
	enterCave = scene7Offset+2900 + ( - window.innerWidth/2)*layerMinus3Speed/layerMinus1Speed;

}