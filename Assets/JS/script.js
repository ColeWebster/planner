// I want to have a daily date on the page
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

//Loads on ready
$(document).ready( function () {
    colorChange();
    saveText();
})


// Psuedo Code
function colorChange() {
//1. Grabs time from above
    var liveTime = moment().hours(); 
//2. Checks the hours
    $(".input").each(function () {
        var hourColumn = parseInt($(this).attr('id'));

        if (hourColumn == liveTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (liveTime == hourColumn) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
        else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });     
}

// button function
$(".saveBtn").click(function() {
    var eventText;
    var eventTime;
    eventText = $(this).siblings(".input").val("");
    eventText = $(this).siblings(".input").val();
    eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, JSON.stringify(eventText));

colorChange ();
saveText ();

});
 
// Save to local
function saveText() {
    var saveEventText8 = JSON.parse(localStorage.getItem("8:00 am"));
    $("#8").val("");
    $("#8").val(saveEventText8);

    var saveEventText9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveEventText9);
    
    var saveEventText10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveEventText10);
}