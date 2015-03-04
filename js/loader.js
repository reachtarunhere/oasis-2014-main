/* Coded by (DVM : Nobody, Nobody, Nobody does it better)*/

var x;  //Position of Cursor
var y;
var counter=0;  //Number of steps before fadeOut
var z=0;

var windowX;    //Window width & height
var windowY;

var scaleRatioX; //Scale Ratio to change cursor and image drawn location
var scaleRatioY;


windowX=$(window).width();
windowY=$(window).height();

scaleRatioX=windowX/1366;
scaleRatioY=windowY/768;

var canvas = document.getElementById('frontCanvas');
var ctx = canvas.getContext('2d');

var imgCanvas = document.getElementById('imgCanvas');
var imgctx = imgCanvas.getContext('2d');

canvas.style.height=windowY+'px';
canvas.style.width=windowX+'px';
imgCanvas.style.height=windowY+'px';
imgCanvas.style.width=windowX+'px';

var img;

img = document.createElement('IMG');
img.src = "./img/back-img.jpg";
$('.loading-percent').text('Loading...');
unBlur();

$(window).load(function() {
    $('.click-to-enter').fadeIn(400);
    $('.loading-percent').fadeOut(400);



});

$('.click-to-enter').click(function(event) {

     

    $('.click-to-enter').fadeOut('400', function() {
        $('.content-wrapper').css({
            "display":"block"
        });
        $('.loader').off(); //Remove all event handlers from main screen
        //$(window).off('resize'); //Remove all event handlers from window(resize) and pass to next code
        $('#frontCanvas').fadeOut(400); //fade out remaining unblur
        counter=0;
        setTimeout(function()
        {
            ctx.clearRect(0,0,1366,768);
            $('#frontCanvas').fadeIn(0);
        },400);
        $('.loader').fadeOut(500,function(){
            $('.loader').remove();
        });
    });
});


/* $(window).resize(function(event) 
{
    windowX=$(window).width();
    windowY=$(window).height();
    scaleRatioX=windowX/1366;
    scaleRatioY=windowY/768;
    canvas.style.height=windowY+'px';
    canvas.style.width=windowX+'px';
    imgCanvas.style.height=windowY+'px';
    imgCanvas.style.width=windowX+'px';
});

 */
function unBlur()
{
    img.onload = function () 
    {
        loadBackImage();
        $('.loader').mousemove(function(e) 
        {
            e = window.event || e;
            if(counter<150) //Make this time based
            {
                x=e.clientX;
                y=e.clientY;
                ctx.save();
                ctx.beginPath();
                ctx.arc(x/scaleRatioX, y/scaleRatioY, 50, 0, Math.PI *2);
                ctx.clip();
                ctx.globalAlpha=0.1;
                ctx.drawImage(img, 0, 0);
                ctx.restore();
                counter++;
            }
            else
            {
                $('#frontCanvas').fadeOut(400);   
                counter=0;
                setTimeout(function()
                {
                    ctx.clearRect(0,0,1366,768);
                    $('#frontCanvas').fadeIn(0);
                },400);

            }
        });

    };
}

function loadBackImage()
{
    imgctx.drawImage(img, 0, 0);
    stackBlurCanvasRGBA( 'imgCanvas', 0, 0, 1920, 1080, 15);
}


