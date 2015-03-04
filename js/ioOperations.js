/*
Litebox
{
    litebox-mainContent-wrapper --> event-list --> event-litebox    
}

*Hide first and then show
*/


/*----------------------------------Main Variables-------------------------------*/

windowX=$(document).width();
windowY=$(document).height();
var currentOpenLitebox='';
var eventlistJSONstore;
var eventpageJSONstore;
/*Change these colors to set all global color categories*/
var colors={musicColor:'#1C0459',artColor:'#BB0000',miscColor:'#252525',oratoryColor:'#248716',danceColor:'#0E71DE',quizzingColor:'#D99A17',dramaColor:'#32B0DA',onlineColor:'#661366'};
var dullColors={musicColor:'#0E022D',artColor:'#510000',miscColor:'#151515',oratoryColor:'#103F0A',danceColor:'#06366A',quizzingColor:'#986B10',dramaColor:'#145C74',onlineColor:'#3C0B3C'};

/*----------------------------------Main Variables End-------------------------------*/

/*Initialize updates*/
initializeUpdate();


/*Basic Initialization of click events*/

$('.black-back').click(function(event) {
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
});

$('.black-back').hover(function() {
    $('.black-back img').fadeOut(200);
}, function() {
    $('.black-back img').fadeIn(200);
});


$('#events').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    $('.black-back').fadeIn(400);
    showEventbox();
});

$('#about').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(41);
    $('.black-back').fadeIn(400);
});

$('#sponsors').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(75);
    $('.black-back').fadeIn(400);
});

$('#archives').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(76);
    $('.black-back').fadeIn(400);
});


$('#contacts').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(78);
    $('.black-back').fadeIn(400);
});

/*End*/


/*------------------------------------------------------Eventbox start------------------------------------------------------*/


/*Eventbox global stuff*/

var eventCategoryList = [];
var eventboxX, eventboxY,ebX,ebY;  /*These are basic height width values*/

/*Top(music)-Right(art)-Bottom(misc)-Left(oratory)-Right2(dance)-Right3(quizzing)-Left2(drama)-Left3(online)*/
/*Get this category list with json from backend*/
eventCategoryList=['MUSIC','ART','MISC','ORATORY','DANCE','QUIZZING','DRAMA','ONLINE'];


var totalEvents=eventCategoryList.length;

if((windowX-(7*200+20))>0)
{
    ebX=200;
    ebY=200;
    mCF=40;
}
else if((windowX-(7*175+15))>0)
{
    ebX=175;
    ebY=175;
    mCF=40;
}
else if((windowX-(7*150+10))>0)
{
    ebX=150;
    ebY=150;
    mCF=25;
}

else
{
    ebX=135;
    ebY=135;
    mCF=25;
}


eventboxX=ebX+'px'; /*These are with pixel added*/
eventboxY=ebY+'px';
mainContentFontsize=mCF+'px';


/*Eventbox global stuff end*/

function initializeEventbox(eventboxResize)
{
    $('.litebox-mainContent-wrapper').css('top',(windowY-(3*ebY))/2+'px');
    $('.litebox-mainContent-wrapper').css('left',((2*ebX)+(windowX-(7*ebX))/2)+'px');


    $('.liteboxTransition').css({
        'height':eventboxY,
        'width':eventboxX,
        'line-height':eventboxY
    });


    $('.litebox-mainContent').css({
        'width': eventboxX,
        'height': eventboxY,
        'top':(ebY*1)+'px',
        'left':(ebX*1)+'px',
        'line-height': eventboxY,
        'font-size': mainContentFontsize
    });

    $('.litebox-contentBox-top').css({
        'top':(ebY*0)+'px',
        'left':(ebX*1)+'px',
        'background-color':colors.musicColor
    });

    $('.litebox-contentBox-bottom').css({
        'top':(ebY*2)+'px',
        'left':(ebX*1)+'px',
        'background-color':colors.miscColor
    });

    $('.litebox-contentBox-right1').css({
        'top':(ebY*1)+'px',
        'left':(ebX*2)+'px',
        'background-color':colors.artColor
    });

    $('.litebox-contentBox-right2').css({
        'top':(ebY*1)+'px',
        'left':(ebX*3)+'px',
        'background-color':colors.danceColor
    });

    $('.litebox-contentBox-right3').css({
        'top':(ebY*1)+'px',
        'left':(ebX*4)+'px',
        'background-color':colors.quizzingColor
    });

    $('.litebox-contentBox-left1').css({
        'top':(ebY*1)+'px',
        'left':(ebX*0)+'px',
        'background-color':colors.oratoryColor
    });

    $('.litebox-contentBox-left2').css({
        'top':(ebY*1)+'px',
        'left':(ebX*-1)+'px',
        'background-color':colors.dramaColor
    });

    $('.litebox-contentBox-left3').css({
        'top':(ebY*1)+'px',
        'left':(ebX*-2)+'px',
        'background-color':colors.onlineColor
    });

    if(eventboxResize===0)
    {        
        $('.liteboxTransition').hover(function(){
            eventboxColor=$(this).css('background-color');
            $(this).css('background-color','#E9E9E9');
        },function(){
            $(this).css('background-color',eventboxColor);
        }); 


        $('.liteboxTransition').click(function() 
        {
            hideEventbox();
            showListbox('category',$(this).attr('id'));
        });
    }
    
}

