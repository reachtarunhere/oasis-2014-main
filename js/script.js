function openLightbox() {
    $('#blackout').fadeIn();
    $('#blackoutContent').delay(400).fadeIn();
}

function closeLightbox() {
    $('#blackout').fadeOut();
    $('.blackoutContent').fadeOut();
}

function setVitals() {
	$("#groundWrapper").attr("data-0","left:0px;");
	$("#groundWrapper").attr("data-"+(hitIceBerg/layerMinus3Speed),"left:-"+ (hitIceBerg*layerMinus1Speed/layerMinus3Speed) +"px;");
	$("#groundWrapper").attr("data-"+(hitIceBerg/layerMinus3Speed+extraScroll1),"left:-"+ (hitIceBerg*layerMinus1Speed/layerMinus3Speed) +"px");
	$("#groundWrapper").attr("data-"+totalScroll,"left:-"+ (layerMinus1LengthE) +"px;");
	$("#layer-3").attr("data-0","left:0px;");
	$("#layer-3").attr("data-"+(hitIceBerg/layerMinus3Speed),"left:-"+ (hitIceBerg) +"px;");
	$("#layer-3").attr("data-"+(hitIceBerg/layerMinus3Speed+extraScroll1),"left:-"+ (hitIceBerg) +"px");
	$("#layer-3").attr("data-"+totalScroll,"left:-"+ (layerMinus3LengthE) +"px;");
	$("#layer-2").attr("data-0","left:0px;");
	$("#layer-2").attr("data-"+(hitIceBerg/layerMinus3Speed),"left:-"+ (hitIceBerg*layerMinus2Speed/layerMinus3Speed) +"px;");
	$("#layer-2").attr("data-"+(hitIceBerg/layerMinus3Speed+extraScroll1),"left:-"+ (hitIceBerg*layerMinus2Speed/layerMinus3Speed) +"px");
	$("#layer-2").attr("data-"+totalScroll,"left:-"+ (layerMinus2LengthE) +"px;");
	$("#layer-1").attr("data-0","left:0px;");
	$("#layer-1").attr("data-"+(hitIceBerg/layerMinus3Speed),"left:-"+ (hitIceBerg*layerMinus1Speed/layerMinus3Speed) +"px;");
	$("#layer-1").attr("data-"+(hitIceBerg/layerMinus3Speed+extraScroll1),"left:-"+ (hitIceBerg*layerMinus1Speed/layerMinus3Speed) +"px");
	$("#layer-1").attr("data-"+totalScroll,"left:-"+ (layerMinus1LengthE) +"px;");
	$("#layer1").attr("data-0","left:0px;");
	$("#layer1").attr("data-"+(hitIceBerg/layerMinus3Speed),"left:-"+ (hitIceBerg*layerMinus1Speed/layerMinus3Speed) +"px;");
	$("#layer1").attr("data-"+(hitIceBerg/layerMinus3Speed+extraScroll1),"left:-"+ (hitIceBerg*layerMinus1Speed/layerMinus3Speed) +"px");
	$("#layer1").attr("data-"+totalScroll,"left:-"+ (layerMinus1LengthE) +"px;");
	$("#timeline").attr("data-0","width : 0%");
	$("#timeline").attr("data"+totalScroll,"width : 100%");

	$("#darkCover").attr("data-0","opacity:0;");
	$("#darkCover").attr("data-"+enterCave/layerMinus3Speed,"opacity:0;");
	$("#darkCover").attr("data-"+(enterCave+80)/layerMinus3Speed,"opacity:1;");
	$("#darkCover").attr("data-"+(enterCave+1680)/layerMinus3Speed,"opacity:1;");
	$("#darkCover").attr("data-"+(enterCave+1760)/layerMinus3Speed,"opacity:0;");
	
	$("#ship").attr("data-0","position:absolute;left:"+(scene5Offset+4100)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#ship").attr("data-"+(shipBoardingPoint/layerMinus3Speed-1),"position:absolute;left:"+(scene5Offset+4100)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#ship").attr("data-"+(shipBoardingPoint/layerMinus3Speed),"position:fixed;left:"+(window.innerWidth/2 - 270)+"px");
	$("#ship").attr("data-"+(hitIceBerg/layerMinus3Speed-1),"position:fixed;left:"+(window.innerWidth/2 - 270)+"px");
	$("#ship").attr("data-"+(hitIceBerg/layerMinus3Speed),"transform: rotate(0deg) translate(0px, 0px);position:absolute;left:"+(scene5Offset+5200 - 408)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#ship").attr("data-"+(hitIceBerg/layerMinus3Speed+extraScroll1),"transform: rotate(-8deg) translate(0px, 60px);position:absolute;left:"+(scene5Offset+5200 - 408)*layerMinus1Speed/layerMinus3Speed+"px");
}

//==============================POSITIONING ELEMENTS FROM BOTTOM =============================//
function position_elements()
{	$(".layer img").css("bottom",groundOffset);
	
	//PLACING CONCERT ELEMENTS
	$("#concertFocusLight1, #concertFocusLight5").css("bottom",345+"px");
	$("#concertFocusLight2, #concertFocusLight4").css("bottom",355+"px");
	$("#concertFocusLight3").css("bottom",360+"px");
	$("#videoNet").css("bottom","200px");
	$("#videoPlay").css("bottom","150px");

	//DESERT ELEMENTS
	$("#petrolPumpPoster").css("bottom","206px");
	$("#petrolPumpPosterAbstract").css("bottom","206px");
	//CITY ELEMENTS
	$("#parachute").css("bottom","300px");
	$("#parachuteAbstract").css("bottom","300px");
	
	// PLACING UDERWATER ELEMENTS
	$(".underwaterImg").css("bottom",-(window.innerHeight + 500));
	$("#underwaterBG").css("bottom",-(window.innerHeight + 600));
	$(".underwaterGround").css("bottom",-(window.innerHeight + 600));
	$(".underwaterGrass").css("bottom",-(window.innerHeight + 450));
	$(".underwaterSubmarine").css("bottom",-(window.innerHeight + 270));
	$(".underwaterAnchor").css("bottom",-(window.innerHeight + 530));
	
	//KEYFRAMES
	$("#swing1").css("bottom",110+40);
	$("#swing2").css("bottom",110+22);
	$("#swing1").css("animation","rotate360 10s linear 0s infinite normal");
	$("#swing2").css("animation","rotate360 10s linear 0s infinite reverse");
	$("#windFan2,#windFan4").css("animation","rotate360 20s linear 0s infinite normal");
	$("#submarine").css("animation","submarineMove 40s linear 0s infinite normal");
	$("#parachute").css("animation","socialMedia 10s linear 0s infinite normal");
	$("#parachuteAbstract").css("animation","socialMedia 10s linear 0s infinite normal");

	//CONCERT
	$("#concertFocusLight1,#concertFocusLight2,#concertFocusLight3,#concertFocusLight4,#concertFocusLight5").css("transform-origin","50% 0%");
	$("#concertFocusLight1").css("animation","concertFocusLight1Animation 8s linear 0s infinite normal");
	$("#concertFocusLight2").css("animation","concertFocusLight2Animation 8s linear 0s infinite normal");
	//$("#concertFocusLight3").css("animation","concertFocusLight3Animation 5s linear 0s infinite normal");
	$("#concertFocusLight4").css("animation","concertFocusLight4Animation 8s linear 0s infinite normal");
	$("#concertFocusLight5").css("animation","concertFocusLight5Animation 8s linear 0s infinite normal");

	//CAVE
	$("#torch1,#torch2,#torch3,#torch4").css("bottom",350+"px");
}

//==============================RENDER SCENES======================================//
function renderScene1()
{	
	//layer-3
	$("#backgroundPyramids").css("left",scene1Offset+"px");
	
	//layer-2
	$("#frontPyramids").css("left",scene1Offset+"px");
	$("#petrolPump").css("left",(scene1Offset+1200)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#petrolPumpPoster").css("left",(scene1Offset+1604)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#petrolPumpPosterAbstract").css("left",(scene1Offset+1604)*layerMinus2Speed/layerMinus3Speed+"px");
	
	//layer-1
	$("#singlePyramid").css("left",scene1Offset+600*layerMinus1Speed/layerMinus3Speed+"px");
	$("#thisWay").css("left",scene1Offset+350*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusBig1").css("left",scene1Offset+150*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusBig2").css("left",scene1Offset+1300*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusSmall3").css("left",scene1Offset+900*layerMinus1Speed/layerMinus3Speed+"px");
	$("#cactusSmall4").css("left",scene1Offset+300*layerMinus1Speed/layerMinus3Speed+"px");
	$("#mysteryMachine").css("left",(scene1Offset+750)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#mysteryMachineAbstract").css("left",(scene1Offset+750)*layerMinus1Speed/layerMinus3Speed+"px");
}

function renderScene2() {
	//layer-3
	$("#blueMountain").css("left",scene2Offset+"px");
	
	//layer-2
	$("#bigWind").css("left",(scene2Offset+1060)*layerMinus2Speed/layerMinus3Speed+"px");
	
	//layer-1
	$("#wind2").css("left",(scene2Offset+430)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#windFan2").css("left",((scene2Offset+430)*layerMinus1Speed/layerMinus3Speed - 70)+"px");
	$("#farmHouse").css("left",(scene2Offset+450)*layerMinus1Speed/layerMinus3Speed+"px");	
}

function renderScene3() {
	//layer-3
	$("#mountain").css("left",(scene3Offset+100)+"px");
	$("#mountain2").css("left",(scene3Offset+800)+"px");
	$("#hillTree1").css("left",(scene3Offset+0)+"px");	
	$("#treeLayer-31").css("left",(scene3Offset+800)+"px");	
	$("#treeLayer-32").css("left",(scene3Offset+1200)+"px");
	$("#billboardTrees").css("left",(scene3Offset+3000)+"px");
	
	//layer-2
	$("#forestHut").css("left",(scene3Offset+2300)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#forestBillboard").css("left",(scene3Offset+3000)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#forestBillboardAbstract").css("left",(scene3Offset+3000)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#notificationSpeakers").css("left",(scene3Offset+2900)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#notificationSpeakersAbstract").css("left",(scene3Offset+2900)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#hillTree2").css("left",(scene3Offset+2100)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#plateau").css("left",(scene3Offset+800)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#treeLayer-21").css("left",(scene3Offset+900)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#treeLayer-22").css("left",(scene3Offset+1500)*layerMinus2Speed/layerMinus3Speed+"px");
	
	//layer-1
	$("#treeLayer-11").css("left",(scene3Offset+500)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#treeLayer-12").css("left",(scene3Offset+1300)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#noTrespassing").css("left",(scene3Offset+700)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#cart").css("left",(scene3Offset-250)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#wind4").css("left",(scene3Offset+200)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#windFan4").css("left",((scene3Offset+200)*layerMinus1Speed/layerMinus3Speed - 70)+"px");
	$("#mamoBoard").css("left",((scene3Offset+2000)*layerMinus1Speed/layerMinus3Speed)+"px");
	$("#mamoBoardAbstract").css("left",((scene3Offset+2000)*layerMinus1Speed/layerMinus3Speed)+"px");
	$("#pokemon1").css("left",((scene3Offset+1160)*layerMinus1Speed/layerMinus3Speed)+"px");
	$("#pokemon1Abstract").css("left",((scene3Offset+1160)*layerMinus1Speed/layerMinus3Speed)+"px");
	$("#pokemon2").css("left",((scene3Offset+2010)*layerMinus1Speed/layerMinus3Speed)+"px");
	$("#pokemon2Abstract").css("left",((scene3Offset+2010)*layerMinus1Speed/layerMinus3Speed)+"px");
}

function renderScene4() {
	//layer-3
	$("#build3").css("left",(scene4Offset+1070)*layerMinus2Speed/layerMinus3Speed+"px");
	
	//layer-2
	$("#build1").css("left",(scene4Offset+1150)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#theatrePoster").css("left",(scene4Offset+1150)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#build2").css("left",(scene4Offset+3200)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#centralPerk").css("left",(scene4Offset+3200)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#centralPerkAbstract").css("left",(scene4Offset+3200)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#oasisQuiz").css("left",(scene4Offset+3900)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#oasisQuizAbstract").css("left",(scene4Offset+3900)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#parachute").css("left",(scene4Offset+500)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#parachuteAbstract").css("left",(scene4Offset+500)*layerMinus2Speed/layerMinus3Speed+"px");

	//layer-1
	$("#phoneBooth1").css("left",(scene4Offset+1020)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#phoneBooth2").css("left",(scene4Offset+3700)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#phoneBooth2Abstract").css("left",(scene4Offset+3700)*layerMinus1Speed/layerMinus3Speed+"px");
	
	
	//layer1
	$("#bridgeRope").css("left",(scene4Offset)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#bridgeTower1").css("left",(scene4Offset+225)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#bridgeTower2").css("left",(scene4Offset+689)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp1").css("left",(scene4Offset+1090)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp2").css("left",(scene4Offset+1440)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp3").css("left",(scene4Offset+1790)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp4").css("left",(scene4Offset+2140)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp5").css("left",(scene4Offset+2490)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp6").css("left",(scene4Offset+2840)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp7").css("left",(scene4Offset+3190)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#streetLamp8").css("left",(scene4Offset+3540)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#jukebox").css("left",(scene4Offset+2800)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#musicNotes").css("left",(scene4Offset+2850)*layerMinus1Speed/layerMinus3Speed+"px");	
}

function renderScene5() {
	//layer-3
	$("#rollerCoaster").css("left",(scene5Offset+100)+"px");	
	$("#tent3").css("left",(scene5Offset+1550)+"px");	
	$("#tent3Abstract").css("left",(scene5Offset+1550)+"px");	
	$("#tent5").css("left",(scene5Offset+1850)+"px");	
	$("#tent5Abstract").css("left",(scene5Offset+1850)+"px");	
	
	//layer-2
	$("#horseSwing").css("left",(scene5Offset+950)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#tent2").css("left",(scene5Offset+600)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#tent4").css("left",(scene5Offset+1580)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#tent4Abstract").css("left",(scene5Offset+1580)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#dramaBoard").css("left",(scene5Offset+1440)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#dramaBoardAbstract").css("left",(scene5Offset+1440)*layerMinus2Speed/layerMinus3Speed+"px");	
	
	$("#profshow").css("left",(scene5Offset+2270)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#videoNet").css("left",(scene5Offset+2270)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#videoPlay").css("left",(scene5Offset+2280)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#concert").css("left",(scene5Offset+2100)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#concertAbstract").css("left",(scene5Offset+2100)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#concertFocusLight1").css("left",(scene5Offset+2308)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#concertFocusLight2").css("left",(scene5Offset+2390)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#concertFocusLight3").css("left",(scene5Offset+2482)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#concertFocusLight4").css("left",(scene5Offset+2575)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#concertFocusLight5").css("left",(scene5Offset+2683)*layerMinus2Speed/layerMinus3Speed+"px");	
	
	//layer-1
	$("#booth").css("left",(scene5Offset+200)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#swing2").css("left",(scene5Offset+656)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#swingStand2").css("left",(scene5Offset+650+60)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#swing1").css("left",(scene5Offset+1050)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#swingStand1").css("left",(scene5Offset+1050+78)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#tent1").css("left",(scene5Offset+400)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#rockbanner").css("left",(scene5Offset+3000)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#rockbannerAbstract").css("left",(scene5Offset+3000)*layerMinus1Speed/layerMinus3Speed+"px");	
	
	//layer1
	$("#carnivalRailing").css("left",(scene5Offset+50)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#woodenDock").css("left",(scene5Offset+3300)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#ship").css("left",(scene5Offset+4100)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#iceBerg").css("left",(scene5Offset+5200)*layerMinus1Speed/layerMinus3Speed+"px");	
}

function renderScene6() {
	//layer-3
	$("#grass1").css("left",(scene6Offset+1700)+"px");	
	$("#grass2").css("left",(scene6Offset+1950)+"px");	
	$("#grass3").css("left",(scene6Offset+2350)+"px");
	$("#grass4").css("left",(scene6Offset+1500)+"px");	
	$("#grass5").css("left",(scene6Offset+1250)+"px");	
	$("#grass6").css("left",(scene6Offset+1050)+"px");	
	$("#grass7").css("left",(scene6Offset+800)+"px");	
	$("#grass8").css("left",(scene6Offset+550)+"px");	
	$("#grass9").css("left",(scene6Offset+350)+"px");
	$("#underwaterbackLayer").css("left",(scene6Offset+0)+"px");
	$("#underwaterLayer1").css("left",(scene6Offset+0)+"px");
	$("#underwaterBG").css("left",(scene6Offset-window.innerWidth/2)+"px");
	
	$("#underwaterBG").css("width",(((scene7Offset - scene6Offset + 500)+window.innerWidth)+"px"));	

	//layer-2
	$("#plant1").css("left",(scene6Offset+140)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#plant2").css("left",(scene6Offset+410)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#plant3").css("left",(scene6Offset+1240)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#plant4").css("left",(scene6Offset+1580)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#plant5").css("left",(scene6Offset+2150)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#submarine").css("left",(scene6Offset+3060)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#rock2").css("left",(scene6Offset+2010)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#underwaterLayer2").css("left",(scene6Offset+0)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#stone").css("left",(scene6Offset+3000)*layerMinus2Speed/layerMinus3Speed+"px");
	
	//layer-1
	$("#pole").css("left",(scene6Offset+800)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#poleAbstract").css("left",(scene6Offset+800)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#krustyCrab").css("left",(scene6Offset+1000)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#krustyCrabAbstract").css("left",(scene6Offset+1000)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#triRock1").css("left",(scene6Offset+1210)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#rock1").css("left",(scene6Offset+1300)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#archiveslog").css("left",(scene6Offset+2500)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#archiveslogAbstract").css("left",(scene6Offset+2500)*layerMinus1Speed/layerMinus3Speed+"px");	

	//layer1
	$("#anchor").css("left",(scene6Offset+700)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#triRock2").css("left",(scene6Offset+1700)*layerMinus1Speed/layerMinus3Speed+"px");	
	$("#underwaterGround").css("left",(scene6Offset)*layerMinus1Speed/layerMinus3Speed+"px");	
}

function renderScene7()
{	//layer-3
	$("#lightHouse").css("left",(scene7Offset+500)+"px");
	$("#tree4").css("left",(scene7Offset+2000)+"px");
	$("#tree5").css("left",(scene7Offset+2200)+"px");
	//layer-2
	$("#shells2").css("left",(scene7Offset+420)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#snail1").css("left",(scene7Offset+500)*layerMinus2Speed/layerMinus3Speed+"px");	
	$("#sandHouse").css("left",(scene7Offset+600)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#tree1").css("left",(scene7Offset+1000)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#beachGirl").css("left",(scene7Offset+1400)*layerMinus2Speed/layerMinus3Speed+"px");
	$("#tree3").css("left",(scene7Offset+1900)*layerMinus2Speed/layerMinus3Speed+"px");

	//layer-1
	$("#starFish").css("left",(scene7Offset+100)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#shells1").css("left",(scene7Offset+180)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#crab").css("left",(scene7Offset+300)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#juice").css("left",(scene7Offset+620)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#beachChair").css("left",(scene7Offset+680)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#beachElements").css("left",(scene7Offset+1100)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#crabDuo").css("left",(scene7Offset+1300)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#tree2").css("left",(scene7Offset+1600)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#hoarding").css("left",(scene7Offset+1950)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#amulAd").css("left",(scene7Offset+1980)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#amulAdAbstract").css("left",(scene7Offset+1980)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#stoneBoard").css("left",(scene7Offset+2400)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#caveLeft").css("left",(scene7Offset+2600)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#caveRight").css("left",(scene7Offset+2885)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#fashpBoard").css("left",(scene7Offset+1550)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#fashpBoardAbstract").css("left",(scene7Offset+1550)*layerMinus1Speed/layerMinus3Speed+"px");

	//layer1	
	$("#beachGroundUpper").css("left",(scene7Offset)*layerMinus1Speed/layerMinus3Speed+"px");	
}

function renderScene8() {
	//layer-3
	$("#caveBackground1").css("left",(scene8Offset - 800)+"px");
	$("#caveBackground2").css("left",(scene8Offset + 566)+"px");
	$("#torch1").css("left",(scene8Offset -300)+"px");
	$("#torch2").css("left",(scene8Offset + 100)+"px");
	$("#torch3").css("left",(scene8Offset + 1000)+"px");
	$("#torch4").css("left",(scene8Offset + 1600)+"px");
	//layer-2
	
	//layer-1
	$("#flinstoneCar").css("left",(scene8Offset+400)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#flinstoneCarAbstract").css("left",(scene8Offset+400)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#treasure").css("left",(scene8Offset+1400)*layerMinus1Speed/layerMinus3Speed+"px");
	$("#treasureAbstract").css("left",(scene8Offset+1400)*layerMinus1Speed/layerMinus3Speed+"px");
	
	}

function customizeGround()
{	$("#woodenDock").css("bottom","-45px");
	$("#bridgeRope").css("bottom","-47px");
	$("#bridgeTower1").css("bottom","0px");
	$("#bridgeTower2").css("bottom","0px");
	$("#cart").css("bottom","105px");
	$("#ship").css("bottom","60px");
	$("#iceBerg").css("bottom","0px");
	$("#cave").css("bottom","70px");
	$("#amulAd").css("bottom","207px");
	$("#amulAdAbstract").css("bottom","207px");
	$("#musicNotes").css("bottom","330px");
	$("#profshow").css("bottom","200px");
	$("#pokemon1,#pokemon2").css("bottom","105px");
	$("#treasure").css("bottom","100px");

	// PLACING GROUNDS
	$(".desertGround").css({ background :"url('./images/desertground.jpg')", width : 1000, margin : 0});
	$(".transition").css({ background :"url('./images/desertforestTransition.png')", width : 1355, left : 1000});
	$(".forestGround").css({ background :"url('./images/forestGround.png')", width : 6660, left : 2355});
	$(".bridgeWaterWrapper").css({ width : 1295, overflow : 'hidden', left : scene4Offset*(layerMinus1Speed/layerMinus3Speed)});
	$(".bridgeWater1").css({ background :"url('./images/bridgeWater.png')", width : 1500, animation : "waveMove1 33s linear 0s infinite normal"});
	$(".bridgeWater2").css({ background :"url('./images/bridgeWater.png')", width : 1500, left : -1500 , animation : "waveMove1 33s linear 0s infinite normal"});
	$(".cityGround").css({ background :"url('./images/cityground.png')", width : 8510, left : scene4Offset*(layerMinus1Speed/layerMinus3Speed)+1295});
	$(".shipWaterWrapper").css({ width : 7400, overflow : 'hidden', left : scene6Offset*(layerMinus1Speed/layerMinus3Speed)-1200});
	$(".shipWater1").css({ background :"url('./images/bridgeWater.png')", width : 5000, animation : "waveMove2 120s linear 0s infinite normal"});
	$(".shipWater2").css({ background :"url('./images/bridgeWater.png')", width : 5000, left : -5000 , animation : "waveMove2 120s linear 0s infinite normal"});
	$(".beachGround").css({ background :"url('./images/beachGround.png')", width : 5000, left : scene7Offset*(layerMinus1Speed/layerMinus3Speed)});
	$(".caveGround").css({ background :"url('./images/caveGround.png')", width : 3600, left : scene8Offset*(layerMinus1Speed/layerMinus3Speed) - 1000});

}
//=========================ADD GRADIENTS==============================================//
function addGradients(main_container)
{	
	//ORANGE
	main_container.attr("data-0","background: linear-gradient(rgb(243,148,66),rgb(247,174,108));");
	main_container.attr("data-"+((scene2Offset-200) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(243,148,66),rgb(238,159,90));");
	// SKY BLUE
	main_container.attr("data-"+((scene2Offset+600) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(129,200,246),rgb(129,200,246));");
	main_container.attr("data-"+((scene5Offset-400) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(129,200,246),rgb(129,200,246));");
	//DARK BLUE
	main_container.attr("data-"+((scene5Offset+800) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(16,22,38),rgb(16,22,38));");
	main_container.attr("data-"+((scene7Offset-800) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(16,22,38),rgb(16,22,38));");
	//SKY BLUE
	main_container.attr("data-"+((scene7Offset+100) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(129,200,246),rgb(129,200,246));");
	main_container.attr("data-"+((scene8Offset-200) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(129,200,246),rgb(129,200,246));");
	//BLACK
	main_container.attr("data-"+((scene8Offset-190) - window.innerWidth)/layerMinus3Speed,"background:linear-gradient(rgb(0,0,0),rgb(0,0,0));");
	main_container.attr("data-"+totalScroll,"background:linear-gradient(rgb(0,0,0),rgb(0,0,0));");
}
//============================DOCUMENT READY AND WINDOW RESIZE========================//

window.onload = function(){
	detectBrowser();
	detectDevice();

	if (deviceName != "computer") {
		setupTouch();
	}

	// set the layer speeds and layer travel lengths
	setVitals();
	
	// position the main character
	prev_scroll = scrollPageX;
	curr_scroll = scrollPageX;
	position_character();

	// add the gradient of the background
	addGradients($("#main_container"));
	
	// render scenes
	renderScene1();
	renderScene2();
	renderScene3();
	renderScene4();
	renderScene5();
	renderScene6();
	renderScene7();
	renderScene8();

	// position all the elements of the layer
	position_elements();
	customizeGround();
	var s = skrollr.init();
};

$(window).resize( function(){
	console.log("window resized");
	setConstants();
	setVitals();
	position_character();
	addGradients($("#main_container"));
	renderScene1();
	renderScene2();
	renderScene3();
	renderScene4();
	renderScene5();
	renderScene6();
	renderScene7();
	renderScene8();
	position_elements();
	customizeGround();
	var s = skrollr.init();
	if(jumpDown == true)
	{	goDown();
	}
	totalScroll = (layerMinus3Length - window.innerWidth)/layerMinus1Speed;
});