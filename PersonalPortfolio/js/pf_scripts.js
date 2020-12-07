"use strict"
/*

Original Author: Joshua Novikoff
Date Created: 9/27/19
Version: 1.2
Date Last Modified: 10/23/19
Modified by: Joshua Novikoff
Modification log: Made minor adjustments,
                  Added scripting for contact page
                  



 
*/
/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 1000);

/* Function to create and run the countdown clock */
function runClock() {

    /* Store the current date and time */
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    /* Display the current date and time */
    document.getElementById("timeDate").innerHTML =
    dateStr + "<br />" + timeStr;
}

/*Contact form collapse on fill out  CREDIT TO rsplak ON STACKOVERFLOW*/
$('#name, #email, #message').bind('keyup', function() {
    if(allFilled()) $('#submit').removeAttr('disabled')
    else{$('#submit').prop("disabled", true);};
});

function allFilled() {
    var filled = true;
    $('body input').each(function() {
        if($(this).val() == '') filled = false;
    });
    return filled;
}

/* Custom JQuery Scripting */
$(window).on('load', function() {
    $("span").animate({fontSize: "+=10px"});
});
$("#submit").click (function() {
    $("#info").hide(1000);    
    $("#contact").text("Thanks for your feedback!");
});
$("#reset").click (function() {
    $("#info").show(1000);
    $("#contact").text("Contact Me")
});