function showEventbox() 
{
    currentOpenLitebox='eventbox';
    $('.litebox-mainContent').fadeIn(800);
    initializeEventbox(0);
    $('.litebox-contentBox-top').addClass('perspectiveAnimation');
    $('.litebox-contentBox-right1').addClass('perspectiveAnimation');
    $('.litebox-contentBox-bottom').addClass('perspectiveAnimation');
    $('.litebox-contentBox-left1').addClass('perspectiveAnimation');
    linkAnimation('.litebox-contentBox-left1','.litebox-contentBox-left2','perspectiveAnimation');
    linkAnimation('.litebox-contentBox-left1','.litebox-contentBox-right2','perspectiveAnimation');
    linkAnimation('.litebox-contentBox-right2','.litebox-contentBox-right3','perspectiveAnimation');
    linkAnimation('.litebox-contentBox-right2','.litebox-contentBox-left3','perspectiveAnimation');
}



function hideEventbox() 
{
    currentOpenLitebox='';
    $('.liteboxTransition').off();
    $('.liteboxTransition').removeClass('perspectiveAnimation');
    $('.litebox-mainContent').fadeOut(400);
}


/*Add feature of already open eventbox*/

/*-------------------------------------------------------------------------Eventbox end-----------------------------------------------------------------*/





/*-------------------------------------------------------------------------Eventlist start----------------------------------------------------------*/


/*Event-list global stuff*/

var eventlistX, eventlistY, evY, evX, eventlistImgSize,eventlistTextFontsize,eventlistHeight,eventPages,currentpage=0,eventNumX,eventNumY,eventNumber;
var sliderrightoff,sliderleftoff;

eventlistHeight=0.85*windowY; /*Change this if % height changed*/



if((windowX>=1550)&&(windowY>=800))
{
    evX=200;
    evY=200;
    eventlistImgSize=75;  
    eventlistTextFontsize=17;  
}
else if((windowX>=1250)&&(windowY>=734))
{
    evX=175;
    evY=175;
    eventlistImgSize=75;
    eventlistTextFontsize=15;
}
else if((windowX>=1000)&&(windowY>=670))
{
    evX=150;
    evY=150;
    eventlistImgSize=50;
    eventlistTextFontsize=15;
}
else
{
    evX=150;
    evY=150;
    eventlistImgSize=50;
    eventlistTextFontsize=15;    
}

eventlistX=evX+'px';
eventlistY=evY+'px';

/*Event-list global stuff ends*/

function loadeventlistJSON(eventlistResize,type,string)
{

    if(type=='category')
    {
        $.ajax({
            url: '/2014test/gce/',
            type: 'GET',
            dataType: 'json',
            data: {category:string},
        })
        .success(function(e) {
            eventlistJSONstore=e.Events;
            initializeEventlist(eventlistResize);
        });
    
    }
    else if(type=='search')
    {
       $.ajax({
            url: '/2014test/se/',
            type: 'GET',
            dataType: 'json',
            data: {search:string},
        })
        .success(function(e) {
            $.merge(e.Events, e.CategoryEvents);
            eventlistJSONstore=e.Events;
            initializeEventlist(eventlistResize);
        });

    }
    else if(type=='resize')
    {
        initializeEventlist(eventlistResize);
    }

}

