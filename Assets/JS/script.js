// I want to have a daily date on the page
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm a'));

// Psuedo Code
function colorChange() {
//1. Grabs time from above
    var liveTime = moment().hour(); 

//2. Checks the hours
    $(".time-block").each(function () {
        var hourColumn = parseInt($(this).attr('id').split('hour')[1]);
        

//3. Check the time status
        if (hourColumn < liveTime) {
            $(this).addClass('past');
            $(this).removeClass('present');
            $(this).removeClass('future');
        }
        //Checking if the current time is is less than the hours listed
        else if (liveTime === hourColumn) {
            $(this).removeClass('past');
            $(this).removeClass('future');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('past');
            $(this).addClass('future');
            $(this).removeClass('present');
        }
    })     
}

// Want to save to local storage
localStorage.setItem(time, value);



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
