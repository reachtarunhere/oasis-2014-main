var fbRedirect = 0;

function statusChangeCallback(response) {
    if (response.status === 'connected') {
        document.getElementById('status').innerHTML = '';  
        testAPI();
    } else if (response.status === 'not_authorized') {
        document.getElementById('status').innerHTML = 'Please log into this app.';
    } else {
        document.getElementById('status').innerHTML = 'Please log into Facebook.';
    }
}

function checkLoginState() {
    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
}

function facebookLogin() {
    FB.login(function(response) {
        if (response.authResponse) { 
            testAPI();
            fbRedirect = 1;
        }
        else { 
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {
        scope: 'public_profile,email,user_location,user_education_history,user_likes'
    });
}

window.fbAsyncInit = function() {
    FB.init({
        appId      : '570243296401349',
        cookie     : true,  // enable cookies to allow the server to access 
                        // the session
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.1' // use version 2.1
    });

    FB.getLoginStatus(function(response) {
        statusChangeCallback(response);
    });
};

(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

function testAPI() {
    //console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
        //console.log('Successful login for: '+response.name);
        //console.log(response);
        var currentcity = ((response.location.name).indexOf(",")===-1)?(response.location.name):((response.location.name).substring(0,(response.location.name).indexOf(",")));
        $("#userName").val(response.name);
        if(response.gender == 'male')
            $(":radio[value=male]").attr("checked",true)
        else if(response.gender == 'female')
            $(":radio[value=female]").attr("checked",true)
        $("#userEmail").val(response.email);
        $("#userLocation").val(currentcity);
        $("#userSchool").val(response.education[0].school.name);
        
    });
}


$(window).load(function() {
    $("#submitForm").click(function(e) {
        var error = "";
        e.preventDefault();

        var phoVal = $('#phoneno').val();
        var phoReg = /^([0-9]{10})$/;
        var phoAltVal = $('#phonenoAlt').val();
        
        if(phoAltVal != "")
            var phoAltTest = phoReg.test(phoAltVal);
        
        var phoTest = phoReg.test(phoVal);
        var emaVal = $('#userEmail').val();
        var emaReg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
        var emaTest = emaReg.test(emaVal);

        var namVal = $("#userName").val();
        var genVal = $("#userGender:checked").val();
        var emaVal = $("#userEmail").val();
        var locVal = $("#userLocation").val();
        var schVal = $("#userSchool").val();

        var empty = (namVal == "")||(genVal == undefined)||(emaVal == "")||(locVal == "")||(schVal == "");

        var contact = (phoAltVal !="")?(phoTest&&phoAltTest):(phoTest);

        if(contact&&emaTest&&!(empty)) {
            if (fbRedirect == 1) {
                FB.api('/me/likes/243318882409289', function(response) {
                    console.log(response);
                    like = response.data.length;
                    if (like == 1) {
                        $("#submitForm").css("background-color","#ccc")
                        $.ajax({
                        url : "/2014test/register/",
                        type : "POST",
                        data : $( "#regDetail" ).serialize(),
                        success : function(data) {
                            var obj = $.parseJSON(data);
                            $(".step1").css("display","none");
                            $(".step3").html(obj.message);    
                            $(".step3").css("display","block");
                        }
                        });
                    }
                    else 
                        alert("Like our Facebook Page !");
                });
            }
            else {
                $("#submitForm").css("background-color","#ccc")
                $.ajax({
                    url : "/2014test/register/",
                    type : "POST",
                    data : $( "#regDetail" ).serialize(),
                    success : function(data) {
                        var obj = $.parseJSON(data);
                        $(".step1").css("display","none");
                        $(".step3").html(obj.message);    
                        $(".step3").css("display","block");
                    }
                });
            }
            
        }
        else {
            if(!contact) {
                if (!phoVal)
                    error = "Please enter 10 digit Mobile number without +91 or 0 prefix."
                if (phoAltVal != "" && !phoAltTest)
                    error = "\nAlternate Mobile number is Invalid"
            }
            if(!emaTest)
                error = error + "\nPlease enter a valid email ID."
            if(empty)
                error = error + "\nPlease fill all the information."
            alert(error);
        }      
    });
})