function preintializeEventlist(eventlistResize)
{
        $('.event-list')
        .html("<div class='searchbox'>"+
                    "<div class='circle-left'>"+
                        "<div class='arrow-left'></div>"+
                    "</div>"+
                    "<div class='circle-right'>"+
                        "<div class='arrow-right'></div>"+
                    "</div>"+
                    "<div class='circle-event'>"+
                    "<img src='./images/back.png'>"+
                    "</div>"+
                    "<div class='back-event-text'>Back to events</div>"+
                    "<form>"+
                        "<input type='text' value='Search for Events' id='searchbox-input'/>"+
                    "</form>"+
                "</div>"+
                "<div class='page-box'>"+
                "</div>"+
                "<div class='event-list-big-wrapper'></div>");
        $('.event-list').append('<div class="spinner">'+
            '<div class="rect1"></div>'+
            '<div class="rect2"></div>'+
            '<div class="rect3"></div>'+
            '<div class="rect4"></div>'+
            '<div class="rect5"></div>'+
        '</div>');
        $('.event-list-big-wrapper').html("");
        $('.page-box').html("");
        $('#searchbox-input').on('keyup', function(e) {
            if (e.which !== 32) {
                var value = $(this).val();
                var noWhitespaceValue = value.replace(/\s+/g, '');
                var noWhitespaceCount = noWhitespaceValue.length;
                if (noWhitespaceCount>=3) {
                    loadeventlistJSON(0,'search',noWhitespaceValue);
                }
            }
        });

}

function reallyinitializeEventlist()
{
    currentpage=0;
    $('.event-list-big-wrapper').html("");
    $('.spinner').html("");
    $('.event-list-big-wrapper').css('left','0px');
    $('.page-box').html("");
    $('.circle-right').off();
    $('circle-left').off();
    $('.event-text').off();
    $('.circle-event').off();
}


function initializeEventlist(eventlistResize)
{
    reallyinitializeEventlist();
    eventNumX=windowX/(evX+70);
    eventNumY=(eventlistHeight-56-50)/(evY+70);
    eventNumX=Math.floor(eventNumX);
    eventNumY=Math.floor(eventNumY);

    if(eventlistJSONstore !== undefined)
	{eventNumber=eventlistJSONstore.length;
    if((eventNumX===0)||eventNumY===0)
    {

    }
    else if(eventNumber===0)
    {
        $('.event-list-big-wrapper').append("<div class='no-result-text'>Oops, Sorry your search string didn't match any Event or Category</div>");
        $('.no-result-text').css({
            'position':'absolute',
            'width':windowX,
            'font-size':'20px',
            'text-align':'center',
            'top':'100px'
        });
        
    }
    else if(eventNumber>0) 
    {
        eventPages=eventNumber/(eventNumX*eventNumY);
        eventPages=Math.ceil(eventPages);

        $('.event-list-big-wrapper').css({
            'position':'absolute',
            'width':eventPages*windowX,
            'height':eventNumY*(evY+70)
        });


        var n=0;
        for(var j=0; j<eventPages; j++)
        {

            $('.event-list-big-wrapper').append("<div class='event-list-wrapper"+j+"'></div>");
            $('.event-list-wrapper'+j).css({
                'position':'absolute',
                'width':windowX,
                'height':eventNumY*(evY+70),
                'left':j*windowX,
                'padding-left':(windowX-(evX+70)*eventNumX)/2
            });
            $('.page-box').append("<div class='page-circle' id='page-circle"+j+"'></div>");

            for(var i=0; i<eventNumY*eventNumX; i++)
            {
                if(n<eventlistJSONstore.length)
                {
                    var a=eventlistJSONstore[n].eventdescription;
                    if(a.length>100)
                        a=a.substring(0,100) + " ...";
                    else if(a.length===0)
                        a='';

                    $('.event-list-wrapper'+j)
                    .append("<div class='event-box-wrapper' style='display:none'>"+
                                "<div class='event-box-cube'>"+
                                    "<div class='event-icon cube-side' style='background-color:"+returnColor(eventlistJSONstore[n].eventcategory)+"'>"+
                                        "<div class='list-event-name'>"+eventlistJSONstore[n].eventname+"</div>"+
                                        "<img src='"+eventlistJSONstore[n].eventicon+"'/>"+
                                        "<div class='list-category-name'>"+eventlistJSONstore[n].eventcategory+"</div>"+
                                    "</div>"+

                                    "<div class='event-text cube-side' id='"+eventlistJSONstore[n].eventid+"' style='background-color:"+returnDullColor(eventlistJSONstore[n].eventcategory)+"'>"+
                                        "<div class='list-event-description'>"+a+"</div>"+
                                    "</div>"+
                                "</div>"+
                            "</div>");
                    n++;
                }
            }
        }
    }

    if(eventNumber>0)
    {
        $('.event-box-wrapper').css({
            'height':eventlistY,
            'width':eventlistX
        });

        $('.event-box-cube').css({
            'height':eventlistY,
            'width':eventlistX            
        });

        $('.cube-side').css({
            'height':eventlistY,
            'width':eventlistX   
        });

        $('.event-icon').css({
            'transform':'translateZ('+evY/2+'px)'
        });

        $('.event-text').css({
            'transform':' rotateY(-270deg) translateX('+evY/2+'px)'
        });

        $('.event-icon img').css({
            'width':eventlistImgSize
        });

        $('.event-text').css({
            'font-size':eventlistTextFontsize+'px'
        });

        $('.page-box').css('left',(windowX-27*eventPages)/2+'px');

        if(eventlistResize===0)
        {
            $('.event-box-wrapper').fadeIn(0); //Give this fade if code fixed
        }
        else
        {
            $('.event-box-wrapper').fadeIn(0);
        }

        $('.circle-right').click(function(event) {
            eventlistSlider(currentpage+1);    
        });

        $('circle-left').click(function(event) {
            eventlistSlider(currentpage-1);
        });

        $('.event-text').click(function(event) {
            hideListbox();
            showeventpage($(this).attr('id'));
        });
    }

    $('#searchbox-input').focusin(function(){
        $(this).val('').css('text-align','left');
    });

    $('#searchbox-input').focusout(function() {
        $(this).val('Search for Events').css('text-align','center');
    });

    $('.circle-event').hover(function() {
        $('.back-event-text').fadeIn(200);
    }, function() {
        $('.back-event-text').fadeOut(200);
    });
    $('.circle-event').click(function(event) {
        hideListbox();
        showEventbox();
    });
    
    if(eventNumber>0)
    initializeSliderControls(0);
    else if(eventNumber<=0)
    initializeSliderControls(1);
	}//if ends
}

function showListbox(type,string)
{
    currentOpenLitebox='eventlist';
    $('.event-list').delay(700).fadeIn(400);
    preintializeEventlist(0);
    loadeventlistJSON(0,type,string);
}

function hideListbox()
{
    currentOpenLitebox='';
    $('.event-list').fadeOut(400);
    $('.event-list').html("");
}

function eventlistSlider(page)
{
    $('.event-list-big-wrapper').animate({
        'left': -(page)*windowX
    },
        windowX/2, function() 
        {

        });

    $('#page-circle'+currentpage).css({
        'background-color':'transparent'
    });

    currentpage=page;

    initializeSliderControls(0);
}

function initializeSliderControls(stopEventlistSlider)
{
    if(currentpage===0 || stopEventlistSlider==1)
    {
        $('.circle-left').off();
        $('.circle-left').hover(function() {
            $(this).css('background-color','#EAEAEA');
        });
        $('.circle-left').css({
            'cursor':'default'
        });
        $('.arrow-left').css({
            'border-right':'10px solid #949494'
        });
        sliderleftoff=1;
    }
    if(currentpage==eventPages-1 || stopEventlistSlider==1)
    {
        $('.circle-right').off();        
        $('.circle-right').hover(function() {
            $(this).css('background-color','#EAEAEA');
        });
        $('.circle-right').css({
            'cursor':'default'
        });
        $('.arrow-right').css({
            'border-left':'10px solid #949494'
        });
        sliderrightoff=1;
    }
    if((currentpage!==0)&&(sliderleftoff==1))
    {
        restoreleftControls();
    }

    if((currentpage!==eventPages-1)&&(sliderrightoff==1))
    {
        restorerightControls();
    }

    $('#page-circle'+currentpage).css({
        'background-color':'#FFF'
    });
}

function restoreleftControls()
{
    $('.circle-left').off();
    $('.circle-left').click(function(event) {
        eventlistSlider(currentpage-1);
    });

    $('.circle-left').hover(function() {
        $(this).css('background-color','#C5C5C5');
    });

    $('.circle-left').css({
        'cursor':'pointer'
    });

    $('.arrow-left').css({
        'border-right':'10px solid #292929'
    });
    sliderleftoff=0;
}

function restorerightControls()
{
    $('.circle-right').off();
    $('.circle-right').click(function(event) {
        eventlistSlider(currentpage+1);    
    });

    $('.circle-right').hover(function() {
        $(this).css('background-color','#C5C5C5');
    });

    $('.circle-right').css({
        'cursor':'pointer'
    });

    $('.arrow-right').css({
        'border-left':'10px solid #292929'
    });
    sliderrightoff=0;
}


/*-------------------------------------------------------------------------Eventlist end----------------------------------------------------------*/


/*--------------------------------------------------------------------------Eventpage start-------------------------------------------------------*/

$('.event-litebox').perfectScrollbar();


function loadEventpageJSON(eventpageid)
{       
        $('.event-litebox').append('<div class="spinner">'+
            '<div class="rect1"></div>'+
            '<div class="rect2"></div>'+
            '<div class="rect3"></div>'+
            '<div class="rect4"></div>'+
            '<div class="rect5"></div>'+
        '</div>');
        $('.spinner').css({
            'margin-top':windowY/2
        });
        if(currentOpenLitebox!=='')
        {        
            $('.event-litebox').fadeIn(400);
        }
        $('.event-litebox').kinetic();
       $.ajax({
            url: '/2014test/ged/',
            type: 'GET',
            dataType: 'json',
            data: {id:eventpageid},
        })
        .success(function(e) {
            eventpageJSONstore=e;
            initializeEventpage();
            if(eventlistJSONstore!==undefined)
            {
                if(eventpageJSONstore.category!=='other')
                {
                    $('.event-litebox')
                    .prepend("<div class='circle-eventpage'>"+
                            "<img src='./images/back.png'>"+
                            "</div>"+
                            "<div class='back-eventpage-text'>Back to event List</div>");
                    $('.circle-eventpage').hover(function() {
                        $('.back-eventpage-text').fadeIn(200);
                        }, function() {
                        $('.back-eventpage-text').fadeOut(200);
                    });
                    $('.circle-eventpage').click(function(event) {
                        hideeventpage();
                        showListbox('resize','');
                    });
                }
            }
        });

}

function initializeEventpage()
{
    $('.event-litebox').html(eventpageJSONstore.content);
}


function showeventpage(eventpageid)
{
    currentOpenLitebox='eventpage';
    loadEventpageJSON(eventpageid);
}

function hideeventpage()
{
    $('.event-litebox').finish();
    $('.event-litebox').fadeOut(400);
    currentOpenLitebox='';
    $('.event-litebox').html("");
}





/*--------------------------------------------------------------------------Eventpage end-------------------------------------------------------*/




/*------------------------------------------------------------------------Other functions------------------------------------------------------*/


function linkAnimation(beforeClass, afterClass, addedClass)
{
    $(beforeClass).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',   
    function(e) 
    {
        $(afterClass).addClass(addedClass);
    });
}

function returnColor(eventcategory)
{
    switch(eventcategory) {
    case 'music':
    return colors.musicColor;   
    
    case 'art':
    return colors.artColor;    
    
    case 'misc':
    return colors.miscColor;
    
    case 'oratory':
    return colors.oratoryColor;
    
    case 'dance':
    return colors.danceColor;
    
    case 'quizzing':
    return colors.quizzingColor;
    
    case 'drama':
    return colors.dramaColor;
    
    case 'online':
    return colors.onlineColor;
    }
}

function returnDullColor(eventcategory)
{
    switch(eventcategory) {
    case 'music':
    return dullColors.musicColor;   
    
    case 'art':
    return dullColors.artColor;    
    
    case 'misc':
    return dullColors.miscColor;
    
    case 'oratory':
    return dullColors.oratoryColor;
    
    case 'dance':
    return dullColors.danceColor;
    
    case 'quizzing':
    return dullColors.quizzingColor;
    
    case 'drama':
    return dullColors.dramaColor;
    
    case 'online':
    return dullColors.onlineColor;
    }
}

/*------------------------------------------------------------------------Other functions end------------------------------------------------------*/






/*----------------------------------------------------------------------Update Script Starts-------------------------------------------------------*/

function initializeUpdate()
{
    $.getJSON('./js/update.json',  function(json) {
            var i=0;
            $('.updates').html((json.updates[0].updatetext));
            $('.updates').on('webkitAnimationIteration oanimationiteration oAnimationIteration msAnimationIteration animationiteration',   
            function(e) 
            {
                i++;
                if(i==json.updates.length)
                i=0; 
                if(json.updates[i].updatetype=='external')
                {
                    $('.updates').off('click');
                    $('.updates').css({
                        'cursor':'pointer'
                    });
                    $('.updates').click(function(event) {
                        window.open(json.updates[i].eventurl,json.updates[i].linkopentype);
                    });
                    $('.updates').html((json.updates[i].updatetext));
                }
                else if(json.updates[i].updatetype=='event')
                {
                    $('.updates').off('click');
                    $('.updates').css({
                        'cursor':'pointer'
                    });
                    $('.updates').click(function(event) {
                        $('.header').animate(
                        {
                            top: -50
                        },400);
                    $('.black-back').fadeIn(400);
                    showeventpage(json.updates[i].eventid);
                    });
                    $('.updates').html((json.updates[i].updatetext));
                }
                else if(json.updates[i].updatetype=='plain')
                {
                    $('.updates').off('click');
                    $('.updates').css({
                        'cursor':'default'
                    });
                    $('.updates').html((json.updates[i].updatetext));
                }
            });
    });
}



/*-----------------------------------------------------------------------Update script ends--------------------------------------------------------*/



/*-----------------------------------------------------------------------Resize script here---------------------------------------------------------*/

$(window).resize(function() {
    windowX=$(this).width();
    windowY=$(this).height();
    /*Eventbox recalculation*/
    if((windowX-(7*200+20))>0)
    {
        ebX=200;
        ebY=200;
        mCF=40;
    }
    else if((windowX-(7*175+15))>0)
    {
        ebX=175;
        ebY=175;
        mCF=40;
    }
    else if((windowX-(7*150+10))>0)
    {
        ebX=150;
        ebY=150;
        mCF=25;
    }

    else
    {
        ebX=135;
        ebY=135;
        mCF=25;
    }

    eventboxX=ebX+'px';
    eventboxY=ebY+'px';
    mainContentFontsize=mCF+'px';
    initializeEventbox(1);


    /*Eventlist Recalculation*/
    eventlistHeight=0.85*windowY;
    if((windowX>=1550)&&(windowY>=800))
    {
        evX=200;
        evY=200;
        eventlistImgSize=75;  
        eventlistTextFontsize=17;  
    }
    else if((windowX>=1250)&&(windowY>=734))
    {
        evX=175;
        evY=175;
        eventlistImgSize=75;
        eventlistTextFontsize=15;
    }
    else if((windowX>=1000)&&(windowY>=670))
    {
        evX=150;
        evY=150;
        eventlistImgSize=50;
        eventlistTextFontsize=15;
    }
    else
    {
        evX=150;
        evY=150;
        eventlistImgSize=50;
        eventlistTextFontsize=15;    
    }
    eventlistX=evX+'px';
    eventlistY=evY+'px';
    currentpage=0;
    initializeEventlist(1,'resize','');

});


/*------------------------------------------------------------------------Resize Script ends------------------------------------------------*/


/*--------------------------------- ELEMENT FUNCTIONS ----------------------------------*/

$('#petrolPumpPosterAbstract').click(function(event) {
    //movies
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(81);
    $('.black-back').fadeIn(400);
});

$('#mysteryMachineAbstract, #pokemon1Abstract, #pokemon2Abstract, #poleAbstract, #krustyCrabAbstract, #flinstoneCarAbstract').click(function(event) {
    //cartoon
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(80);
    $('.black-back').fadeIn(400);
});

$('#forestBillboardAbstract, #notificationSpeakersAbstract').click(function(event) {
    //updates
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(84);
    $('.black-back').fadeIn(400);
});

$('#mamoBoardAbstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(96);
    $('.black-back').fadeIn(400);
});

$('#parachuteAbstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(77);
    $('.black-back').fadeIn(400);
});


$('#phoneBooth2Abstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(78);
    $('.black-back').fadeIn(400);
});


$('#oasisQuizAbstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(90);
    $('.black-back').fadeIn(400);
});

$('#tent3Abstract, #tent4Abstract, #tent5Abstract, #dramaBoardAbstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(42);
    $('.black-back').fadeIn(400);
});

$('#archiveslogAbstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(76);
    $('.black-back').fadeIn(400);
});

$('#fashpBoardAbstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(27);
    $('.black-back').fadeIn(400);
});

$('#amulAdAbstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(79);
    $('.black-back').fadeIn(400);
});

$('#treasureAbstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(75);
    $('.black-back').fadeIn(400);
});

$('#centralPerkAbstract').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(82);
    $('.black-back').fadeIn(400);
});

$('#oasislogo').click(function(event) {
    $('.header').animate(
    {
        top: -50
    },400);
    showeventpage(83);
    $('.black-back').fadeIn(400);
});